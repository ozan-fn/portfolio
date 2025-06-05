import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import slug from 'slug'; // <-- BARU: Menggunakan library slug
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

/**
 * GET: Mengambil semua kategori.
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

export async function POST(request: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		if ((session.user as any).role !== 'AUTHOR') {
			return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
		}

		// ... sisa logika pembuatan kategori tidak berubah ...
		const body = await request.json();
		const { name } = body;
		const generatedSlug = slug(name);
		// ...
		const newCategory = await prisma.category.create({ data: { name, slug: generatedSlug } });

		return NextResponse.json(newCategory, { status: 201 });
	} catch (error) {
		console.error('POST /api/categories Error:', error);
		return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
	}
}
