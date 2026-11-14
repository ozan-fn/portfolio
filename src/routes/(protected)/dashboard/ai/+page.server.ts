import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { getAiSettings, saveAiSettings, validateAiSettings } from "$lib/ai";

export const load: PageServerLoad = async () => {
  const settings = await getAiSettings();

  return {
    baseUrl: settings?.baseUrl ?? "",
    model: settings?.model ?? "",
    // API key tidak pernah dikirim ke klien.
    hasKey: !!settings?.apiKey,
  };
};

export const actions: Actions = {
  save: async ({ request }) => {
    const formData = await request.formData();
    const parsed = validateAiSettings({
      baseUrl: formData.get("baseUrl"),
      model: formData.get("model"),
      apiKey: formData.get("apiKey"),
    });

    if (!parsed.ok) {
      return fail(400, { message: parsed.message });
    }

    try {
      const existing = await getAiSettings();
      if (!parsed.value.apiKey && !existing?.apiKey) {
        return fail(400, { message: "API key wajib diisi saat pertama kali menyimpan" });
      }

      await saveAiSettings(parsed.value);
      return { success: true };
    } catch (error) {
      console.error("AI settings error:", error);
      return fail(500, { message: "Gagal menyimpan pengaturan AI" });
    }
  },
};
