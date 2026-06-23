'use client'

import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainerVariants, staggerItemVariants, slideInFromLeftVariants, slideInFromRightVariants } from "@/lib/animations"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const ROLES = ["Virtual Assistant", "Workflow Automation", "Operations & Data", "AI Tooling"]

const STATS = [
  { value: "10+", label: "Years across ops & data" },
  { value: "500+", label: "Accounts & records managed" },
  { value: "25%", label: "Avg. efficiency gains" },
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
        <motion.div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" variants={staggerContainerVariants}>
          {/* Left: terminal-window photo frame */}
          <motion.div className="relative mx-auto w-full max-w-md lg:mx-0" variants={slideInFromLeftVariants}>
            {/* ambient glow behind the frame */}
            <div className="ambient-glow pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-2xl" aria-hidden="true" />

            <div className="terminal-frame group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm">
              {/* top accent bar */}
              <div className="top-gradient-bar h-[3px] w-full" aria-hidden="true" />

              {/* window title row */}
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-secondary" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-foreground/70">allysa@portfolio: ~/about</span>
              </div>

              {/* photo area */}
              <div
                className="relative aspect-[4/5] w-full bg-gradient-to-br from-card/40 to-card/20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, color-mix(in srgb, var(--primary) 22%, transparent) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              >
                {/*
                  SWAP ME: replace this placeholder with your photo.
                  1. Add your image to /public (e.g. /public/allysa.jpg)
                  2. Replace the block below with:
                     <Image src="/allysa.jpg" alt="AM Batchiller" fill className="object-cover" />
                     (import Image from "next/image")
                */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-2xl font-bold text-primary">
                    {"</>"}
                  </span>
                  <p className="font-mono text-sm font-medium text-foreground">Your photo here</p>
                  <p className="max-w-[15rem] text-xs leading-relaxed text-foreground/70">
                    Drop a portrait into this frame to personalize your About section.
                  </p>
                </div>

                {/* glowing corner brackets */}
                <span className="pointer-events-none absolute left-3 top-3 h-7 w-7 rounded-tl-lg border-l-2 border-t-2 border-primary/70" aria-hidden="true" />
                <span className="pointer-events-none absolute right-3 top-3 h-7 w-7 rounded-tr-lg border-r-2 border-t-2 border-primary/70" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 rounded-bl-lg border-b-2 border-l-2 border-primary/70" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 rounded-br-lg border-b-2 border-r-2 border-primary/70" aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div className="rounded-2xl border-2 border-cyan-400/40 bg-slate-950/85 p-10 backdrop-blur-2xl shadow-2xl" variants={slideInFromRightVariants}>
            <motion.p className="font-mono text-base font-bold uppercase tracking-[0.3em] text-cyan-300" variants={staggerItemVariants}>
              {"// About AM Batchiller"}
            </motion.p>
            <motion.h2 className="mt-4 text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl" variants={staggerItemVariants}>
              A decade of operations & analysis
            </motion.h2>
            <motion.p className="mt-6 text-pretty leading-relaxed text-white text-lg font-light" variants={staggerItemVariants}>
              I&apos;m AM Batchiller, a dedicated automation specialist passionate about transforming how teams work. With extensive experience in workflow optimization and system integration, I craft solutions that save time and streamline operations for businesses of all sizes.
            </motion.p>
            <motion.p className="mt-5 text-pretty leading-relaxed text-white text-lg font-light" variants={staggerItemVariants}>
              My approach combines technical expertise with a deep understanding of business processes. I believe the best automations are invisible — they work seamlessly in the background while you focus on what matters most.
            </motion.p>

            {/* role badges */}
            <motion.div className="mt-7 flex flex-wrap gap-3" variants={staggerContainerVariants}>
              {ROLES.map((role) => (
                <motion.span
                  key={role}
                  className="rounded-full border-2 border-cyan-400/70 bg-cyan-900/40 px-4 py-2 text-base text-white font-semibold backdrop-blur-md transition-all hover:border-cyan-300 hover:bg-cyan-800/50 cursor-pointer shadow-lg"
                  variants={staggerItemVariants}
                  whileHover={{ scale: 1.08 }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* stat cards */}
            <motion.div className="mt-8 grid grid-cols-3 gap-4" variants={staggerContainerVariants}>
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl border-2 border-white/25 bg-white/10 p-5 text-center backdrop-blur-md hover:border-cyan-400/60 hover:bg-cyan-500/20 cursor-pointer transition-all shadow-lg"
                  variants={staggerItemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="font-heading text-3xl font-bold text-cyan-300">{stat.value}</p>
                  <p className="mt-2 text-sm leading-snug text-white/95 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA + socials */}
            <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={staggerItemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/60 transition-all duration-300 hover:shadow-[0_0_32px_0] hover:shadow-primary/70"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <div className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.linkedin.com/in/allysa-batchiller"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-card/40 text-foreground/80 transition-all hover:border-primary/60 hover:text-primary hover:bg-primary/15 backdrop-blur-sm"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="mailto:allysa-batchiller57@example.com"
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-card/40 text-foreground/80 transition-all hover:border-primary/60 hover:text-primary hover:bg-primary/15 backdrop-blur-sm"
                  >
                    <Mail className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
