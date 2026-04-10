import prisma from "$lib/prisma";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

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
