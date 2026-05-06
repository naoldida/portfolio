"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    description:
      "Lead the development of the company&apos;s flagship product dashboard, improving performance by 40%. Mentor junior developers and establish best practices for the frontend team.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-24 scroll-mt-16 bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Experience
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.article
                key={exp.title}
                variants={itemVariants}
                className="group relative grid sm:grid-cols-[180px_1fr] gap-4 p-6 rounded-xl hover:bg-background/80 transition-all duration-300 hover:shadow-sm"
              >
                <div className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.title} ·{" "}
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs py-1 px-2.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

