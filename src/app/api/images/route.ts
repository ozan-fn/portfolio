import { NextResponse } from 'next/server';
import {
	S3Client,
	ListObjectsV2Command,
	PutObjectCommand,
	DeleteObjectCommand, // <-- Impor untuk operasi delete
} from '@aws-sdk/client-s3';
import slug from 'slug';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route'; // <-- Sesuaikan path jika berbeda

export const dynamic = 'force-dynamic';

// --- Konfigurasi S3 Client untuk Tebi.io ---
const s3Client = new S3Client({
	endpoint: process.env.TEBI_ENDPOINT as string,
	region: process.env.TEBI_REGION as string,
	credentials: {
		accessKeyId: process.env.TEBI_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.TEBI_SECRET_ACCESS_KEY as string,
	},
	forcePathStyle: true,
});

const Bucket = process.env.TEBI_BUCKET_NAME as string;

// Fungsi untuk membangun URL publik dari key Tebi
const getPublicUrl = (key: string) => {
	const endpoint = process.env.TEBI_ENDPOINT as string;
	const cleanEndpoint = endpoint.replace(/^https?:\/\//, '');
	return `https://${Bucket}.${cleanEndpoint}/${key}`;
};

/**
 * GET: Mengambil daftar gambar dari Tebi Bucket.
 */
export async function GET() {
	try {
		if (!Bucket || !process.env.TEBI_ENDPOINT) {
			throw new Error('Tebi environment variables are not defined.');
		}

		const command = new ListObjectsV2Command({
			Bucket,
			MaxKeys: 100,
		});

		const { Contents } = await s3Client.send(command);

		if (!Contents || Contents.length === 0) {
			return NextResponse.json([]);
		}

		const sortedContents = Contents.sort((a, b) => (b.LastModified?.getTime() || 0) - (a.LastModified?.getTime() || 0));

		const map = sortedContents
			.map((item) => ({
				id: item.Key,
				url: getPublicUrl(item.Key!),
				created_at: item.LastModified,
				bytes: item.Size,
				format: item.Key?.split('.').pop(),
				display_name: item.Key,
			}))
			.filter((f) => !f.format?.endsWith('/'));

		console.log(map);

		return NextResponse.json(map);
	} catch (error) {
		console.error('Error fetching images from Tebi:', error);
		return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
	}
}

/**
 * POST: Mengunggah file gambar ke Tebi Bucket.
 */
export async function POST(req: Request) {
	try {
		// Amankan dengan otentikasi
		const session = await getServerSession(authOptions);
		if (!session || !session.user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		if (!Bucket || !process.env.TEBI_ENDPOINT) {
			throw new Error('Tebi environment variables are not defined.');
		}

		const formData = await req.formData();
		const file = formData.get('file') as File | null;

		if (!file) {
			return NextResponse.json({ error: 'No file provided' }, { status: 400 });
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		const fileExtension = file.name.split('.').pop() || '';
		const fileNameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
		const uniqueKey = `uploads/${slug(fileNameWithoutExt)}-${Date.now()}.${fileExtension}`;

		const command = new PutObjectCommand({
			Bucket,
			Key: uniqueKey,
			Body: buffer,
			ContentType: file.type,
			ACL: 'public-read',
		});

		await s3Client.send(command);

		const responseData = {
			id: uniqueKey,
			url: getPublicUrl(uniqueKey),
			created_at: new Date().toISOString(),
			bytes: file.size,
			format: fileExtension,
			display_name: file.name,
		};

		return NextResponse.json(responseData);
	} catch (error) {
		console.error('Error uploading file to Tebi:', error);
		return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
	}
}

/**
 * DELETE: Menghapus objek dari Tebi Bucket.
 */
export async function DELETE(req: Request) {
	try {
		// Amankan dengan otentikasi
		const session = await getServerSession(authOptions);
		if (!session || !session.user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		if (!Bucket) {
			throw new Error('TEBI_BUCKET_NAME is not defined.');
		}

		const { searchParams } = new URL(req.url);
		const key = searchParams.get('key'); // Ambil 'key' dari query parameter

		if (!key) {
			return NextResponse.json({ error: 'File key is required as a query parameter.' }, { status: 400 });
		}

		const deleteObjectCommand = new DeleteObjectCommand({
			Bucket,
			Key: key,
		});

		await s3Client.send(deleteObjectCommand);

		return NextResponse.json({ message: `File '${key}' deleted successfully.` });
	} catch (error) {
		console.error('Error deleting file from Tebi:', error);
		return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
	}
}
