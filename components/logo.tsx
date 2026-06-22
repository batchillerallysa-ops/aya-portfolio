import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/#top"
      className={cn(
        "group inline-flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight",
        className,
      )}
      aria-label="Allysa Batchiller — home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
        AB
      </span>
      <span className="leading-none">
        Allysa<span className="text-primary"> Batchiller</span>
      </span>
    </Link>
  )
}
