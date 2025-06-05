import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import * as yup from 'yup';

const postSchema = yup.object().shape({
	title: yup.string().required().label('Title').trim(),
	content: yup.string().required().label('Content').trim(),
});

export async function POST(request: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || !session.user || !session.user.id) {
			return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
		}

		const authorId = session.user.id;

		const requestBody = await request.json();
		const { title, content } = await postSchema.validate(requestBody);

		const slug = title.trim().toLowerCase().replace(/\s+/g, '-');

		const newPost = await prisma.post.create({
			data: {
				title,
				slug: slug,
				body: content,
				status: 'PUBLISHED',
				userId: authorId,
			},
		});

		return NextResponse.json(newPost, { status: 201 });
	} catch (error) {
		if (error instanceof yup.ValidationError) {
			return NextResponse.json({ message: 'Validation failed', errors: error.errors }, { status: 400 });
		}
		console.error('Error creating post:', error);
		return NextResponse.json({ message: 'Error creating post', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
	}
}
