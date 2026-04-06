import prisma from '$lib/prisma';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const post = await prisma.blogPost.findUnique({
        where: { id: params.id },
        include: {
            category: true
        }
    });

    if (!post) {
        throw error(404, 'Blog post not found');
    }

    const categories = await prisma.category.findMany({
        orderBy: {
            name: 'asc'
        }
    });

    return {
        post,
        categories
    };
};

export const actions: Actions = {
    update: async ({ request, params }) => {
        const formData = await request.formData();

        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const image = formData.get('image') as string;
        const categoryId = formData.get('categoryId') as string;
        const published = formData.get('published') === 'true';

        if (!title || !content || !categoryId) {
            return fail(400, {
                error: 'Title, content, and category are required',
                values: { title, content, image, categoryId, published }
            });
        }

        // Simple slug generation for update (only if title changes, or just keep it simple)
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        try {
            // Check if slug already exists for another post
            const existingPost = await prisma.blogPost.findFirst({
                where: {
                    slug,
                    NOT: { id: params.id }
                }
            });

            const finalSlug = existingPost
                ? `${slug}-${Math.floor(Math.random() * 1000)}`
                : slug;

            await prisma.blogPost.update({
                where: { id: params.id },
                data: {
                    title,
                    slug: finalSlug,
                    content,
                    image,
                    published,
                    categoryId
                }
            });
        } catch (err) {
            console.error(err);
            return fail(500, { error: 'Failed to update blog post' });
        }

        throw redirect(303, '/dashboard/blog');
    },

    delete: async ({ params }) => {
        try {
            await prisma.blogPost.delete({
                where: { id: params.id }
            });
        } catch (err) {
            console.error(err);
            return fail(500, { error: 'Failed to delete blog post' });
        }

        throw redirect(303, '/dashboard/blog');
    }
};
