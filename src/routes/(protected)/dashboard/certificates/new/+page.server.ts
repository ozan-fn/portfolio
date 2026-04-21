import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { uploadImage } from "$lib/storage";

export const actions: Actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const issuer = formData.get("issuer") as string;
    const issueDateStr = formData.get("issueDate") as string;
    const expiryDateStr = formData.get("expiryDate") as string;
    const thumbnailFile = formData.get("thumbnail") as File;
    const verifyUrl = formData.get("verifyUrl") as string;
    const order = parseInt(formData.get("order") as string) || 0;
    const featured = formData.get("featured") === "on";

    if (!title || !slug || !issuer || !issueDateStr) {
      return fail(400, {
        message: "Title, slug, issuer and issue date are required",
      });
    }

    try {
      let thumbnail = null;
      if (thumbnailFile && thumbnailFile.size > 0) {
        const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
        thumbnail = await uploadImage(buffer, "certificates", thumbnailFile.type);
      }

      await prisma.certificate.create({
        data: {
          title,
          slug,
          issuer,
          issueDate: new Date(issueDateStr),
          expiryDate: expiryDateStr ? new Date(expiryDateStr) : null,
          thumbnail,
          verifyUrl,
          order,
          featured,
        },
      });
    } catch (err) {
      console.error("Create certificate error:", err);
      return fail(500, { message: "Failed to create certificate. Ensure slug is unique." });
    }

    throw redirect(303, "/dashboard/certificates");
  },
};
