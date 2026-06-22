import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Calendar, Target, Wrench, TrendingUp, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "@/components/image-lightbox"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getProject, projects, TOOLS } from "@/lib/projects"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Allysa Batchiller`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const tool = TOOLS[project.tool]
  const accent = { "--accent-color": tool.color } as React.CSSProperties

  return (
    <div className="min-h-screen bg-background font-sans" style={accent}>
      <SiteHeader />

      <main>
        {/* Header */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background: `radial-gradient(55% 60% at 15% 0%, ${tool.tint} 0%, transparent 70%)`,
            }}
          />
          <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
            <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8 text-muted-foreground">
              <Link href="/#work">
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to portfolio
              </Link>
            </Button>

            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold"
              style={{ backgroundColor: tool.tint, color: tool.color }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tool.color }} />
              {tool.name}
            </span>

            <h1 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          {/* Results highlight */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-border hover:shadow-lg"
                style={{ borderColor: `color-mix(in srgb, ${tool.color} 30%, transparent)` }}
              >
                <p className="font-heading text-3xl font-bold" style={{ color: tool.color }}>
                  {r.stat}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>

          {/* Workflow image with lightbox zoom */}
          {project.imageUrl && (
            <div className="mt-12">
              <ImageLightbox
                src={project.imageUrl}
                alt={project.title}
                className="w-full rounded-2xl border border-border"
              />
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Click the image to open a full-screen viewer with zoom controls
              </p>
            </div>
          )}

          {/* Overview */}
          <CaseSection icon={Target} title="Overview" accent={tool.color}>
            <p className="text-pretty leading-relaxed text-muted-foreground">{project.overview}</p>
          </CaseSection>

          {/* Problem */}
          <CaseSection icon={Target} title="The Problem" accent={tool.color}>
            <ul className="space-y-3">
              {project.problem.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                    style={{ backgroundColor: tool.color }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          {/* Solution */}
          <CaseSection icon={Wrench} title="The Solution" accent={tool.color}>
            <ol className="space-y-4">
              {project.solution.map((item, i) => (
                <li key={item} className="flex gap-4 leading-relaxed text-muted-foreground">
                  <span
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-sm font-semibold"
                    style={{ backgroundColor: tool.tint, color: tool.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </CaseSection>

          {/* Results detail */}
          <CaseSection icon={TrendingUp} title="The Results" accent={tool.color}>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="rounded-xl border border-border bg-card p-5 transition-all hover:border-border hover:shadow-md">
                  <p className="font-heading text-2xl font-bold" style={{ color: tool.color }}>
                    {r.stat}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>
          </CaseSection>

          {/* Tech stack */}
          <CaseSection icon={Layers} title="Tech Stack" accent={tool.color}>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/90 transition-all hover:border-border hover:bg-accent/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CaseSection>

          {/* CTA */}
          <div
            className="mt-16 rounded-3xl border border-border p-8 text-center sm:p-12 transition-all hover:shadow-lg"
            style={{ background: tool.tint }}
          >
            <h2 className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Want a solution like this?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Let&apos;s talk about the repetitive work slowing your team down — I&apos;ll map out how automation can fix
              it.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/#contact">
                  Get in touch <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                <a href="https://calendly.com/allysa-batchiller57/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-1 h-4 w-4" /> Book a call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

function CaseSection({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: React.ElementType
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight sm:text-2xl">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `color-mix(in srgb, ${accent} 14%, transparent)`, color: accent }}
        >
          <Icon className="h-5 w-5" />
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
