import { Project } from "@/lib/projects"

export const zapierProjects: Project[] = [
  {
    slug: "content-repurposing-pipeline",
    title: "Content Repurposing Pipeline",
    tool: "zapier",
    tagline: "Automatically adapt your blog posts into social media content.",
    overview:
      "A Zapier workflow that monitors your blog for new posts, automatically formats snippets for Twitter, LinkedIn, and Instagram, and schedules them to post at optimal times using Buffer.",
    problem: [
      "Creating social media versions of blog posts took 30+ minutes per article.",
      "Inconsistent posting schedule meant lower reach and engagement.",
      "Missed opportunity to amplify blog content across all platforms.",
    ],
    solution: [
      "Zapier monitors RSS feed for new blog posts",
      "Automatically extracts key quotes and insights",
      "Formats content for each platform's character limits and best practices",
      "Schedules via Buffer at peak engagement times",
    ],
    results: [
      { stat: "30 mins", label: "Saved per blog post" },
      { stat: "4x", label: "More social reach per article" },
      { stat: "100%", label: "Content repurposing consistency" },
    ],
    techStack: ["Zapier", "RSS Feed", "Buffer", "Text Formatting"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Content%20Repurposing%20Pipeline-XGcpRlhGQ3EE4M7VxqhJHVz3hYHnCb.png",
  },
  {
    slug: "gmail-attachment-sorter",
    title: "Gmail Attachment Auto-Sorter",
    tool: "zapier",
    tagline: "Automatically organize email attachments into cloud folders.",
    overview:
      "A Zapier workflow that intercepts emails with attachments, recognizes file types, and automatically uploads them to organized Google Drive folders based on sender, file type, and date.",
    problem: [
      "Attachments piled up in email without organization.",
      "Hard to find files later when needed for reference.",
      "Wasted storage with duplicate attachments in email.",
    ],
    solution: [
      "Zapier triggers on emails with attachments",
      "File type and sender are analyzed automatically",
      "Files uploaded to Google Drive in organized folder structure",
      "Original email tagged for reference",
    ],
    results: [
      { stat: "100%", label: "Attachment organization" },
      { stat: "2 GB", label: "Email storage freed" },
      { stat: "Zero", label: "Manual sorting required" },
    ],
    techStack: ["Zapier", "Gmail API", "Google Drive", "File Recognition"],
  },
  {
    slug: "lead-enrichment-crmflow",
    title: "Lead Enrichment & CRM Flow",
    tool: "zapier",
    tagline: "Automatically enrich lead data and add to CRM pipeline.",
    overview:
      "A Zapier workflow that captures form submissions, enriches the data with company information using Hunter and LinkedIn APIs, and automatically adds leads to Salesforce with proper scoring and assignment.",
    problem: [
      "Form leads arrived with incomplete information.",
      "No way to know company size, industry, or fit before outreach.",
      "Manual lead entry into CRM was slow and error-prone.",
    ],
    solution: [
      "Form submission triggers lead enrichment pipeline",
      "Hunter API finds additional email addresses for the company",
      "LinkedIn API pulls company details and industry info",
      "Lead scoring determines routing in Salesforce CRM",
    ],
    results: [
      { stat: "70%", label: "More lead data at intake" },
      { stat: "3x", label: "Faster sales team access" },
      { stat: "15%", label: "Improvement in lead quality score" },
    ],
    techStack: ["Zapier", "Form Integration", "Hunter API", "LinkedIn API", "Salesforce"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lead%20Enrichment%20%26%20CRM%20Flow-XGcpRlhGQ3EE4M7VxqhJHVz3hYHnCb.png",
  },
  {
    slug: "asana-crm-workflow",
    title: "Asana-Salesforce CRM Workflow Sync",
    tool: "zapier",
    tagline: "Keep Asana projects and Salesforce deals synchronized automatically.",
    overview:
      "A Zapier workflow that syncs Asana project tasks with Salesforce opportunities, creating a unified view of progress and automating status updates across both platforms.",
    problem: [
      "Team used Asana for project management but Salesforce for deals.",
      "Manual status updates meant one system was always out of sync.",
      "Sales and operations had different views of the same work.",
    ],
    solution: [
      "Zapier monitors Asana for task and status changes",
      "Updates corresponding Salesforce opportunity automatically",
      "Bidirectional sync ensures both platforms stay current",
      "Creates audit trail of all changes",
    ],
    results: [
      { stat: "100%", label: "Data consistency" },
      { stat: "4 hours", label: "Sync overhead eliminated weekly" },
      { stat: "1 view", label: "Of truth for all deals and projects" },
    ],
    techStack: ["Zapier", "Asana API", "Salesforce API", "Bidirectional Sync"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asana%20CRM%20Workflow%20Sync-XGcpRlhGQ3EE4M7VxqhJHVz3hYHnCb.png",
  },
]
