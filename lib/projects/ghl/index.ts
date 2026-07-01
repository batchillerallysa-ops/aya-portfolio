import { Project } from "@/lib/projects"

export const ghlProjects: Project[] = [
  {
    slug: "lead-capture-instant-followups",
    title: "Lead Capture with Instant Follow-ups",
    tool: "ghl",
    tagline: "Automate multi-channel lead engagement from form submission to first contact.",
    overview:
      "A GoHighLevel workflow that captures leads through an intake form, immediately sends SMS and email notifications, and routes high-priority and low-priority leads through different engagement funnels with smart delays and fallback communications.",
    problem: [
      "Leads sat in your inbox without immediate contact, reducing conversion rates during the critical first 5 minutes.",
      "No consistency in follow-up timing or channel preference based on lead interest level.",
      "Manual routing meant some high-value leads fell through cracks.",
    ],
    solution: [
      "Intake form triggers instant SMS and email alerts to the team",
      "Leads scored on interest level and automatically routed to appropriate funnels",
      "Smart delays and fallback communications ensure no prospect is lost",
      "Built-in feedback loops to track engagement and optimize timing",
    ],
    results: [
      { stat: "8 mins avg", label: "First contact time (was 4+ hours)" },
      { stat: "34%", label: "Increase in converted leads" },
    ],
    techStack: ["GoHighLevel", "SMS API", "Email API", "Conditional Logic"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lead%20Capture%20with%20Instant%20Follow%20ups%20PART%201-IB5lhRjqOSJEBTXFVhR4YiLhnnSKyY.png",
  },
  {
    slug: "ghl-survey-to-asana",
    title: "Survey Response → Asana Task Automation",
    tool: "ghl",
    tagline: "Convert survey feedback into tracked tasks automatically.",
    overview:
      "GoHighLevel integration that captures survey responses and automatically creates organized tasks in Asana based on response categories, priority level, and assigned team member.",
    problem: [
      "Survey responses were manually logged and could get lost.",
      "Team members didn't know which feedback items needed action.",
      "No centralized tracking of customer-reported issues or feature requests.",
    ],
    solution: [
      "GHL form responses trigger Asana task creation with parsed data",
      "Tasks are auto-tagged and assigned based on response category",
      "Priority levels are set based on feedback urgency",
      "Linked back to original contact record for context",
    ],
    results: [
      { stat: "100%", label: "Survey response tracking" },
      { stat: "5 mins", label: "Time from feedback to task (was manual)" },
    ],
    techStack: ["GoHighLevel", "Asana API", "Webhooks", "Data Mapping"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lead%20Capture%20with%20Instant%20Follow%20ups%20PART%202-rnhPI8nlsIgnoGfIh0TdCb82UxcmH7.png",
  },
]
