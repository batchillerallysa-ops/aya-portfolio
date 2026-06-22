import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Target, AlertCircle, Lightbulb, TrendingUp, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "@/components/image-lightbox"
import { getProject, TOOLS, projects } from "@/lib/projects"

interface MakeProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.tool === "make")
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: MakeProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: `${project.title} — Allysa Marie`,
    description: project.tagline,
  }
}

export default async function MakeProjectPage({ params }: MakeProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || project.tool !== "make") notFound()

  const tool = TOOLS.make
  const toolColor = tool.color

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center gap-4 px-4 py-4 sm:px-6">
          <Button asChild variant="ghost" size="sm" className="-ml-3">
            <Link href="/make">
              <ArrowLeft className="mr-2 h-4 w-4" /> All Make Projects
            </Link>
          </Button>
          <div className="flex-1" />
          <Button asChild variant="ghost" size="sm">
            <Link href="/#work">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: toolColor }}
            />
            <span className="text-sm font-medium">{tool.name}</span>
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">{project.tagline}</p>

          {/* Key Results - Highlighted */}
          <div className="pt-8 grid gap-4 sm:grid-cols-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-4"
                style={{
                  borderLeftColor: toolColor,
                  borderLeftWidth: "4px",
                }}
              >
                <p
                  className="text-2xl font-bold"
                  style={{ color: toolColor }}
                >
                  {result.stat}
                </p>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
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
        <section className="mt-12">
          <div className="flex items-start gap-3 mb-4">
            <Target className="h-5 w-5 flex-shrink-0" style={{ color: toolColor }} />
            <h2 className="text-2xl font-bold">Overview</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {project.overview}
          </p>
        </section>

        {/* The Problem */}
        <section className="mt-12">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0" style={{ color: toolColor }} />
            <h2 className="text-2xl font-bold">The Problem</h2>
          </div>
          <ul className="space-y-3">
            {project.problem.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-muted-foreground">
                <span className="font-semibold" style={{ color: toolColor }}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Solution */}
        <section className="mt-12">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="h-5 w-5 flex-shrink-0" style={{ color: toolColor }} />
            <h2 className="text-2xl font-bold">The Solution</h2>
          </div>
          <ul className="space-y-3">
            {project.solution.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-muted-foreground">
                <span className="font-semibold" style={{ color: toolColor }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mt-12">
          <div className="flex items-start gap-3 mb-4">
            <Package className="h-5 w-5 flex-shrink-0" style={{ color: toolColor }} />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{
                  borderColor: toolColor,
                  color: toolColor,
                  backgroundColor: `${toolColor}15`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to automate your business?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how I can build custom Make workflows for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://calendly.com/allysa" target="_blank">
                Schedule a call
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
