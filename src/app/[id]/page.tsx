// app/[id]/page.tsx

import { getOriginalUrl } from "@/actions/links";
import { notFound } from "next/navigation"; // Optional: to handle not found cases

const ShortLinkPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	// Fetch data dari API route
	const data = await getOriginalUrl(id);

	if (!data) {
		notFound(); // Optional: bisa digunakan untuk melempar error 404
	}

	return (
		<div>
			<h1>Original URL</h1>
			<p>{data}</p>
			<a href={data} target="_blank" rel="noopener noreferrer">
				Go to URL
			</a>
		</div>
	);
};

export default ShortLinkPage;
