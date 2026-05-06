"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Rocket } from "lucide-react"

export function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-24 scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              About Me
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a passionate developer who loves building things for the web.
                My journey in software development started back in 2018 when I
                decided to try creating custom themes for a CMS — turns out
                hacking together templates taught me a lot about HTML &amp; CSS!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fast-forward to today, and I&apos;ve had the privilege of working at
                a start-up, a large corporation, and a student-led design studio.
                My main focus these days is building accessible, inclusive
                products and digital experiences for a variety of clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy working at the intersection of design and engineering,
                creating experiences that not only look great but are
                meticulously built for performance and usability. When I&apos;m not
                at the computer, I&apos;m usually hiking, reading, or exploring new
                coffee shops.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {[
                { icon: Code2, title: "Clean Code", text: "Writing maintainable, well-documented code that scales." },
                { icon: Lightbulb, title: "Problem Solving", text: "Breaking down complex challenges into simple solutions." },
                { icon: Rocket, title: "Continuous Learning", text: "Staying updated with the latest technologies and best practices." }
              ].map((item, index) => (
                <div key={index} className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <item.icon className="h-8 w-8 text-primary mb-3 transition-transform group-hover:scale-110" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

