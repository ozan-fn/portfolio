import prisma from "$lib/prisma";

const SETTINGS_ID = "singleton";

/** Prompt tetap, tidak bisa diubah dari UI supaya hasilnya konsisten. */
export const AI_SYSTEM_PROMPT = `Kamu adalah penulis blog untuk portfolio seorang developer Indonesia.
Tulis dalam bahasa Indonesia yang natural dan santai, bukan bahasa marketing.

Aturan output:
- Format Markdown murni, tanpa pembungkus \`\`\` dan tanpa komentar pembuka.
- Mulai langsung dengan isi; jangan ulangi judul sebagai heading.
- Struktur: paragraf pembuka, 2-3 sub-judul (##), contoh kode bila relevan, penutup singkat.
- Panjang 500-900 kata. Jangan mengarang fakta, statistik, atau kutipan.`;

export type AiSettingsValue = {
  baseUrl: string;
  model: string;
  apiKey?: string;
};

export type AiSettingsValidation =
  | { ok: true; value: AiSettingsValue }
  | { ok: false; message: string };

export function validateAiSettings(input: {
  baseUrl: unknown;
  model: unknown;
  apiKey?: unknown;
}): AiSettingsValidation {
  const baseUrl = typeof input.baseUrl === "string" ? input.baseUrl.trim() : "";
  const model = typeof input.model === "string" ? input.model.trim() : "";
  const rawKey = typeof input.apiKey === "string" ? input.apiKey.trim() : "";

  if (!baseUrl) return { ok: false, message: "Base URL wajib diisi" };
  if (model.length === 0) return { ok: false, message: "Model wajib diisi" };
  if (model.length > 100) return { ok: false, message: "Nama model maksimal 100 karakter" };

  let parsed: URL;
  try {
    parsed = new URL(baseUrl);
  } catch {
    return { ok: false, message: "Base URL tidak valid" };
  }
  if (!/^https?:$/.test(parsed.protocol)) {
    return { ok: false, message: "Base URL harus http atau https" };
  }

  const value: AiSettingsValue = { baseUrl: baseUrl.replace(/\/+$/, ""), model };
  if (rawKey) value.apiKey = rawKey;

  return { ok: true, value };
}

export function getAiSettings() {
  return prisma.aiSetting.findUnique({ where: { id: SETTINGS_ID } });
}

/** API key lama dipertahankan kalau form dikirim tanpa key baru. */
export function saveAiSettings(value: AiSettingsValue) {
  const data = { baseUrl: value.baseUrl, model: value.model, ...(value.apiKey ? { apiKey: value.apiKey } : {}) };

  return prisma.aiSetting.upsert({
    where: { id: SETTINGS_ID },
    update: data,
    create: { id: SETTINGS_ID, ...data, apiKey: value.apiKey ?? "" },
  });
}

/** OpenAI-compatible chat completion. Dipisah dari DB supaya mudah dites. */
export async function generateText(
  prompt: string,
  settings: { baseUrl: string; model: string; apiKey: string },
): Promise<string> {
  const res = await fetch(`${settings.baseUrl.replace(/\/+$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${settings.apiKey}`,
    },
    body: JSON.stringify({
      model: settings.model,
      messages: [
        { role: "system", content: AI_SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`AI menolak permintaan (${res.status}): ${detail.slice(0, 200)}`);
  }

  const data = (await res.json()) as { choices?: { message?: { content?: unknown } }[] };
  const text = data.choices?.[0]?.message?.content;

  if (typeof text !== "string" || !text.trim()) {
    throw new Error("AI mengembalikan respons kosong");
  }

  return text.trim();
}
