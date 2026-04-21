import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const project = await prisma.project.findUnique({
        where: {
            id: params.id
        }
    });

    if (!project) {
        throw error(404, {
            message: 'Project not found'
        });
    }

    return {
        project
    };
};
