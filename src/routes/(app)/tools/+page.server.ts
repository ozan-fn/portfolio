import prisma from "$lib/prisma";
import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { nanoid } from "nanoid";

export const load: PageServerLoad = async () => {
  const shortLinks = await prisma.shortLink.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return {
    shortLinks,
  };
};

export const actions: Actions = {
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
