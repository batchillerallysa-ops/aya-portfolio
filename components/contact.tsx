import { Mail, Phone, Globe, Calendar, MessageCircle, ArrowUpRight } from "lucide-react"

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "batchiller.allysa@gmail.com",
    href: "mailto:batchiller.allysa@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 995 730 0125",
    href: "tel:+639957300125",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp & Viber",
    value: "0995 730 0125",
    href: "https://wa.me/639957300125",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "allysa-marie-batchiller",
    href: "https://www.linkedin.com/in/allysa-marie-batchiller-18290b212",
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s automate the busywork
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a workflow that eats your time, or a process that should run itself? Tell me about it — I&apos;ll
              show you how automation can help. Based in Sariaya, Quezon and working with teams worldwide.
            </p>

            <a
              href="https://calendly.com/allysa-batchiller57/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Calendar className="h-4 w-4" />
              Book a 30-minute call
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                    <p className="mt-1 truncate text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
