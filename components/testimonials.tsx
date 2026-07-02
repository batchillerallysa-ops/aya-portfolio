import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "Working with Allysa was a great experience. She was able to quickly learn processes to undertake detailed profiling, company research and data work that enabled us to deliver major client projects on time. Beyond her technical competence, Allysa's commitment to the team helped achieve positive results. I highly recommend her for any organisation.",
    name: "Tim Klekot",
    title: "Data Protection Officer",
    company: "Viatel Solutions Ltd — Manchester, UK",
  },
  {
    quote:
      "Aya is a dependable and skilled IT professional who consistently delivers high-quality work. She approaches challenges with a calm, positive attitude and a strong sense of responsibility, making her someone you can always rely on. She's approachable, easy to work with, and brings a cheerful energy that lifts the whole team.",
    name: "Bea Marie L. Padit",
    title: "Assistant Customer Service Manager",
    company: "Seedbox Technologies Inc.",
  },
  {
    quote:
      "Aya is a dedicated, reliable and highly professional individual. She consistently demonstrated strong work ethics, attention to detail and a proactive approach to problem-solving. Her commitment to continuous learning and improvement makes her a valuable asset to any organization.",
    name: "Anne Bernadette Rivera",
    title: "Senior Business Analyst Manager",
    company: "Seedbox Philippines",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            What colleagues say
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="group flex flex-col rounded-2xl border border-primary/15 bg-card/40 p-6 backdrop-blur-lg transition-all duration-300 hover:border-primary/40 hover:bg-card/50 hover:shadow-[0_12px_40px_-4px_rgba(6,182,212,0.12)]"
            >
              {/* Cinematic glow background */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <Quote className="h-7 w-7 flex-none text-primary/60 transition-colors duration-300 group-hover:text-primary/80" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-primary/10 pt-4">
                <p className="font-heading text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
                <p className="text-xs text-primary">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
