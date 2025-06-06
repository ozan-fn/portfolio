import Image from 'next/image';
import React from 'react';
import { LuCalendarDays, LuClock } from 'react-icons/lu';

interface PostHeaderProps {
	title: string;
	cover: string;
	author: string;
	createdAt: string;
	readingTime: number;
}

const PostHeader = ({ title, author, cover, createdAt, readingTime }: PostHeaderProps) => {
	return (
		<div className="mx-auto lg:max-w-[45rem]">
			<h1 className="text-3xl font-bold leading-snug md:text-4xl md:leading-normal">{title}</h1>

			<div className="mt-6 flex items-center gap-4">
				<Image src={'/avatar.jpg'} width={50} height={50} alt="" className="rounded-full" />
				<div className="">
					<div className="mb-3 font-semibold">
						By <u>{author}</u>
					</div>
					<div className="flex items-center">
						<div className="flex items-center gap-2 text-sm">
							<LuCalendarDays size={18} />
							<span>{createdAt}</span>
						</div>
						<div className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-300"></div>
						<div className="flex items-center gap-2 text-sm">
							<LuClock size={18} />
							<span>{readingTime} min read</span>
						</div>
					</div>
				</div>
			</div>

			<Image src={cover} alt={title} width={720} height={0} className="my-10 rounded-lg" priority />
		</div>
	);
};

export default PostHeader;
