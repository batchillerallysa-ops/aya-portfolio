import { Workflow, Database, CalendarClock, BarChart3, Bot, LifeBuoy } from "lucide-react"

const SERVICES = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end automations in Zapier, Make.com, and n8n that connect your apps and remove repetitive manual steps.",
  },
  {
    icon: Bot,
    title: "AI Agents & Integrations",
    description:
      "Practical AI built with OpenAI, ChatGPT, Claude, and RAG — from support agents to content and research assistants.",
  },
  {
    icon: CalendarClock,
    title: "Executive & Admin Support",
    description:
      "Calendar and inbox management, scheduling, documentation, and file organization that keeps your day running smoothly.",
  },
  {
    icon: Database,
    title: "Data & Database Management",
    description:
      "Accurate data tracking, validation, and clean records using SQL, Airtable, Google Sheets, and reporting workflows.",
  },
  {
    icon: BarChart3,
    title: "Process Optimization",
    description:
      "Process mapping and optimization that streamline operations — I've improved turnaround times by up to 25%.",
  },
  {
    icon: LifeBuoy,
    title: "CRM & Technical Support",
    description:
      "GoHighLevel setup, lead capture and follow-ups, plus dependable technical support and issue resolution.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Services</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            How I can support your business
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A blend of automation engineering and reliable virtual assistance — focused on efficiency, accuracy, and
            giving you back your time.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:shadow-[0_8px_32px_0_rgba(6,182,212,0.15)]"
            >
              {/* Cinematic glow effect on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
