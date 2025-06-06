import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import slug from 'slug';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route'; // Pastikan path ini benar
import { Role } from '@prisma/client'; // Impor enum Role jika belum

/**
 * GET: Mengambil semua kategori.
 * Untuk MultiSelectCombobox, mengambil semua adalah perilaku yang diharapkan.
 * Jika jumlah kategori menjadi sangat besar dan mempengaruhi performa,
 * pertimbangkan komponen combobox dengan server-side search.
 */
export async function GET() {
	try {
		const categories = await prisma.category.findMany({
			orderBy: { name: 'asc' },
		});
		return NextResponse.json(categories);
	} catch (error) {
		console.error('GET /api/categories Error:', error);
		return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
	}
}

/**
 * POST: Membuat kategori baru.
 * Hanya pengguna dengan role ADMIN atau AUTHOR yang diizinkan.
 */
export async function POST(request: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		// Pastikan Anda sudah menambahkan 'role' ke tipe Session di next-auth.d.ts
		const userRole = session.user.role as Role; // Type assertion jika perlu, tapi lebih baik tipe sudah benar

		// Otorisasi: Hanya ADMIN atau AUTHOR yang boleh membuat kategori
		if (userRole !== Role.ADMIN && userRole !== Role.AUTHOR) {
			return NextResponse.json({ error: 'Forbidden: You do not have permission to create categories.' }, { status: 403 });
		}

		const body = await request.json();
		const { name } = body;

		if (!name || typeof name !== 'string' || name.trim() === '') {
			return NextResponse.json({ error: 'Category name is required and cannot be empty.' }, { status: 400 });
		}

		const generatedSlug = slug(name.trim());

		// Cek jika kategori dengan nama atau slug yang sama sudah ada
		const existingCategory = await prisma.category.findFirst({
			where: {
				OR: [{ name: name.trim() }, { slug: generatedSlug }],
			},
		});

		if (existingCategory) {
			return NextResponse.json({ error: 'Category with this name or slug already exists.' }, { status: 409 }); // 409 Conflict
		}

		const newCategory = await prisma.category.create({
			data: {
				name: name.trim(),
				slug: generatedSlug,
			},
		});

		return NextResponse.json(newCategory, { status: 201 });
	} catch (error) {
		console.error('POST /api/categories Error:', error);
		if (error instanceof Error && (error as any).code === 'P2002') {
			return NextResponse.json({ error: 'A category with this name or slug already exists (unique constraint failed).' }, { status: 409 });
		}
		return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
	}
}
