# Projects Organization

This folder contains all automation project examples organized by platform for easy navigation and maintenance.

## Folder Structure

```
projects/
├── zapier/
│   └── index.ts          # All Zapier automation projects
├── make/
│   └── index.ts          # All Make.com automation projects
├── n8n/
│   └── index.ts          # All n8n automation projects
├── ghl/
│   └── index.ts          # All GoHighLevel automation projects
└── README.md             # This file
```

## Platforms

### 🔌 **Zapier** (`/zapier`)
- Content Repurposing Pipeline
- Gmail Attachment Auto-Sorter
- Lead Enrichment & CRM Flow
- Asana-Salesforce CRM Workflow Sync

### 🎨 **Make.com** (`/make`)
- RAG AI Agent for Customer Support
- Automated Export of Xero Transactions to Asana

### ⚙️ **n8n** (`/n8n`)
- AI Jobs Scraper + Resume Optimizer
- Facebook AI Agent for Customer Support
- Weather Forecast Email Digest
- YouTube & Reels Content Repurposing

### 📞 **GoHighLevel (GHL)** (`/ghl`)
- Lead Capture with Instant Follow-ups
- Survey Response → Asana Task Automation

## Adding New Projects

1. Navigate to the platform folder where your project belongs
2. Add your project to the platform's `index.ts` file
3. Follow the existing `Project` type structure:

```typescript
{
  slug: "unique-project-slug",
  title: "Project Title",
  tool: "zapier" | "make" | "n8n" | "ghl",
  tagline: "One-line description of what it does",
  overview: "Detailed explanation of the workflow",
  problem: ["Problem 1", "Problem 2", "Problem 3"],
  solution: ["Solution 1", "Solution 2", "Solution 3"],
  results: [
    { stat: "X%", label: "Improvement metric" },
    { stat: "Y mins", label: "Time saved" }
  ],
  techStack: ["Tool 1", "Tool 2", "Tool 3"],
  imageUrl: "https://..." // optional
}
```

## Importing Projects

All projects are automatically aggregated in `/lib/projects.ts`:

```typescript
import { ghlProjects } from "@/lib/projects/ghl"
import { n8nProjects } from "@/lib/projects/n8n"
import { makeProjects } from "@/lib/projects/make"
import { zapierProjects } from "@/lib/projects/zapier"

export const projects = [
  ...zapierProjects,
  ...makeProjects,
  ...n8nProjects,
  ...ghlProjects,
]
```

## Maintenance Guidelines

- **Keep projects separated by platform**: Do not mix projects from different platforms in the same folder
- **One project per platform version**: If a workflow exists in multiple platforms, create separate entries in each platform folder
- **Consistent naming**: Use kebab-case for slugs (e.g., `lead-capture-workflow`)
- **Complete documentation**: Fill in all fields (problem, solution, results) for each project
- **Update main projects.ts**: The import statements automatically include all new projects added to platform folders

## Accessing Projects

- **By slug**: Use `getProject(slug)` function from `/lib/projects.ts`
- **By platform**: Import directly from platform folder or filter from main projects array
- **All projects**: Import `projects` array from `/lib/projects.ts`
