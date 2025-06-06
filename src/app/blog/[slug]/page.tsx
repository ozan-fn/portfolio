// app/posts/[slug]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import prisma from '@/lib/prisma'; // <-- 1. Impor Prisma Client
import { cache } from 'react'; // <-- Impor cache untuk deduping

// Impor komponen-komponen Anda
import PostHeader from '../../../components/shared/PostHeader';
import PostToc from '../../../components/shared/PostToc';
import PostContent from '../../../components/shared/PostContent';
import PostSharing from '../../../components/shared/PostSharing';
import PostReadingProgress from '../../../components/shared/PostReadingProgress';
import TiptapRenderer from '@/components/TiptapRenderer/ServerRenderer';

// Definisikan tipe untuk data post yang diformat, mirip dengan yang ada di service
interface FormattedPostPageDetails {
	title: string;
	content: string;
	wordCount: number;
	cover: string | null;
	author: string | null;
	createdAt: string;
}

type PostPageProps = {
	params: {
		slug: string;
	};
};

// --- Fungsi untuk mengambil dan memformat data post langsung ---
const getPostData = cache(async (slug: string): Promise<FormattedPostPageDetails | null> => {
	try {
		const post = await prisma.post.findUnique({
			where: { slug: slug },
			include: {
				User: {
					select: {
						name: true,
					},
				},
			},
		});

		if (!post) {
			return null;
		}

		const calculateWordCount = (htmlContent: string | null): number => {
			if (!htmlContent) return 0;
			const textContent = htmlContent.replace(/<[^>]+>/g, ' ');
			const words = textContent.trim().split(/\s+/).filter(Boolean);
			return words.length;
		};

		const date = new Date(post.createdAt);
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		const month = monthNames[date.getMonth()];
		const day = String(date.getDate()).padStart(2, '0');
		const year = date.getFullYear();
		const formattedCreatedAt = `${month}, ${day} ${year}`;

		const wordCount = calculateWordCount(post.body);

		return {
			title: post.title,
			content: post.body,
			wordCount: wordCount,
			cover: post.cover,
			author: post.User?.name ?? null,
			createdAt: formattedCreatedAt,
		};
	} catch (error) {
		console.error(`Error fetching post directly for slug "${slug}":`, error);
		return null;
	}
});

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
	const slug = params.slug;
	const post = await getPostData(slug);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	const description = post.content?.replace(/<[^>]+>/g, '').substring(0, 155) || `Baca artikel ${post.title}.`;

	return {
		title: post.title,
		description: description,
		openGraph: {
			title: post.title,
			description: description,
			type: 'article',
			publishedTime: post.createdAt,
			authors: [post.author || 'Unknown Author'],
			images: [
				{
					url: post.cover || '/default-og-image.png',
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const slug = params.slug;
	const post = await getPostData(slug);

	if (!post) {
		return notFound();
	}

	const readingTime = Math.ceil((post.wordCount || 0) / 150);

	return (
		<article className="flex flex-col items-center px-6 py-10">
			<PostReadingProgress />

			<PostHeader
				title={post.title}
				author={post.author || ''} // Tetap gunakan || '' untuk keamanan tipe
				createdAt={post.createdAt}
				readingTime={readingTime}
				cover={post.cover || ''} // Tetap gunakan || '' untuk keamanan tipe
			/>

			<div className="grid w-full grid-cols-1 gap-6 lg:w-auto lg:grid-cols-[minmax(auto,256px)_minmax(720px,1fr)_minmax(auto,256px)] lg:gap-12">
				{/* PERUBAHAN: PostSharing dipanggil tanpa props sesuai permintaan Anda.
                    Pastikan PostSharing dapat mengambil data yang dibutuhkan (misalnya title dan slug)
                    dari context, route, atau cara lain jika memang diperlukan.
                */}
				<PostSharing />

				<PostContent>
					{/* PERUBAHAN: TiptapRenderer menerima konten sebagai children sesuai permintaan.
                        Pastikan TiptapRenderer mendukung ini atau sesuaikan jika ia hanya menerima prop 'content'.
                    */}
					<TiptapRenderer>{post.content || ''}</TiptapRenderer>
				</PostContent>

				{/* PERUBAHAN: PostToc dipanggil tanpa props sesuai permintaan Anda.
                    Pastikan PostToc dapat mengambil data yang dibutuhkan (misalnya post.content)
                    dari context, route, atau cara lain jika memang diperlukan.
                */}
				<PostToc />
			</div>
		</article>
	);
}
