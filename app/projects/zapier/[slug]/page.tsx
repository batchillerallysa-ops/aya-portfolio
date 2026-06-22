import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Target, AlertCircle, Lightbulb, TrendingUp, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "@/components/image-lightbox"
import { getProject, TOOLS, projects } from "@/lib/projects"

interface ZapierProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.tool === "zapier")
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: ZapierProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: `${project.title} — Allysa Marie`,
    description: project.tagline,
  }
}

export default async function ZapierProjectPage({ params }: ZapierProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || project.tool !== "zapier") notFound()

  const tool = TOOLS.zapier
  const toolColor = tool.color

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center gap-4 px-4 py-4 sm:px-6">
          <Button asChild variant="ghost" size="sm" className="-ml-3">
            <Link href="/zapier">
              <ArrowLeft className="mr-2 h-4 w-4" /> All Zapier Projects
            </Link>
          </Button>
          <div className="flex-1" />
          <Link href="/#contact" className="text-sm text-primary hover:underline">
            Get in touch
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:px-6">
        {/* Hero Section */}
        <div className="mb-12">
          {/* Back button */}
          <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8 text-muted-foreground">
            <Link href="/zapier">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Zapier projects
            </Link>
          </Button>

          {/* Title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: tool.tint }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: toolColor }}
                >
                  Z
                </span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{tool.name}</p>
                <h1 className="text-4xl font-bold">{project.title}</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground text-pretty">
              {project.tagline}
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-4"
                style={{ borderColor: `${toolColor}30` }}
              >
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ color: toolColor }}
                >
                  {result.stat}
                </p>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Image */}
        {project.imageUrl && (
          <div className="mb-12 rounded-2xl border border-border overflow-hidden bg-card p-6">
            <ImageLightbox
              src={project.imageUrl}
              alt={project.title}
              className="w-full"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Click to zoom and explore the workflow diagram
            </p>
          </div>
        )}

        {/* Case Section: Overview */}
        <CaseSection icon={Target} title="Overview" color={toolColor}>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </CaseSection>

        {/* Case Section: Problem */}
        <CaseSection icon={AlertCircle} title="The Problem" color={toolColor}>
          <ul className="space-y-3">
            {project.problem.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <div
                  className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: toolColor }}
                />
                <p className="text-muted-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* Case Section: Solution */}
        <CaseSection icon={Lightbulb} title="The Solution" color={toolColor}>
          <ul className="space-y-3">
            {project.solution.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <div
                  className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: toolColor }}
                />
                <p className="text-muted-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* Case Section: Results */}
        <CaseSection icon={TrendingUp} title="Results & Impact" color={toolColor}>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card/50 p-4"
              >
                <p
                  className="text-2xl font-bold mb-1"
                  style={{ color: toolColor }}
                >
                  {result.stat}
                </p>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* Case Section: Tech Stack */}
        <CaseSection icon={Package} title="Tech Stack" color={toolColor}>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: `${toolColor}20`,
                  color: toolColor,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </CaseSection>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to automate with Zapier?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let&apos;s discuss how I can build similar workflows for your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/zapier">View More Projects</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

interface CaseSectionProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  color: string
  children: React.ReactNode
}

function CaseSection({ icon: Icon, title, color, children }: CaseSectionProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  )
}
