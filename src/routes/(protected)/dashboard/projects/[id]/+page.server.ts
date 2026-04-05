import prisma from '$lib/prisma';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const project = await prisma.project.findUnique({
        where: { id: params.id }
    });

    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project
    };
};

export const actions: Actions = {
    update: async ({ request, params }) => {
        const formData = await request.formData();

        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const content = formData.get('content') as string;
        const thumbnail = formData.get('thumbnail') as string;
        const githubUrl = formData.get('githubUrl') as string;
        const demoUrl = formData.get('demoUrl') as string;
        const status = formData.get('status') as 'COMPLETED' | 'IN_PROGRESS' | 'ARCHIVED';
        const techStackString = formData.get('techStack') as string;

        if (!title || !description) {
            return fail(400, {
                error: 'Title and description are required',
                values: { title, description, content, thumbnail, githubUrl, demoUrl, status, techStackString }
            });
        }

        const techStack = techStackString
            ? techStackString.split(',').map((s) => s.trim()).filter(Boolean)
            : [];

        try {
            await prisma.project.update({
                where: { id: params.id },
                data: {
                    title,
                    description,
                    content,
                    thumbnail,
                    githubUrl,
                    demoUrl,
                    status: status || 'COMPLETED',
                    techStack
                }
            });
        } catch (err) {
            console.error(err);
            return fail(500, { error: 'Failed to update project' });
        }

        throw redirect(303, '/dashboard/projects');
    },

    delete: async ({ params }) => {
        try {
            await prisma.project.delete({
                where: { id: params.id }
            });
        } catch (err) {
            console.error(err);
            return fail(500, { error: 'Failed to delete project' });
        }

        throw redirect(303, '/dashboard/projects');
    }
};
