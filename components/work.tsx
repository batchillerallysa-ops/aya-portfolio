'use client'

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { projects, TOOLS, type ToolKey } from "@/lib/projects"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const TOOL_ORDER: ToolKey[] = ["zapier", "make", "n8n", "ghl"]

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <motion.div
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        <motion.div className="flex flex-wrap items-end justify-between gap-4" variants={staggerContainerVariants}>
          <motion.div className="max-w-2xl" variants={staggerContainerVariants}>
            <motion.p className="text-sm font-medium uppercase tracking-widest text-primary" variants={staggerItemVariants}>Previous Work</motion.p>
            <motion.h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl" variants={staggerItemVariants}>
              Automations I&apos;ve built
            </motion.h2>
            <motion.p className="mt-4 text-pretty leading-relaxed text-muted-foreground" variants={staggerItemVariants}>
              Real-world workflows across Zapier, Make.com, n8n, and GoHighLevel. Click any project to read the full
              case study.
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2" variants={staggerContainerVariants}>
            {TOOL_ORDER.map((tool) => (
              <motion.div key={tool} variants={staggerItemVariants} whileHover={{ scale: 1.05 }}>
                <Link
                  href={`/${tool}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  {TOOLS[tool].name} →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainerVariants}>
          {projects.map((project) => {
            const tool = TOOLS[project.tool]
            return (
              <motion.div key={project.slug} variants={staggerItemVariants} whileHover={{ y: -4 }}>
                <Link
                  href={`/projects/${project.tool}/${project.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: tool.tint, color: tool.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tool.color }} />
                    {tool.name}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-balance">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
