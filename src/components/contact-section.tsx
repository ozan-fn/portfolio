"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-20 px-4 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Have a project in mind? Let's work together to create something amazing</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
                            <p className="text-gray-400 mb-8">Don't like forms? Send me an email or reach out on social media. 👋</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    info: "hello@example.com",
                                    gradient: "from-blue-500 to-cyan-500",
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    info: "+1 (555) 123-4567",
                                    gradient: "from-purple-500 to-pink-500",
                                },
                                {
                                    icon: MapPin,
                                    title: "Location",
                                    info: "San Francisco, CA",
                                    gradient: "from-green-500 to-emerald-500",
                                },
                            ].map((item, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 group">
                                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.gradient} p-0.5 shrink-0 group-hover:scale-110 transition-transform`}>
                                        <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.info}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="John Doe" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="john@example.com" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all">
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
