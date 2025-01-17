"use client";

import { createShortLink } from "@/actions/links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState("");
	const [result, setResult] = useState<string | null>(null);

	const handleSubmit = () => {
		setLoading(true);
		createShortLink(input)
			.then((res) => {
				const host = window.location.origin; // Mendapatkan host saat ini
				const fullUrl = `${host}/${res.shortUrl}`;
				setResult(fullUrl);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="flex h-screen items-center justify-center flex-col">
			<div className="max-w-md w-full flex flex-row items-center gap-2">
				<Input onChange={(e) => setInput(e.target.value)} />
				<motion.div layoutId="nasd90s-">
					<Button onClick={handleSubmit}>{!loading ? <p>Buat Tautan</p> : <Loader2Icon className="animate-spin h-5 w-5" />}</Button>
				</motion.div>
			</div>
			{result && (
				<p className="mt-4">
					<a href={result} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
						{result}
					</a>
				</p>
			)}
		</div>
	);
}
