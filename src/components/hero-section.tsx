"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
	return (
		<section className="flex min-h-[calc(100vh-4rem)] flex-col px-4">
			<div className="mx-auto w-full max-w-7xl flex-1 border-x">
				<div className="flex h-full flex-col items-start justify-center px-8 py-20 md:px-16">
					{/* Badge */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
						<span className="relative flex h-2 w-2">
							<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
							<span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
						</span>
						Available for freelance work
					</motion.div>

					{/* Main Content */}
					<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
						Full Stack Developer
						<br />
						<span className="text-muted-foreground">& UI/UX Enthusiast</span>
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground mb-8 max-w-2xl text-lg md:text-xl">
						I craft exceptional digital experiences that combine beautiful design with powerful functionality. Specialized in React, TypeScript, and modern web technologies.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col gap-4 sm:flex-row">
						<a href="#contact" className="bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90">
							Let's work together
							<ArrowRight className="h-4 w-4" />
						</a>
						<a href="#" className="hover:bg-accent inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors">
							<Download className="h-4 w-4" />
							Download CV
						</a>
					</motion.div>

					{/* Stats */}
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-8 border-t pt-8">
						<div>
							<div className="mb-1 text-3xl font-bold">5+</div>
							<div className="text-muted-foreground text-sm">Years Experience</div>
						</div>
						<div>
							<div className="mb-1 text-3xl font-bold">50+</div>
							<div className="text-muted-foreground text-sm">Projects Done</div>
						</div>
						<div>
							<div className="mb-1 text-3xl font-bold">30+</div>
							<div className="text-muted-foreground text-sm">Happy Clients</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
