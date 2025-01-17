// File: app/[id]/page.tsx

import { getOriginalUrl } from "@/actions/links";

interface Props {
	params: {
		id: string;
	};
}

const ShortLinkPage = async ({ params: { id } }: Props) => {
	const originalUrl = await getOriginalUrl(id);

	if (!originalUrl) {
		return <h1>404 - Not Found</h1>;
	}

	return (
		<div>
			<h1>Original URL</h1>
			<p>{originalUrl}</p>
			<a href={originalUrl} target="_blank" rel="noopener noreferrer">
				Go to URL
			</a>
		</div>
	);
};

export default ShortLinkPage;
