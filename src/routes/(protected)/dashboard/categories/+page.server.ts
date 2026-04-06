import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
    const categories = await prisma.category.findMany({
        include: {
            _count: {
                select: { posts: true }
            }
        },
        orderBy: {
            name: 'asc'
        }
    });

    return {
        categories
    };
};

export const actions: Actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;

        if (!name || name.length < 2) {
            return fail(400, { message: 'Category name must be at least 2 characters' });
        }

        const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        try {
            await prisma.category.create({
                data: { name, slug }
            });
            return { success: true };
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Failed to create category (name might already exist)' });
        }
    },

    update: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id') as string;
        const name = formData.get('name') as string;

        if (!id || !name || name.length < 2) {
            return fail(400, { message: 'Invalid category data' });
        }

        const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        try {
            await prisma.category.update({
                where: { id },
                data: { name, slug }
            });
            return { success: true };
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Failed to update category' });
        }
    },

    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id') as string;

        if (!id) {
            return fail(400, { message: 'ID is required' });
        }

        try {
            // Check if category has posts
            const category = await prisma.category.findUnique({
                where: { id },
                include: { _count: { select: { posts: true } } }
            });

            if (category?._count.posts && category._count.posts > 0) {
                return fail(400, { message: 'Cannot delete category that has blog posts' });
            }

            await prisma.category.delete({
                where: { id }
            });
            return { success: true };
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Failed to delete category' });
        }
    }
};
