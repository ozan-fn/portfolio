import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    const posts = await prisma.blogPost.findMany({
        include: {
            category: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return {
        posts
    };
};

export const actions: Actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id') as string;

        if (!id) {
            return fail(400, { message: 'ID is required' });
        }

        try {
            await prisma.blogPost.delete({
                where: { id }
            });
            return { success: true };
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Failed to delete blog post' });
        }
    },

    togglePublish: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id') as string;
        const published = formData.get('published') === 'true';

        if (!id) {
            return fail(400, { message: 'ID is required' });
        }

        try {
            await prisma.blogPost.update({
                where: { id },
                data: { published: !published }
            });
            return { success: true };
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Failed to update post status' });
        }
    }
};
