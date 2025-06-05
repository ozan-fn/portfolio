// app/api/posts/[slug]/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authOptions } from '../../auth/[...nextauth]/route'; // Pastikan path ini benar
import { getServerSession } from 'next-auth/next'; // Untuk NextAuth v4

// Handler untuk GET: Mengambil satu post berdasarkan slug
export async function GET(request: Request, { params }: { params: { slug: string } }) {
	try {
		const post = await prisma.post.findUnique({
			where: { slug: params.slug },
			include: {
				PostCategory: {
					select: {
						category: {
							select: { id: true, name: true },
						},
					},
				},
				PostTag: {
					select: {
						tag: {
							select: { id: true, name: true },
						},
					},
				},
				// Anda mungkin ingin menyertakan data User (penulis) juga
				// User: {
				//  select: { id: true, name: true, image: true }
				// }
			},
		});

		if (!post) {
			return NextResponse.json({ error: 'Post not found' }, { status: 404 });
		}

		const formattedPost = {
			...post,
			categories: post.PostCategory.map((pc) => pc.category),
			tags: post.PostTag.map((pt) => pt.tag),
		};
		delete (formattedPost as any).PostCategory;
		delete (formattedPost as any).PostTag;

		return NextResponse.json(formattedPost);
	} catch (error) {
		console.error(`GET /api/posts/${params.slug} Error:`, error);
		return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
	}
}

// Handler untuk PUT: Memperbarui post yang ada
export async function PUT(request: Request, { params }: { params: { slug: string } }) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user?.id) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const existingPost = await prisma.post.findUnique({
			where: { slug: params.slug },
			select: { id: true, userId: true }, // Ambil juga userId untuk pengecekan kepemilikan
		});

		if (!existingPost) {
			return NextResponse.json({ error: 'Post to update not found' }, { status: 404 });
		}

		// Asumsi di session.user ada properti 'role'
		// Anda perlu menambahkan 'role' ke sesi melalui callbacks di authOptions
		const userIsAdmin = (session.user as any).role === 'ADMIN';
		const userIsOwner = existingPost.userId === session.user.id;

		if (!userIsOwner && !userIsAdmin) {
			// Hanya pemilik atau admin yang boleh edit
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
		}

		const body = await request.json();
		const { title, content, categories, tags } = body; // 'content' harusnya 'body' sesuai skema?

		if (!title || !content) {
			return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
		}

		const updatedPost = await prisma.$transaction(async (tx) => {
			// 1. Hapus semua relasi kategori dan tag yang lama untuk post ini
			await tx.postCategory.deleteMany({
				where: { postId: existingPost.id },
			});
			await tx.postTag.deleteMany({
				where: { postId: existingPost.id },
			});

			// 2. Update data post utama
			const post = await tx.post.update({
				where: { id: existingPost.id },
				data: {
					title,
					body: content, // Pastikan ini sesuai dengan field di skema (body atau content)
					// Jika Anda ingin slug diperbarui saat judul berubah:
					// slug: slug(title), // Anda perlu mengimpor fungsi slug dan memastikan keunikannya
					PostCategory: {
						create: ((categories as string[]) || []).map((catId: string) => ({
							categoryId: catId,
						})),
					},
					PostTag: {
						create: ((tags as string[]) || []).map((tagId: string) => ({
							tagId: tagId,
						})),
					},
				},
			});
			return post;
		});

		return NextResponse.json(updatedPost);
	} catch (error) {
		console.error(`PUT /api/posts/${params.slug} Error:`, error);
		// Jika error karena constraint unik (misalnya slug), Anda mungkin ingin menangani secara spesifik
		if (error instanceof Error && (error as any).code === 'P2002') {
			// Kode error Prisma untuk unique constraint
			return NextResponse.json({ error: 'A post with this title/slug already exists.' }, { status: 409 });
		}
		return NextResponse.json({ error: 'Failed to save post' }, { status: 500 });
	}
}
