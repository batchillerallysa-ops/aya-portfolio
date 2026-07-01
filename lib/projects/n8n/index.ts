import { Project } from "@/lib/projects"

export const n8nProjects: Project[] = [
  {
    slug: "ai-jobs-scraper-resume",
    title: "AI Jobs Scraper + Resume Optimizer",
    tool: "n8n",
    tagline: "Scrape job listings and auto-optimize your resume for each application.",
    overview:
      "An n8n workflow that scrapes job listings from career sites, extracts key skills and requirements, then uses Claude AI to customize your resume for each position and automatically submits applications to a tracking sheet.",
    problem: [
      "Spending hours searching for relevant job postings across multiple sites.",
      "Manually tailoring resume for each application was time-consuming and error-prone.",
      "No centralized tracking of applications and responses.",
    ],
    solution: [
      "Automated job scraping from multiple career sites with keyword filtering",
      "Claude AI analyzes job descriptions and extracts critical requirements",
      "AI-powered resume customization highlights matching skills",
      "Automatic submission to Google Sheets with tracking metadata",
    ],
    results: [
      { stat: "15 jobs/day", label: "Screened automatically" },
      { stat: "40%", label: "Reduction in application time" },
      { stat: "3x", label: "More applications submitted per week" },
    ],
    techStack: ["n8n", "Claude API", "Web Scraping", "Google Sheets", "Regex"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Jobs%20Scraper%20%2B%20Resume%20Optimizer-1eM3OzwQcVNDDqm1oeVFLCEDnqWqfv.png",
  },
  {
    slug: "facebook-ai-agent",
    title: "Facebook AI Agent for Customer Support",
    tool: "n8n",
    tagline: "AI-powered chatbot that handles Facebook messages with intelligent responses.",
    overview:
      "An n8n workflow integrated with Facebook Messenger that uses OpenAI to intelligently respond to customer inquiries, categorize tickets, and escalate complex issues to human support.",
    problem: [
      "Facebook messages weren't being responded to quickly, frustrating customers.",
      "Support team was overwhelmed with repetitive questions that should be automated.",
      "No clear routing system for complex issues that needed human intervention.",
    ],
    solution: [
      "Webhook receives Facebook messages in real-time",
      "OpenAI analyzes message intent and generates contextual responses",
      "Automatic categorization routes complex issues to escalation queue",
      "Maintains conversation history for personalized interactions",
    ],
    results: [
      { stat: "2 mins", label: "Average response time" },
      { stat: "65%", label: "Reduction in support tickets requiring human intervention" },
      { stat: "92%", label: "Customer satisfaction with AI responses" },
    ],
    techStack: ["n8n", "OpenAI API", "Facebook Messenger API", "Webhooks", "JSON"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook%20AI%20Agent%20for%20Customer%20Support-1eM3OzwQcVNDDqm1oeVFLCEDnqWqfv.png",
  },
  {
    slug: "weather-forecast-email",
    title: "Weather Forecast Email Digest",
    tool: "n8n",
    tagline: "Daily automated weather forecasts sent to your inbox.",
    overview:
      "An n8n workflow that fetches weather data from multiple sources, formats it into an attractive HTML email digest, and sends it to subscribers every morning with personalized location data.",
    problem: [
      "Team members checked weather separately before planning outdoor activities.",
      "No centralized source for weather data across multiple locations.",
      "Missing weather-critical alerts until it's too late.",
    ],
    solution: [
      "Scheduled n8n workflow runs at 6 AM daily",
      "Fetches weather from OpenWeatherMap API for multiple cities",
      "Generates HTML-formatted email with forecasts, alerts, and recommendations",
      "Personalizes based on user location preferences",
    ],
    results: [
      { stat: "100%", label: "On-time delivery" },
      { stat: "78%", label: "Email open rate" },
      { stat: "5 mins", label: "Time saved per person daily" },
    ],
    techStack: ["n8n", "OpenWeatherMap API", "HTML Templates", "Email", "Scheduling"],
  },
  {
    slug: "youtube-reels-automation",
    title: "YouTube & Reels Content Repurposing",
    tool: "n8n",
    tagline: "Automatically repurpose long-form videos into short clips for social media.",
    overview:
      "An n8n workflow that monitors new YouTube uploads, automatically extracts highlights using AI analysis, generates short-form clips, adds captions, and distributes to Instagram Reels, TikTok, and YouTube Shorts.",
    problem: [
      "Creating short-form content from long videos was manual and time-intensive.",
      "Inconsistent posting schedule across social platforms.",
      "Missing opportunities to repurpose existing content.",
    ],
    solution: [
      "YouTube API monitors new video uploads automatically",
      "Claude AI analyzes transcripts to identify highlight moments",
      "FFmpeg clips key sections and adds captions automatically",
      "Multi-platform distribution to Reels, TikTok, and Shorts",
    ],
    results: [
      { stat: "8 clips", label: "Generated per video (manual was 2-3)" },
      { stat: "340%", label: "Increase in short-form content reach" },
      { stat: "20 hours", label: "Time saved per week" },
    ],
    techStack: ["n8n", "YouTube API", "Claude API", "FFmpeg", "File Storage"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YouTube%20%26%20Reels%20Content%20Repurposing-1eM3OzwQcVNDDqm1oeVFLCEDnqWqfv.png",
  },
]
