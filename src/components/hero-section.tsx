"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0 w-full h-full">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 0.9, 1],
                        x: [0, 30, -20, 0],
                        y: [0, -50, 20, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 0.9, 1.1, 1],
                        x: [0, -30, 20, 0],
                        y: [0, 50, -20, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                    className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 0.9, 1],
                        x: [0, 20, -30, 0],
                        y: [0, -30, 40, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, delay: 4 }}
                    className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 100 }} className="inline-block">
                        <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-r from-purple-400 to-pink-600 p-1">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">👨‍💻</div>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-7xl font-bold text-white">
                            Hi, I'm <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Your Name</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Full Stack Developer | UI/UX Enthusiast | Problem Solver
                        </motion.p>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-400 max-w-2xl mx-auto">
                            Crafting beautiful and functional web experiences with modern technologies
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4 justify-center items-center">
                        <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold overflow-hidden transition-all hover:scale-105">
                            <span className="relative z-10">View My Work</span>
                            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>

                        <button className="px-8 py-4 border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all">Contact Me</button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex gap-6 justify-center pt-8">
                        {[
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Mail, href: "#" },
                        ].map((social, index) => (
                            <motion.a key={index} href={social.href} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                <social.icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
            </motion.div>
        </section>
    );
}
