const EXPERIENCE = [
  {
    role: "Operations Executive",
    company: "Seedbox Technologies, Inc.",
    period: "May 2024 – Present",
    points: [
      "Managed 50+ daily transactions including subscriptions and redemptions with accurate tracking and timely client reporting.",
      "Coordinated documents and records for 100+ accounts, strengthening documentation and file organization.",
      "Performed KYC checks and compliance reviews for 30+ clients weekly, supporting data validation and accuracy.",
      "Streamlined workflows across channels, improving turnaround time by 20% through process optimization.",
    ],
  },
  {
    role: "IT Operations Analyst",
    company: "Seedbox Technologies, Inc.",
    period: "2021 – 2024",
    points: [
      "Analyzed system performance using database and API tools, improving response times by 25%.",
      "Managed and updated 200+ hardware and software records, enhancing data organization and reporting.",
      "Provided technical support to 50+ internal users, ensuring timely resolution and system uptime.",
      "Led 3+ system improvement initiatives, reducing inefficiencies and supporting automation readiness.",
    ],
  },
  {
    role: "Market Intelligence Analyst",
    company: "Viatel Solutions Ltd. (Part-time)",
    period: "Feb 2022 – Feb 2025",
    points: [
      "Researched multinational companies on IT infrastructure, cloud, cybersecurity, and digital transformation.",
      "Analyzed company profiles, decision-makers, and prospect data to support sales and business development.",
      "Prepared company intelligence reports on network, cloud, cybersecurity, and unified communications.",
    ],
  },
  {
    role: "Quality Assurance Analyst",
    company: "Accenture, Inc.",
    period: "2021",
    points: [
      "Conducted quality audits on 100+ transactions weekly, ensuring compliance and accurate documentation.",
      "Identified recurring process errors and recommended improvements, reducing defects by 15%.",
      "Coordinated with 10+ team members to implement corrective actions and strengthen consistency.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Accenture, Inc.",
    period: "2018 – 2021",
    points: [
      "Analyzed 200+ medical claims daily, ensuring accurate data tracking and client compliance.",
      "Cleaned and validated large datasets, improving reporting accuracy by 20%.",
      "Developed process improvement recommendations, reducing processing time by 15%.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Systems and Encoding Corporation (SENCOR)",
    period: "2014 – 2017",
    points: [
      "Processed and validated 150+ legal documents daily with accurate data entry and file organization.",
      "Managed case data and attorney records, improving database accuracy and accessibility.",
      "Coordinated with the team to meet daily output targets, maintaining a 98% accuracy rate.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Experience</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A decade of operations &amp; analysis
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Ten-plus years across operations, IT, and data — building the process discipline that makes automation
            actually stick.
          </p>
        </div>

        <ol className="mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {EXPERIENCE.map((job, i) => (
            <li key={`${job.company}-${i}`} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[39px]"
                aria-hidden="true"
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-lg font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-primary/70" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
