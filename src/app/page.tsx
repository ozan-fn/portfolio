"use client";

import { createShortLink } from "@/actions/links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon, LoaderIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState("");

	const handleSubmit = () => {
		setLoading(true);
		createShortLink(input)
			.then(console.log)
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="max-w-md w-full flex flex-row items-center gap-2">
				<Input onChange={(e) => setInput(e.target.value)} />
				<motion.div layoutId="nasd90s-">
					<Button onClick={handleSubmit}>{!loading ? <p>Buat Tautan</p> : <Loader2Icon className="animate-spin h-5 w-5" />}</Button>
				</motion.div>
			</div>
		</div>
	);
}
