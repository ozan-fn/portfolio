"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Zap, Globe } from "lucide-react";

const skills = [
    {
        icon: Code2,
        title: "Frontend Development",
        description: "React, Next.js, TypeScript, Tailwind CSS",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Database,
        title: "Backend Development",
        description: "Node.js, Express, Prisma, PostgreSQL",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "Figma, Responsive Design, User Experience",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "React Native, Progressive Web Apps",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimization, SEO, Web Vitals",
        color: "from-yellow-500 to-orange-500",
    },
    {
        icon: Globe,
        title: "Full Stack",
        description: "End-to-end application development",
        color: "from-indigo-500 to-purple-500",
    },
];

export function SkillsSection() {
    return (
        <section className="py-20 px-4 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="group relative">
                            <div
                                className="absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                                style={{
                                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                }}
                            ></div>

                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${skill.color} p-0.5 mb-4`}>
                                    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                                        <skill.icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>

                                <p className="text-gray-400">{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
