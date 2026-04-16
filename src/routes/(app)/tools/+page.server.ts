import prisma from "$lib/prisma";
import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { nanoid } from "nanoid";

export const load: PageServerLoad = async ({ cookies }) => {
  const startTime = Date.now();

  // Basic session-based view limiting
  const hasViewed = cookies.get("text_share_viewed");

  const [shortLinks, textShare] = await Promise.all([
    prisma.shortLink.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    hasViewed
      ? prisma.textShare.findUnique({ where: { id: "singleton" } })
      : prisma.textShare.upsert({
          where: { id: "singleton" },
          update: { views: { increment: 1 } },
          create: { id: "singleton", content: "", views: 1 },
        }),
  ]);

  if (!hasViewed) {
    cookies.set("text_share_viewed", "true", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60, // 1 hour cooldown
    });
  }

  const endTime = Date.now();

  return {
    shortLinks,
    textShare: textShare?.content ?? "",
    views: textShare?.views ?? 0,
    latency: endTime - startTime,
  };
};

export const actions: Actions = {
  share: async ({ request }) => {
    const formData = await request.formData();
    const content = formData.get("content") as string;

    if (content === null) {
      return fail(400, { message: "Content is required" });
    }

    try {
      await prisma.textShare.upsert({
        where: { id: "singleton" },
        update: { content },
        create: { id: "singleton", content },
      });
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
