'use client'

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const TESTIMONIALS = [
  {
    quote:
      "Working with Allysa was a great experience. She was able to quickly learn processes to undertake detailed profiling, company research and data work that enabled us to deliver major client projects on time. Beyond her technical competence, Allysa's commitment to the team helped achieve positive results. I highly recommend her for any organisation.",
    name: "Tim Klekot",
    title: "Data Protection Officer",
    company: "Viatel Solutions Ltd — Manchester, UK",
  },
  {
    quote:
      "Aya is a dependable and skilled IT professional who consistently delivers high-quality work. She approaches challenges with a calm, positive attitude and a strong sense of responsibility, making her someone you can always rely on. She's approachable, easy to work with, and brings a cheerful energy that lifts the whole team.",
    name: "Bea Marie L. Padit",
    title: "Assistant Customer Service Manager",
    company: "Seedbox Technologies Inc.",
  },
  {
    quote:
      "Aya is a dedicated, reliable and highly professional individual. She consistently demonstrated strong work ethics, attention to detail and a proactive approach to problem-solving. Her commitment to continuous learning and improvement makes her a valuable asset to any organization.",
    name: "Anne Bernadette Rivera",
    title: "Senior Business Analyst Manager",
    company: "Seedbox Philippines",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-border bg-card/30">
      <motion.div
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
      >
        <motion.div className="max-w-2xl" variants={staggerContainerVariants}>
          <motion.p className="text-sm font-medium uppercase tracking-widest text-primary" variants={staggerItemVariants}>Testimonials</motion.p>
          <motion.h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl" variants={staggerItemVariants}>
            What colleagues say
          </motion.h2>
        </motion.div>

        <motion.div className="mt-12 grid gap-4 lg:grid-cols-3" variants={staggerContainerVariants}>
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 cursor-pointer"
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <Quote className="h-7 w-7 flex-none text-primary/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
                <p className="text-xs text-primary">{t.company}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
