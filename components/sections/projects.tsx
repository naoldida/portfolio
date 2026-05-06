"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, shopping cart, and Stripe payment integration. Features a responsive design and real-time inventory updates.",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    features: [
      "User authentication & authorization",
      "Product search & filtering",
      "Shopping cart with persistence",
      "Secure checkout with Stripe",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with a focus on performance and user experience.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task boards",
      "Team workspaces",
      "Activity tracking",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy. Integrates with OpenAI&apos;s GPT API for intelligent text generation.",
    tech: ["Next.js", "OpenAI API", "Vercel AI SDK", "PostgreSQL"],
    features: [
      "Multiple content templates",
      "Tone & style customization",
      "Content history & favorites",
      "Export in multiple formats",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  }

  return (
    <section id="projects" className="py-24 scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={cardVariants} className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-mono py-1 px-2 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={cardVariants} className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="https://github.com/naoldida" target="_blank" rel="noopener noreferrer">
                View More on GitHub
                <Github className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


