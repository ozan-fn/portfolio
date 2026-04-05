import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const content = formData.get('content') as string;
        const thumbnail = formData.get('thumbnail') as string;
        const githubUrl = formData.get('githubUrl') as string;
        const demoUrl = formData.get('demoUrl') as string;
        const status = formData.get('status') as 'COMPLETED' | 'IN_PROGRESS' | 'ARCHIVED';
        const techStackString = formData.get('techStack') as string;

        // Basic validation
        if (!title || !description) {
            return fail(400, {
                error: 'Title and description are required',
                values: { title, description, content, thumbnail, githubUrl, demoUrl, status, techStackString }
            });
        }

        const techStack = techStackString
            ? techStackString.split(',').map(s => s.trim()).filter(Boolean)
            : [];

        try {
            await prisma.project.create({
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
            return fail(500, { error: 'Failed to create project' });
        }

        throw redirect(303, '/dashboard/projects');
    }
};
