import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    return {
        projects,
    };
};
