"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration and admin dashboard",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence",
    tags: ["TypeScript", "D3.js", "Express", "Redis"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "#",
    demo: "#",
  },
];

export function ProjectsSectionNew() {
  return (
    <section id="projects" className="flex flex-col px-4">
      <div className="mx-auto w-full max-w-7xl border-x px-8 py-12 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-primary mb-4 text-sm font-medium">PORTFOLIO</h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">
            Featured projects
          </h3>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work. Each project showcases different
            skills and technologies I've mastered over the years.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid items-center gap-8 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg md:grid-cols-2"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="bg-muted aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div
                className={`p-6 md:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <h4 className="mb-3 text-2xl font-bold">{project.title}</h4>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
