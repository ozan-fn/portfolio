import prisma from "$lib/prisma";
import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { nanoid } from "nanoid";
import { loadTextShare, saveTextShare, validateTextShareContent } from "$lib/text-share";

// Alias harus aman dipakai sebagai satu segmen URL dan tidak boleh
// menabrak route aplikasi (hooks hanya redirect kalau route tidak ada).
const TEXT_SHARE_ROOM = "tes-portfolio-sinkron-123";
const ALIAS_PATTERN = /^[a-zA-Z0-9_-]{1,50}$/;
const RESERVED_ALIASES = new Set([
  "login", "dashboard", "tools", "blog", "projects", "certificates",
  "contact", "cv", "game", "api", "_app", "favicon.ico", "robots.txt",
]);

export const load: PageServerLoad = async ({ cookies, isDataRequest, locals }) => {
  const hasViewed = cookies.get("text_share_viewed");
  // Cuma full page load yang dihitung view, bukan prefetch/invalidate.
  const countView = !hasViewed && !isDataRequest;

  const [shortLinks, textShare] = await Promise.all([
    prisma.shortLink.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    loadTextShare(countView),
  ]);

  if (countView) {
    cookies.set("text_share_viewed", "true", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60,
    });
  }

  return {
    shortLinks,
    textShare: textShare?.content ?? "",
    // Room MQTT hanya dikirim ke user yang login, jadi tamu tidak bisa
    // ikut menyambung ke room kolaborasi walau membaca bundle JS.
    room: locals.user ? TEXT_SHARE_ROOM : null,
  };
};

export const actions: Actions = {
  share: async ({ request, locals }) => {
    // Text share bisa ditimpa siapa saja kalau endpoint ini terbuka.
    if (!locals.user) {
      return fail(401, { message: "Login dulu untuk menyimpan text share" });
    }

    const formData = await request.formData();
    const parsed = validateTextShareContent(formData.get("content"));

    if (!parsed.ok) {
      return fail(400, { message: parsed.message });
    }

    const base = formData.get("base");

    try {
      const result = await saveTextShare(parsed.content, typeof base === "string" ? base : undefined);
      if (result === "conflict") {
        return fail(409, {
          message: "Teks sudah diubah di tempat lain. Muat ulang halaman sebelum menyimpan lagi.",
        });
      }
      return { success: true };
    } catch (error) {
      console.error("TextShare Error:", error);
      return fail(500, { message: "Gagal menyimpan teks" });
    }
  },

  shorten: async ({ request }) => {
    const formData = await request.formData();
    const url = formData.get("url") as string;
    const alias = formData.get("alias") as string;

    if (!url) {
      return fail(400, { message: "URL is required" });
    }

    try {
      // Basic URL validation
      const urlObj = new URL(url);
      const requestUrl = new URL(request.url);

      // Prevent shortening links from the same domain
      if (urlObj.hostname === requestUrl.hostname) {
        return fail(400, { message: "URL sudah merupakan link dari domain ini" });
      }
    } catch (e) {
      return fail(400, { message: "Invalid URL format" });
    }

    let finalSlug = alias?.trim();

    if (finalSlug) {
      if (!ALIAS_PATTERN.test(finalSlug)) {
        return fail(400, {
          message: "Alias hanya boleh huruf, angka, - dan _ (maks 50 karakter)",
        });
      }
      if (RESERVED_ALIASES.has(finalSlug.toLowerCase())) {
        return fail(400, { message: "Alias sudah dipakai halaman lain" });
      }

      // Check if alias already exists
      const existing = await prisma.shortLink.findUnique({
        where: { alias: finalSlug },
      });
      if (existing) {
        return fail(400, { message: "Alias already taken" });
      }
    } else {
      // Generate random slug if no alias provided
      finalSlug = nanoid(6);
    }

    try {
      const newLink = await prisma.shortLink.create({
        data: {
          url,
          alias: finalSlug,
        },
      });
      return { success: true, newLink };
    } catch (error) {
      console.error("Prisma Error:", error);
      return fail(500, { message: "Failed to create short link" });
    }
  },
};
