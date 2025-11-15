"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";

const features = [
	{
		icon: Code2,
		title: "Clean Code",
		description: "Writing maintainable and scalable code with best practices",
	},
	{
		icon: Palette,
		title: "Design Focus",
		description: "Creating beautiful interfaces with attention to detail",
	},
	{
		icon: Zap,
		title: "Performance",
		description: "Optimizing for speed and efficiency in every project",
	},
	{
		icon: Sparkles,
		title: "Innovation",
		description: "Staying current with latest technologies and trends",
	},
];

export function AboutSection() {
	return (
		<section id="about" className="flex flex-col px-4 py-20">
			<div className="mx-auto w-full max-w-7xl border-x px-8 py-12 md:px-16">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
					<h2 className="text-primary mb-4 text-sm font-medium">ABOUT ME</h2>
					<h3 className="mb-6 text-3xl font-bold md:text-4xl">Building digital products with passion</h3>
					<div className="grid gap-8 md:grid-cols-2">
						<div>
							<p className="text-muted-foreground mb-4 leading-relaxed">I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in React, TypeScript, and Node.js, creating seamless user experiences backed by robust server-side solutions.</p>
							<p className="text-muted-foreground leading-relaxed">My approach combines technical expertise with creative problem-solving, ensuring every project not only meets requirements but exceeds expectations.</p>
						</div>
						<div className="space-y-4">
							<div className="flex items-start gap-3 rounded-lg border p-4">
								<div className="bg-primary mt-2 h-2 w-2 rounded-full"></div>
								<div>
									<div className="mb-1 font-medium">Currently</div>
									<div className="text-muted-foreground text-sm">Senior Developer at Tech Company</div>
								</div>
							</div>
							<div className="flex items-start gap-3 rounded-lg border p-4">
								<div className="bg-primary mt-2 h-2 w-2 rounded-full"></div>
								<div>
									<div className="mb-1 font-medium">Location</div>
									<div className="text-muted-foreground text-sm">San Francisco, CA</div>
								</div>
							</div>
							<div className="flex items-start gap-3 rounded-lg border p-4">
								<div className="bg-primary mt-2 h-2 w-2 rounded-full"></div>
								<div>
									<div className="mb-1 font-medium">Education</div>
									<div className="text-muted-foreground text-sm">B.S. Computer Science</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 gap-6 border-t pt-12 md:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => (
						<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-lg border p-6 transition-shadow hover:shadow-lg">
							<feature.icon className="text-primary mb-4 h-8 w-8" />
							<h4 className="mb-2 font-semibold">{feature.title}</h4>
							<p className="text-muted-foreground text-sm">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
