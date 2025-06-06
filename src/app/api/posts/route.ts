// app/api/posts/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import slug from 'slug';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // Pastikan path ini benar

export async function POST(request: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user?.id) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const userId = session.user.id;
		const body = await request.json();
		// Pastikan 'categories' dan 'tags' adalah array of IDs
		const { title, content, cover, categories, tags } = body;

		if (!title) {
			return NextResponse.json({ error: 'Title is required' }, { status: 400 });
		}
		if (!content) {
			// Sebaiknya konten juga wajib
			return NextResponse.json({ error: 'Content is required' }, { status: 400 });
		}

		const baseSlug = slug(title);
		const randomSuffix = Math.random().toString(36).substring(2, 8);
		const uniqueSlug = `${baseSlug}-${randomSuffix}`;

		const newPost = await prisma.post.create({
			data: {
				title,
				slug: uniqueSlug,
				body: content, // Sesuaikan dengan nama field di skema Anda (body atau content)
				status: 'PUBLISHED', // Status awal post
				userId: userId, // ID pengguna yang membuat post
				cover,
				// Membuat relasi many-to-many dengan Kategori
				PostCategory: {
					create: ((categories as string[]) || []).map((catId: string) => ({
						categoryId: catId,
					})),
				},
				// Membuat relasi many-to-many dengan Tag
				PostTag: {
					create: ((tags as string[]) || []).map((tagId: string) => ({
						tagId: tagId,
					})),
				},
			},
		});

		return NextResponse.json(newPost, { status: 201 }); // 201 Created
	} catch (error) {
		console.error('POST /api/posts Error:', error);
		if (error instanceof Error && (error as any).code === 'P2002') {
			// Kode error Prisma untuk unique constraint (misal slug duplikat)
			return NextResponse.json({ error: 'A post with this title/slug already exists or another unique constraint failed.' }, { status: 409 });
		}
		return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
	}
}
