import prisma from "$lib/prisma";
import { error, fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { uploadImage, deleteFile } from "$lib/storage";

export const load: PageServerLoad = async ({ params }) => {
    const certificate = await prisma.certificate.findUnique({
        where: { id: params.id },
    });

    if (!certificate) {
        throw error(404, "Certificate not found");
    }

    return {
        certificate,
    };
};

export const actions: Actions = {
    update: async ({ params, request }) => {
        const formData = await request.formData();

        const title = formData.get("title") as string;
        const issuer = formData.get("issuer") as string;
        const issueDateStr = formData.get("issueDate") as string;
        const expiryDateStr = formData.get("expiryDate") as string;
        const thumbnailFile = formData.get("thumbnail") as File;
        const verifyUrl = formData.get("verifyUrl") as string;

        if (!title || !issuer || !issueDateStr) {
            return fail(400, {
                message: "Title, issuer and issue date are required",
            });
        }

        try {
            const existingCertificate = await prisma.certificate.findUnique({
                where: { id: params.id },
                select: { thumbnail: true },
            });

            let thumbnail = undefined;
            if (thumbnailFile && thumbnailFile.size > 0) {
                const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
                thumbnail = await uploadImage(buffer, "certificates", thumbnailFile.type);

                if (existingCertificate?.thumbnail) {
                    await deleteFile(existingCertificate.thumbnail);
                }
            }

            await prisma.certificate.update({
                where: { id: params.id },
                data: {
                    title,
                    issuer,
                    issueDate: new Date(issueDateStr),
                    expiryDate: expiryDateStr ? new Date(expiryDateStr) : null,
                    ...(thumbnail && { thumbnail }),
                    verifyUrl,
                },
            });
        } catch (err) {
            console.error("Update certificate error:", err);
            return fail(500, { message: "Failed to update certificate" });
        }

        throw redirect(303, "/dashboard/certificates");
    },

    delete: async ({ params }) => {
        try {
            const certificate = await prisma.certificate.findUnique({
                where: { id: params.id },
                select: { thumbnail: true },
            });

            if (certificate?.thumbnail) {
                await deleteFile(certificate.thumbnail);
            }

            await prisma.certificate.delete({
                where: { id: params.id },
            });
        } catch (err) {
            console.error("Delete certificate error:", err);
            return fail(500, { message: "Failed to delete certificate" });
        }

        throw redirect(303, "/dashboard/certificates");
    },
};
