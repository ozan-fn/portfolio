import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const certificates = await prisma.certificate.findMany({
        orderBy: {
            issueDate: "desc",
        },
    });

    return {
        certificates,
    };
};

export const actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get("id") as string;

        if (!id) return { success: false };

        try {
            await prisma.certificate.delete({
                where: { id },
            });
            return { success: true };
        } catch (err) {
            console.error("Delete certificate error:", err);
            return { success: false };
        }
    },
};
