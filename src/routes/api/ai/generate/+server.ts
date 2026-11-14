import { json, error } from '@sveltejs/kit';
import { generateText, getAiSettings } from '$lib/ai';

const MIN_PROMPT = 3;
const MAX_PROMPT = 8000;

export async function POST({ request, locals }) {
  if (!locals.user) throw error(401, 'Unauthorized');

  const body = await request.json().catch(() => null);
  const prompt = typeof body?.prompt === 'string' ? body.prompt.trim() : '';

  if (prompt.length < MIN_PROMPT) throw error(400, 'Brief terlalu pendek');
  if (prompt.length > MAX_PROMPT) throw error(400, 'Brief terlalu panjang');

  const settings = await getAiSettings();
  if (!settings?.baseUrl || !settings.model || !settings.apiKey) {
    throw error(409, 'Atur Base URL, model, dan API key dulu di Dashboard → AI Settings');
  }

  try {
    const text = await generateText(prompt, settings);
    return json({ success: true, text });
  } catch (err) {
    console.error('AI generate error:', err);
    throw error(502, err instanceof Error ? err.message : 'Gagal memanggil AI');
  }
}
