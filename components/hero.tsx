'use client'

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const STATS = [
  { value: "10+", label: "Years experience" },
  { value: "4", label: "Automation platforms" },
  { value: "20%", label: "Avg. turnaround gain" },
]

const TOOLS = ["Zapier", "Make.com", "n8n", "GoHighLevel", "OpenAI", "Apollo"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(0, 229, 208, 0.15) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
      >
        <motion.div className="flex items-center justify-between gap-4" variants={staggerItemVariants}>
          <span className="font-mono text-sm font-semibold text-primary">{">_"}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            System: Online
          </span>
        </motion.div>
        <motion.div className="mt-4 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" variants={staggerItemVariants} />

        <motion.div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground" variants={staggerItemVariants}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Available for remote VA &amp; automation roles
        </motion.div>

        <motion.h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl" variants={staggerItemVariants}>
          I help teams reclaim hours with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">workflow &amp; AI automation</span>.
        </motion.h1>

        <motion.p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground" variants={staggerItemVariants}>
          I&apos;m Allysa Marie Batchiller — a Workflow &amp; AI Automations Specialist with 10+ years in data analysis,
          process optimization, and system operations. I design reliable automations in Zapier, Make.com, and n8n that
          cut busywork and keep operations accurate.
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap items-center gap-3" variants={staggerItemVariants}>
          <Button asChild size="lg" className="rounded-full">
            <Link href="#work">
              View my work <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
            <a href="https://calendly.com/allysa-batchiller57/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-1 h-4 w-4" /> Book a call
            </a>
          </Button>
        </motion.div>

        <motion.div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground" variants={staggerItemVariants}>
          <MapPin className="h-4 w-4" />
          Sariaya, Quezon · Working remotely worldwide
        </motion.div>

        <motion.dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:max-w-2xl" variants={staggerContainerVariants}>
          {STATS.map((s) => (
            <motion.div key={s.label} variants={staggerItemVariants}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{s.value}</dd>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </motion.dl>

        <motion.div className="mt-12" variants={staggerItemVariants}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {"// Tools I work with"}
          </p>
          <motion.div className="mt-4 flex flex-wrap gap-2" variants={staggerContainerVariants}>
            {TOOLS.map((tool) => (
              <motion.span
                key={tool}
                className="rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 cursor-pointer"
                variants={staggerItemVariants}
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
