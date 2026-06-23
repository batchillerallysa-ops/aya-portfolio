'use client'

import Link from "next/link"
import { ArrowRight, Mail, Zap, Database, Users, Target } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const ABOUT_ITEMS = [
  {
    icon: Zap,
    title: "Strategic Mindset",
    description:
      "I approach automation with a business-first perspective, focusing on ROI and long-term operational efficiency rather than quick fixes.",
  },
  {
    icon: Database,
    title: "Technical Excellence",
    description:
      "With deep expertise in data management, process mapping, and system architecture, I build automations that scale and perform reliably.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Every automation is designed with end-users in mind. Complex workflows that feel simple and intuitive to operate.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "I measure success by impact: faster turnaround times, error-free operations, and teams empowered to focus on high-value work.",
  },
]

const STATS = [
  { value: "10+", label: "Years in Operations" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99%", label: "Uptime Record" },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <motion.div
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        {/* Header */}
        <motion.div className="max-w-3xl" variants={staggerContainerVariants}>
          <motion.p className="text-sm font-medium uppercase tracking-widest text-primary" variants={staggerItemVariants}>
            {"// About AM Batchiller"}
          </motion.p>
          <motion.h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl" variants={staggerItemVariants}>
            Dedicated to Excellence in Automation
          </motion.h2>
          <motion.p className="mt-4 text-pretty leading-relaxed text-muted-foreground" variants={staggerItemVariants}>
            I'm AM Batchiller, a dedicated automation specialist passionate about transforming how teams work. With extensive experience in workflow optimization and system integration, I craft solutions that save time and streamline operations for businesses of all sizes.
          </motion.p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainerVariants}>
          {ABOUT_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 cursor-pointer"
                variants={staggerItemVariants}
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
              >
                <motion.span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary" whileHover={{ scale: 1.2, rotate: 10 }}>
                  <Icon className="h-5 w-5" />
                </motion.span>
                <h3 className="mt-5 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div className="mt-12 grid gap-4 sm:grid-cols-3" variants={staggerContainerVariants}>
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-border bg-card/50 p-6 text-center hover:border-primary/50 cursor-pointer"
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy */}
        <motion.div className="mt-12 rounded-2xl border border-border bg-card/30 p-8" variants={staggerItemVariants}>
          <motion.p className="text-lg leading-relaxed text-muted-foreground" variants={staggerItemVariants}>
            My approach combines technical expertise with a deep understanding of business processes. I believe the best automations are invisible — they work seamlessly in the background while you focus on high-value work. Every solution I build is designed to scale, perform reliably, and adapt to your evolving needs.
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="mt-12 flex flex-wrap items-center justify-center gap-4" variants={staggerContainerVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={staggerItemVariants}>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/60 transition-all duration-300 hover:shadow-[0_0_32px_0] hover:shadow-primary/70"
            >
              Let's Work Together
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div className="flex items-center gap-3" variants={staggerItemVariants}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.linkedin.com/in/allysa-batchiller"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              >
                <LinkedInIcon className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:allysa-batchiller57@example.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
