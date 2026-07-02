import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

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
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: terminal-window photo frame */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            {/* ambient glow behind the frame */}
            <div className="ambient-glow pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-2xl" aria-hidden="true" />

            <div className="terminal-frame group relative overflow-hidden rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl shadow-[0_24px_64px_0_rgba(6,182,212,0.08)]">
              {/* Cinematic glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* top accent bar with glow */}
              <div className="top-gradient-bar h-[3px] w-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_16px_-2px] shadow-primary/40" aria-hidden="true" />

              {/* window title row */}
              <div className="flex items-center gap-2 border-b border-primary/10 px-4 py-3 backdrop-blur-sm">
                <span className="h-3 w-3 rounded-full bg-destructive/80 shadow-lg shadow-destructive/40" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-secondary shadow-lg shadow-secondary/40" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/40" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">allysa@portfolio: ~/about</span>
              </div>

              {/* photo area */}
              <div
                className="relative aspect-[4/5] w-full"
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
                     <Image src="/allysa.jpg" alt="Allysa Batchiller" fill className="object-cover" />
                     (import Image from "next/image")
                */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-card/60 font-mono text-2xl font-bold text-primary">
                    {"</>"}
                  </span>
                  <p className="font-mono text-sm font-medium text-foreground/90">Your photo here</p>
                  <p className="max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
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
          </div>

          {/* Right: content */}
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.25em] text-primary">{"// About Me"}</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              About My Information
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              I&apos;m a virtual assistant and automation specialist with a decade of hands-on experience across
              operations, IT, and data. I help lean teams reclaim hours by streamlining repetitive workflows and wiring
              up the right tools so the busywork runs itself.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              My background in process discipline — KYC reviews, quality audits, and large-scale data validation — is
              what makes the automation I build actually stick.
            </p>

            {/* role badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {ROLES.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* stat cards */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div 
                  key={stat.label} 
                  className="group relative rounded-xl border border-primary/20 bg-primary/8 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/12 hover:shadow-[0_8px_24px_0_rgba(6,182,212,0.1)]"
                >
                  {/* Cinematic glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA + socials */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_0] hover:shadow-primary/70"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/allysa-batchiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:allysa-batchiller57@example.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
