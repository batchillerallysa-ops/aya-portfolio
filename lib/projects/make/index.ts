import { Project } from "@/lib/projects"

export const makeProjects: Project[] = [
  {
    slug: "rag-ai-customer-support",
    title: "RAG AI Agent for Customer Support",
    tool: "make",
    tagline: "AI agent powered by your knowledge base for instant customer answers.",
    overview:
      "A Make.com workflow that ingests your knowledge base documents, stores them in a vector database, and uses GPT to retrieve and answer customer questions with accurate, source-cited responses in real-time.",
    problem: [
      "Support team answered the same questions repeatedly from scattered documentation.",
      "Customers didn't know where to find answers and submitted tickets instead.",
      "Response times were slow because support had to search for information first.",
    ],
    solution: [
      "Knowledge base automatically synced to vector database via Make",
      "Customer question triggers RAG pipeline for semantic search",
      "GPT generates answer with citations to source documents",
      "Responses delivered instantly without human intervention",
    ],
    results: [
      { stat: "90%", label: "Questions answered automatically" },
      { stat: "<1 min", label: "Average response time" },
      { stat: "60%", label: "Reduction in support tickets" },
    ],
    techStack: ["Make.com", "GPT API", "Vector Database", "Knowledge Base Sync"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAG%20AI%20Customer%20Support%20Agent-qOit7t9C8UwFmvfKONXjvM6hxymSAb.png",
  },
  {
    slug: "xero-asana-transaction-export",
    title: "Automated Export of Xero Transactions to Asana",
    tool: "make",
    tagline: "Sync accounting data to project management for better financial tracking.",
    overview:
      "A Make.com workflow that exports account transactions from Xero, categorizes them by project/department, creates corresponding tasks in Asana with cost allocation, and generates weekly reconciliation reports in Google Sheets.",
    problem: [
      "Accounting and project teams used separate systems with no visibility.",
      "Manual reconciliation of expenses to projects was error-prone and time-consuming.",
      "No real-time financial tracking at the project level.",
    ],
    solution: [
      "Xero API exports transactions daily with categorization",
      "Make intelligently maps transactions to Asana projects",
      "Creates tasks with cost tags and financial metadata",
      "Google Sheets auto-updates with reconciliation reports",
    ],
    results: [
      { stat: "100%", label: "Transaction coverage" },
      { stat: "8 hours", label: "Reconciliation time saved weekly" },
      { stat: "0", label: "Manual data entry required" },
    ],
    techStack: ["Make.com", "Xero API", "Asana API", "Google Sheets"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automated%20Export%20of%20Xero%20Account%20Transactions%20%26%20Asana%20Upload-qOit7t9C8UwFmvfKONXjvM6hxymSAb.png",
  },
]
