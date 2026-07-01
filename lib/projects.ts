import { ghlProjects } from "@/lib/projects/ghl"
import { n8nProjects } from "@/lib/projects/n8n"
import { makeProjects } from "@/lib/projects/make"
import { zapierProjects } from "@/lib/projects/zapier"

export type ToolKey = "zapier" | "make" | "n8n" | "ghl"

export type ToolMeta = {
  name: string
  /** Tailwind-friendly hex used for accents on the case study page */
  color: string
  /** Soft background tint */
  tint: string
}

export const TOOLS: Record<ToolKey, ToolMeta> = {
  zapier: { name: "Zapier", color: "#FF4F00", tint: "rgba(255, 79, 0, 0.12)" },
  make: { name: "Make.com", color: "#8B5CF6", tint: "rgba(139, 92, 246, 0.14)" },
  n8n: { name: "n8n", color: "#EA4B71", tint: "rgba(234, 75, 113, 0.14)" },
  ghl: { name: "GoHighLevel", color: "#2F80ED", tint: "rgba(47, 128, 237, 0.14)" },
}

export type Project = {
  slug: string
  title: string
  tool: ToolKey
  tagline: string
  overview: string
  problem: string[]
  solution: string[]
  results: { stat: string; label: string }[]
  techStack: string[]
  imageUrl?: string
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/**
 * All projects organized by platform
 * Each platform has its own dedicated file for better organization
 */
export const projects: Project[] = [
  ...zapierProjects,
  ...makeProjects,
  ...n8nProjects,
  ...ghlProjects,
]
