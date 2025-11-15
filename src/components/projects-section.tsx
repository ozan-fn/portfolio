"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
        gradient: "from-blue-500 to-purple-600",
        github: "#",
        demo: "#",
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat application with AI-powered responses and sentiment analysis.",
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
        tags: ["React", "OpenAI", "Socket.io", "Node.js"],
        gradient: "from-purple-500 to-pink-600",
        github: "#",
        demo: "#",
    },
    {
        title: "Task Management System",
        description: "Collaborative project management tool with kanban boards, team chat, and time tracking.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        tags: ["TypeScript", "React", "Firebase", "Tailwind"],
        gradient: "from-green-500 to-teal-600",
        github: "#",
        demo: "#",
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media management with data visualization and scheduling.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        tags: ["Next.js", "D3.js", "MongoDB", "Express"],
        gradient: "from-orange-500 to-red-600",
        github: "#",
        demo: "#",
    },
];

export function ProjectsSection() {
    return (
        <section className="py-20 px-4 bg-linear-to-b from-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20`}></div>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors">
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">Code</span>
                                        </a>
                                        <a href={project.demo} className={`flex items-center gap-2 px-4 py-2 bg-linear-to-r ${project.gradient} hover:opacity-90 rounded-lg text-white transition-opacity`}>
                                            <ExternalLink className="w-4 h-4" />
                                            <span className="text-sm">Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
