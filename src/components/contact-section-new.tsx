"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export function ContactSectionNew() {
  return (
    <section id="contact" className="flex flex-col px-4">
      <div className="mx-auto w-full max-w-7xl border-x px-8 py-12 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-primary mb-4 text-sm font-medium">
            GET IN TOUCH
          </h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">
            Let's work together
          </h3>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:col-span-2"
          >
            <div>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 font-medium">Email</div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 font-medium">Location</div>
                  <div className="text-muted-foreground text-sm">
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="focus:ring-primary/20 w-full rounded-lg border px-4 py-3 transition-shadow focus:ring-2 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="focus:ring-primary/20 w-full rounded-lg border px-4 py-3 transition-shadow focus:ring-2 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="focus:ring-primary/20 w-full rounded-lg border px-4 py-3 transition-shadow focus:ring-2 focus:outline-none"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="focus:ring-primary/20 w-full resize-none rounded-lg border px-4 py-3 transition-shadow focus:ring-2 focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
