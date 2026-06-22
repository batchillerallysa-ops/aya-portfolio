import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, TOOLS } from "@/lib/projects"

export const metadata: Metadata = {
  title: "GoHighLevel Automation Projects — Allysa Marie",
  description: "Explore GoHighLevel workflow automation projects including lead capture, multi-channel engagement, and CRM integration.",
}

const ghlProjects = projects.filter((p) => p.tool === "ghl")

export default function GHLPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back home
            </Link>
          </Button>
          <h1 className="text-lg font-semibold">GoHighLevel Projects</h1>
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:px-6">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl mb-3">
            GoHighLevel Automation Projects
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Discover how I&apos;ve used GoHighLevel to build sophisticated lead capture systems, multi-channel engagement workflows, and customer relationship management automations.
            Each project demonstrates expert use of GHL&apos;s powerful automation platform.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ghlProjects.map((project) => {
            const tool = TOOLS[project.tool]
            return (
              <Link
                key={project.slug}
                href={`/projects/ghl/${project.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                {/* Icon + Tool */}
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: tool.tint }}
                >
                  <div
                    className="h-5 w-5 rounded-full"
                    style={{ backgroundColor: tool.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.tagline}
                </p>

                {/* Results Preview */}
                <div className="flex gap-2 text-xs">
                  {project.results.slice(0, 2).map((result, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-primary/10 px-3 py-1 text-primary"
                    >
                      {result.stat}
                    </div>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8">
          <h3 className="text-lg font-semibold mb-6">GoHighLevel Expertise</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-primary">{ghlProjects.length}</p>
              <p className="text-sm text-muted-foreground">Live projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground">Hours saved weekly</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">99.5%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">6+</p>
              <p className="text-sm text-muted-foreground">Connected channels</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
