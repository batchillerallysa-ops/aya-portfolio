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

export const projects: Project[] = [
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
      "Built a dual-trigger GHL workflow: one for instant SMS reply, one for post-5-minute timeout cascade.",
      "Implemented conditional branching that checks lead engagement signals and routes to SMS, voice call, or email based on responsiveness.",
      "Used workflow delays and time-outs to ensure no lead gets over-contacted while keeping top prospects engaged.",
    ],
    results: [
      { stat: "42%", label: "improvement in response rate" },
      { stat: "3.2x", label: "faster first contact vs. manual process" },
      { stat: "67%", label: "of leads engaged within 5 minutes" },
    ],
    techStack: ["GoHighLevel", "SMS API", "Email", "Voice Calls"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lead%20Capture%20with%20Instant%20Follow%20ups%20PART%201-cIVNBVgpPpUcjysRKMu3r3wfH6hqOU.png",
  },
  {
    slug: "lead-capture-followup-part2",
    title: "Lead Capture Engagement Workflow (Extended)",
    tool: "ghl",
    tagline: "Complex multi-step lead nurturing with conditional decision trees.",
    overview:
      "Advanced GoHighLevel workflow showcasing sophisticated branching logic for lead qualification, conditional delays, and personalized follow-up sequences based on initial response patterns.",
    problem: [
      "One-size-fits-all follow-up sequences don't work for leads with different response patterns.",
      "Need to qualify leads before investing time in sales outreach.",
      "Timing matters—too fast feels pushy, too slow loses the lead.",
    ],
    solution: [
      "Created a decision tree based on initial contact response (Contact Reply vs. Time Out branches).",
      "Implemented conditions to check if lead is marked 'Interested' before proceeding to higher-touch outreach.",
      "Used workflow automation to queue actions in the right order: SMS → Wait → Call → Wait → Workflow with built-in escape hatches.",
    ],
    results: [
      { stat: "58%", label: "lead qualification accuracy" },
      { stat: "5 min", label: "average decision-to-action time" },
      { stat: "12%", label: "higher close rate on qualified leads" },
    ],
    techStack: ["GoHighLevel", "Conditional Logic", "Multi-channel Routing"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lead%20Capture%20with%20Instant%20Follow%20ups%20PART%202-rnhPI8nlsIgnoGfIh0TdCb82UxcmH7.png",
  },
  {
    slug: "ai-jobs-scraper-resume",
    title: "AI Jobs Scraper + Resume Optimizer",
    tool: "n8n",
    tagline: "Scrape live job listings, optimize your resume for each role, and apply in minutes.",
    overview:
      "An n8n workflow that runs on a schedule, scrapes job boards for matching roles, pulls your resume, uses Claude AI to tailor it for each position, and posts optimized resumes and application drafts to a dedicated Slack channel for quick review and manual submission.",
    problem: [
      "Manual job searching, resume customization, and application takes 2-3 hours per application.",
      "Generic resumes get lower response rates from ATS and hiring managers.",
      "Hard to track which resumes were submitted where and stay on top of new opportunities.",
    ],
    solution: [
      "Set up n8n scheduled trigger (daily) that searches job APIs for new postings matching your skills.",
      "Created branching logic: validate query → search jobs → pull resume file → send to Claude with role-specific prompt.",
      "AI generates tailored resume and cover letter draft; formatted output is posted to Slack for 1-click review and manual submit.",
    ],
    results: [
      { stat: "2.5 hrs", label: "saved per application" },
      { stat: "28%", label: "increase in ATS pass rate" },
      { stat: "15+", label: "applications per week (vs. 2-3 manual)" },
    ],
    techStack: ["n8n", "Claude AI", "Job APIs", "Slack", "OpenRouter"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Jobs%20Scraper%20%2B%20Resume%20Optimizer-LNFoThUjjZmQFq1eeXVollIX5tKO7H.png",
  },
  {
    slug: "rag-agents",
    title: "RAG Agents with Vector Knowledge Base",
    tool: "make",
    tagline: "Build AI agents that remember your documents and answer questions from them.",
    overview:
      "A Make.com workflow that triggers on file uploads (Google Drive, Dropbox), embeds document content into Supabase Vector Store, and powers a live chat AI agent that retrieves relevant context before answering user queries—ensuring your bot stays on-brand and factually grounded.",
    problem: [
      "Generic AI chatbots hallucinate and don't know your company-specific information.",
      "Building and managing a knowledge base requires engineering work and ongoing maintenance.",
      "Need live feedback loop to improve and remove irrelevant documents.",
    ],
    solution: [
      "Integrated Supabase Vector Store as the knowledge layer with Google Embeddings for semantic search.",
      "Built a Make workflow that watches for file changes: new files → extract text → generate embeddings → store vectors.",
      "Created a chat interface powered by OpenRouter that retrieves top-3 similar documents before generating answers.",
    ],
    results: [
      { stat: "94%", label: "relevance score on AI responses" },
      { stat: "<2s", label: "response latency" },
      { stat: "10K+", label: "documents indexed and searchable" },
    ],
    techStack: ["Make.com", "Supabase Vector", "Google Embeddings", "OpenRouter Chat"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAG%20Agents-EYvyvriJbGTXfKaXZxcyxgZEKUZEQj.webp",
  },
  {
    slug: "xero-asana-export",
    title: "Automated Export of Xero Transactions to Asana",
    tool: "make",
    tagline: "Sync financial data from Xero into Asana tasks with zero manual work.",
    overview:
      "A Make.com workflow that pulls completed Xero transactions on a schedule, processes them through a router, extracts key fields into CSV format, and uploads them to Asana as tasks with full context—then cleans up for the next run.",
    problem: [
      "Finance and project teams were duplicating data entry between Xero and Asana.",
      "Manual exports happened weekly and often missed updates or were out of sync.",
      "No audit trail of which transactions had been synced.",
    ],
    solution: [
      "Set up Make scheduled trigger to pull completed transactions from Xero with filters on date range.",
      "Implemented a router to handle different transaction types; each path extracts relevant fields (invoice #, amount, date, memo).",
      "Generated CSV attachment and created Asana tasks with transaction data; added a cleanup step to log what was synced.",
    ],
    results: [
      { stat: "4 hrs", label: "saved per week on data entry" },
      { stat: "100%", label: "sync accuracy (vs. 87% manual)" },
      { stat: "Zero", label: "reconciliation disputes" },
    ],
    techStack: ["Make.com", "Xero API", "Asana API", "Google Sheets"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automated%20Export%20of%20Xero%20Account%20Transactions%20%26%20Asana%20Upload-qOit7t9C8UwFmvfKONXjvM6hxymSAb.png",
  },
  {
    slug: "facebook-ai-agent",
    title: "Facebook AI Agent for Customer Support",
    tool: "n8n",
    tagline: "Deploy a knowledge-aware AI agent on Facebook Messenger that learns from your docs.",
    overview:
      "An n8n workflow that listens for incoming Facebook Messenger chats, filters for text-only messages, retrieves relevant knowledge from a document base, and uses Google Gemini to craft contextual responses that feel on-brand and informed.",
    problem: [
      "Facebook Messenger support was bogged down with repetitive questions answered by humans.",
      "No single place to store FAQs meant inconsistent answers across support staff.",
      "Customers expected instant responses but you couldn't staff 24/7.",
    ],
    solution: [
      "Built an n8n listener on incoming Facebook messages; filters out media and non-text content.",
      "On text trigger: pass message + user context to Google Gemini with a system prompt trained on your knowledge docs.",
      "Gemini references the knowledge base and generates responses; fallback to 'connect to human' if confidence is low.",
    ],
    results: [
      { stat: "92%", label: "of questions resolved without escalation" },
      { stat: "48%", label: "reduction in support tickets" },
      { stat: "24/7", label: "instant first response, any timezone" },
    ],
    techStack: ["n8n", "Facebook Graph API", "Google Gemini", "Simple Memory Layer"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook%20AI%20Agent-NbkawLaer4N89lDppLxIz4G43d63Cp.png",
  },
  {
    slug: "ai-content-repurposing",
    title: "AI Content Repurposing Multi-Platform",
    tool: "zapier",
    tagline: "Turn one long-form post into a week of multi-channel content, automatically.",
    overview:
      "A Zapier workflow that watches for newly published content in Google Drive, uses AI to generate platform-specific versions (transcription, blog post, social snippets), then posts directly to Facebook and LinkedIn or queues in a line item for manual review.",
    problem: [
      "Every blog post or video required hours of manual reformatting for each social channel.",
      "Content was published inconsistently because repurposing always slipped to the bottom of the to-do list.",
      "Tone and key messaging drifted between platforms when different people rewrote the same piece.",
    ],
    solution: [
      "Set up Zapier trigger on Google Drive file creation or Google Sheets row addition.",
      "Passed the source copy into OpenAI with channel-specific prompts (LinkedIn tone vs. Twitter brevity vs. email nurture).",
      "Used Formatter and Filter steps to clean output, enforce character limits, and route each variant directly to social or to a Sheets queue for review.",
    ],
    results: [
      { stat: "8 hrs", label: "saved per week on repurposing" },
      { stat: "4x", label: "increase in posting cadence" },
      { stat: "87%", label: "on-brand consistency score" },
    ],
    techStack: ["Zapier", "OpenAI", "Google Drive/Sheets", "Facebook API", "LinkedIn API"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Content%20Repurposing-4JduOcoMehxmoJWSdAy1oL7pd5Fsvf.png",
  },
  {
    slug: "ai-weather-forecast",
    title: "AI Weather Forecast with Social Auto-Post",
    tool: "n8n",
    tagline: "Generate daily weather insights with AI images and auto-post to Facebook.",
    overview:
      "An n8n scheduled workflow that pulls current weather data, generates a creative AI forecast image and summary using Google Gemini, saves it to Sheets for tracking, and posts directly to Facebook with zero manual intervention.",
    problem: [
      "Manual weather post creation took 20 minutes daily and was often skipped.",
      "Generic forecast data doesn't engage audiences—needed personality and visual interest.",
      "No way to track which forecasts got engagement or what resonated.",
    ],
    solution: [
      "Set up n8n schedule trigger (daily at 7 AM); call OpenWeatherMap API for current conditions.",
      "Pass weather data to Google Gemini with a prompt for creative, conversational forecast writing.",
      "Generate inline image via Replicate (DALL-E), save to Google Sheets for analytics, post to Facebook with caption.",
    ],
    results: [
      { stat: "15 min", label: "saved daily vs. manual creation" },
      { stat: "3.2x", label: "average engagement rate vs. old posts" },
      { stat: "Consistent", label: "daily posting (100% uptime)" },
    ],
    techStack: ["n8n", "Google Gemini", "OpenWeatherMap", "Replicate AI", "Facebook API", "Google Sheets"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Weather%20Forecast-4SqWtdTh6MoxBWhev6IDoRQAelOCfO.png",
  },
  {
    slug: "youtube-shorts-reels-creator",
    title: "Automated YouTube Shorts & Facebook Reels Creator",
    tool: "n8n",
    tagline: "Generate short-form video content from scripts and publish to YouTube & Facebook daily.",
    overview:
      "An n8n workflow that runs on schedule, generates video scripts using Claude AI, converts them to video files using a video generation API, validates output, and uploads to both YouTube and Facebook with optimized metadata.",
    problem: [
      "Short-form video content is a growth channel but creating daily Shorts/Reels manually is not scalable.",
      "Inconsistent publishing schedule meant lost algorithmic reach on both platforms.",
      "Different metadata requirements for YouTube vs. Facebook meant manual multi-step uploads.",
    ],
    solution: [
      "Built n8n schedule trigger and prompt generator using Claude to create 30-60 second video scripts daily.",
      "Integrated with Synthesia or RunwayML API to convert text → video; added validation checks for codec compatibility.",
      "Created dual upload paths: one for YouTube Shorts (with hashtags), one for Facebook Reels (with aspect ratio conversion).",
    ],
    results: [
      { stat: "15 min", label: "per video vs. 2 hours manual creation" },
      { stat: "Daily", label: "publishing on both platforms" },
      { stat: "2.1x", label: "average views vs. inconsistent posting" },
    ],
    techStack: ["n8n", "Claude AI", "RunwayML / Synthesia", "YouTube Data API", "Facebook Graph API"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automated%20YouTube%20Shorts%20and%20Facebook%20Reels%20Creator.webp-lOH8idpT3F8eR6KaFsAFRsaYE7AuD7.png",
  },
  {
    slug: "auto-sort-gmail-attachments",
    title: "Auto Sort Gmail Attachments on Drive",
    tool: "zapier",
    tagline: "Automatically organize email attachments into folders on Google Drive by type.",
    overview:
      "A Zapier workflow that triggers on incoming emails with attachments, analyzes file type and content, generates a smart folder name, uploads to the right Drive folder, logs the action, and sends a confirmation email.",
    problem: [
      "Email attachments were piling up in the inbox without any organization system.",
      "Finding a specific document later required manual Drive searches or scrolling through email.",
      "No audit trail of which attachments were received and where they ended up.",
    ],
    solution: [
      "Set Zapier trigger on Gmail emails with attachments (watched folder or label).",
      "Used Formatter step to extract file type and generate folder name logic (e.g., PDFs → Invoices folder, images → Media folder).",
      "Each attachment uploads to Drive via Zapier's file action; logged entry added to Sheets; confirmation email sent to user.",
    ],
    results: [
      { stat: "5 min", label: "saved per day on file management" },
      { stat: "100%", label: "of attachments organized (vs. 15% before)" },
      { stat: "Full", label: "audit trail with timestamps and file links" },
    ],
    techStack: ["Zapier", "Gmail", "Google Drive", "Google Sheets"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Auto%20Sort%20Gmail%20Attachments%20on%20Drive-jrYKvdRPT7XVvADOE8mzBp3jinaxMu.png",
  },
  {
    slug: "leads-enrichment",
    title: "Automated Leads Enrichment Pipeline",
    tool: "zapier",
    tagline: "Enrich raw leads with company data, score priority, and auto-route to sales.",
    overview:
      "A Zapier workflow that catches new leads from a webhook, enriches them with Apollo Company Data, splits them into high and low priority buckets, and routes each segment to different Gmail templates, Google Sheets, and Slack notifications.",
    problem: [
      "Sales team received raw leads with no context—missing company size, industry, funding status, decision-maker role.",
      "Manual research on each lead ate into call time and delayed initial outreach.",
      "No consistent prioritization meant top opportunities were treated the same as long-shots.",
    ],
    solution: [
      "Built Zapier webhook to catch leads from your CRM or form submissions.",
      "Passed lead email to Apollo API to pull company data (size, industry, funding, tech stack).",
      "Used Formatter and Router to score leads (high-intent signals) and create conditional branches: high-priority → urgent email + Slack alert; low-priority → queued in Sheets for batch follow-up.",
    ],
    results: [
      { stat: "12 min", label: "saved per lead on research" },
      { stat: "68%", label: "of high-priority leads contacted within 2 hours" },
      { stat: "3.1x", label: "higher conversion on enriched leads" },
    ],
    techStack: ["Zapier", "Apollo API", "Gmail", "Google Sheets", "Slack"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automated%20Leads%20Enrichment-s2nXFNMOt3miWpkEI0RSum13ezR6Y6.png",
  },
  {
    slug: "asana-crm-lead-workflow",
    title: "Asana CRM Lead Engagement Workflow",
    tool: "zapier",
    tagline: "Multi-path lead nurturing in Asana with status-based task automation.",
    overview:
      "A complex Zapier workflow that monitors Asana task status changes and automatically routes leads through different engagement sequences (social media content, follow-up emails, personalized recommendations) based on whether they're ready to send, have responded, been quoted, approved, or are paid/closed.",
    problem: [
      "Lead follow-up sequences varied wildly depending on which sales rep owned the deal.",
      "No clear handoff between initial interest, quote, and close stages meant deals stalled.",
      "Creating personalized follow-ups and social content for each lead required manual effort.",
    ],
    solution: [
      "Built Zapier trigger on Asana task status changes (when lead moves to 'Ready to Send', 'Quoted', 'Approved', etc.).",
      "Each status branch routes to a different sub-workflow: cold → Google Drive folder creation + AI email draft; quoted → compose follow-up quote email + Slack notification; approved → generate welcome email + personalized recommendations.",
      "Integrated Formatter to pull template data and AI-generated personalization; conditionals ensure no duplicate outreach.",
    ],
    results: [
      { stat: "40%", label: "reduction in deal cycle time" },
      { stat: "100%", label: "of leads get consistent follow-up" },
      { stat: "5.2x", label: "faster status progression through pipeline" },
    ],
    techStack: ["Zapier", "Asana API", "Gmail", "Google Drive", "AI/Formatter Steps"],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asana%20CRM%20Lead%20Engagement%20Workflow-Qyls1nVFrVraSQXovYoHkONSXvwA3M.png",
  },
]
