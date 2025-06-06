import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import slug from 'slug';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route'; // Pastikan path ini benar
import { Role } from '@prisma/client'; // Impor enum Role jika belum

/**
 * GET: Mengambil semua tag.
 */
export async function GET() {
	try {
		const tags = await prisma.tag.findMany({
			orderBy: { name: 'asc' },
		});
		return NextResponse.json(tags);
	} catch (error) {
		console.error('GET /api/tags Error:', error);
		return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 });
	}
}

/**
 * POST: Membuat tag baru.
 * Hanya pengguna dengan role ADMIN atau AUTHOR yang diizinkan.
 */
export async function POST(request: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		// Pastikan Anda sudah menambahkan 'role' ke tipe Session di next-auth.d.ts
		const userRole = session.user.role as Role;

		// Otorisasi: Hanya ADMIN atau AUTHOR yang boleh membuat tag
		if (userRole !== Role.ADMIN && userRole !== Role.AUTHOR) {
			return NextResponse.json({ error: 'Forbidden: You do not have permission to create tags.' }, { status: 403 });
		}

		const body = await request.json();
		const { name } = body;

		if (!name || typeof name !== 'string' || name.trim() === '') {
			return NextResponse.json({ error: 'Tag name is required and cannot be empty.' }, { status: 400 });
		}

		const trimmedName = name.trim();
		const generatedSlug = slug(trimmedName);

		// Cek jika tag dengan nama atau slug yang sama sudah ada
		const existingTag = await prisma.tag.findFirst({
			where: {
				OR: [{ name: trimmedName }, { slug: generatedSlug }],
			},
		});

		if (existingTag) {
			return NextResponse.json({ error: 'Tag with this name or slug already exists.' }, { status: 409 }); // 409 Conflict
		}

		const newTag = await prisma.tag.create({
			data: {
				name: trimmedName,
				slug: generatedSlug,
			},
		});

		return NextResponse.json(newTag, { status: 201 });
	} catch (error) {
		console.error('POST /api/tags Error:', error);
		if (error instanceof Error && (error as any).code === 'P2002') {
			return NextResponse.json({ error: 'A tag with this name or slug already exists (unique constraint failed).' }, { status: 409 });
		}
		return NextResponse.json({ error: 'Failed to create tag' }, { status: 500 });
	}
}
