import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const categories = await prisma.category.findMany({
        orderBy: {
            name: 'asc'
        }
    });

    return {
        categories
    };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const image = formData.get('image') as string;
        const categoryId = formData.get('categoryId') as string;
        const published = formData.get('published') === 'true';

        // Basic validation
        if (!title || !content || !categoryId) {
            return fail(400, {
                error: 'Title, content, and category are required',
                values: { title, content, image, categoryId, published }
            });
        }

        // Simple slug generation
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        try {
            // Check if slug already exists
            const existingPost = await prisma.blogPost.findUnique({
                where: { slug }
            });

            const finalSlug = existingPost
                ? `${slug}-${Math.floor(Math.random() * 1000)}`
                : slug;

            await prisma.blogPost.create({
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
            return fail(500, { error: 'Failed to create blog post' });
        }

        throw redirect(303, '/dashboard/blog');
    }
};
