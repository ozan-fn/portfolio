import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import slug from 'slug'; // <-- BARU: Menggunakan library slug

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
 */
export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name } = body;

		if (!name || typeof name !== 'string') {
			return NextResponse.json({ error: 'Tag name is required.' }, { status: 400 });
		}

		// --- PERUBAHAN DI SINI ---
		const generatedSlug = slug(name); // Menggunakan library slug

		const existingTag = await prisma.tag.findFirst({
			where: {
				OR: [{ name }, { slug: generatedSlug }],
			},
		});

		if (existingTag) {
			return NextResponse.json({ error: 'Tag already exists.' }, { status: 409 });
		}

		const newTag = await prisma.tag.create({
			data: {
				name,
				slug: generatedSlug, // Menyimpan slug yang dihasilkan
			},
		});

		return NextResponse.json(newTag, { status: 201 });
	} catch (error) {
		console.error('POST /api/tags Error:', error);
		return NextResponse.json({ error: 'Failed to create tag' }, { status: 500 });
	}
}
