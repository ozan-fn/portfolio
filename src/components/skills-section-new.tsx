"use client";

import { motion } from "framer-motion";

const skillCategories = [
	{
		title: "Frontend",
		skills: [
			{ name: "React", level: 95 },
			{ name: "TypeScript", level: 90 },
			{ name: "Next.js", level: 88 },
			{ name: "Tailwind CSS", level: 92 },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node.js", level: 85 },
			{ name: "Prisma", level: 80 },
			{ name: "PostgreSQL", level: 82 },
			{ name: "REST API", level: 90 },
		],
	},
	{
		title: "Tools & Others",
		skills: [
			{ name: "Git", level: 88 },
			{ name: "Docker", level: 75 },
			{ name: "Figma", level: 85 },
			{ name: "AWS", level: 70 },
		],
	},
];

export function SkillsSectionNew() {
	return (
		<section id="skills" className="bg-muted/30 flex flex-col px-4 py-20">
			<div className="bg-background mx-auto w-full max-w-7xl border-x px-8 py-12 md:px-16">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
					<h2 className="text-primary mb-4 text-sm font-medium">SKILLS & EXPERTISE</h2>
					<h3 className="mb-6 text-3xl font-bold md:text-4xl">Technologies I work with</h3>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-3">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div key={categoryIndex} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: categoryIndex * 0.1 }} className="space-y-6">
							<h4 className="border-b pb-3 text-xl font-semibold">{category.title}</h4>
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="space-y-2">
										<div className="flex items-center justify-between text-sm">
											<span className="font-medium">{skill.name}</span>
											<span className="text-muted-foreground">{skill.level}%</span>
										</div>
										<div className="bg-muted h-2 overflow-hidden rounded-full">
											<motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }} className="bg-primary h-full rounded-full" />
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
