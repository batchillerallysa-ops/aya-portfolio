import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">
            Workflow &amp; AI Automations Specialist · Sariaya, Quezon
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Allysa Marie Batchiller. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
