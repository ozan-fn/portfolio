"use client";

import { getOriginalUrl } from "@/actions/links";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShortLinkPage() {
	const { id }: { id: string } = useParams();
	const [originalUrl, setOriginalUrl] = useState<string | null>("");

	useEffect(() => {
		(async () => {
			setOriginalUrl(await getOriginalUrl(id));
		})();
	}, []);

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
}
