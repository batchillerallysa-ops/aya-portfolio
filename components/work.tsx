import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects, TOOLS, type ToolKey } from "@/lib/projects"

const TOOL_ORDER: ToolKey[] = ["zapier", "make", "n8n", "ghl"]

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Previous Work</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Automations I&apos;ve built
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Real-world workflows across Zapier, Make.com, n8n, and GoHighLevel. Click any project to read the full
              case study.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TOOL_ORDER.map((tool) => (
              <Link
                key={tool}
                href={`/${tool}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                {TOOLS[tool].name} →
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const tool = TOOLS[project.tool]
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.tool}/${project.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card/50 hover:shadow-[0_16px_40px_-4px_rgba(6,182,212,0.12)]"
              >
                {/* Cinematic depth glow */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-lg transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: tool.tint, color: tool.color }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: tool.color }} />
                    {tool.name}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-balance">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-primary/10 pt-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-md bg-primary/8 px-2 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
