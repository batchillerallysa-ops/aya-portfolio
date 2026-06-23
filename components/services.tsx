'use client'

import { Workflow, Database, CalendarClock, BarChart3, Bot, LifeBuoy } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const SERVICES = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end automations in Zapier, Make.com, and n8n that connect your apps and remove repetitive manual steps.",
  },
  {
    icon: Bot,
    title: "AI Agents & Integrations",
    description:
      "Practical AI built with OpenAI, ChatGPT, Claude, and RAG — from support agents to content and research assistants.",
  },
  {
    icon: CalendarClock,
    title: "Executive & Admin Support",
    description:
      "Calendar and inbox management, scheduling, documentation, and file organization that keeps your day running smoothly.",
  },
  {
    icon: Database,
    title: "Data & Database Management",
    description:
      "Accurate data tracking, validation, and clean records using SQL, Airtable, Google Sheets, and reporting workflows.",
  },
  {
    icon: BarChart3,
    title: "Process Optimization",
    description:
      "Process mapping and optimization that streamline operations — I've improved turnaround times by up to 25%.",
  },
  {
    icon: LifeBuoy,
    title: "CRM & Technical Support",
    description:
      "GoHighLevel setup, lead capture and follow-ups, plus dependable technical support and issue resolution.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border">
      <motion.div
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        <motion.div className="max-w-2xl" variants={staggerContainerVariants}>
          <motion.p className="text-sm font-medium uppercase tracking-widest text-primary" variants={staggerItemVariants}>Services</motion.p>
          <motion.h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-white/95 sm:text-4xl" variants={staggerItemVariants}>
            How I can support your business
          </motion.h2>
          <motion.p className="mt-4 text-pretty leading-relaxed text-white/80" variants={staggerItemVariants}>
            A blend of automation engineering and reliable virtual assistance — focused on efficiency, accuracy, and
            giving you back your time.
          </motion.p>
        </motion.div>

        <motion.div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainerVariants}>
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-md p-6 transition-colors hover:border-primary/50 cursor-pointer"
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
            >
              <motion.span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary" whileHover={{ scale: 1.2, rotate: 10 }}>
                <service.icon className="h-5 w-5" />
              </motion.span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white/95">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
