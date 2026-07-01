import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/#top"
      className={cn(
        "inline-flex items-center font-heading text-lg font-bold tracking-tight transition-colors hover:text-primary",
        className,
      )}
      aria-label="Allysa Batchiller — home"
    >
      Allysa<span className="text-primary"> Batchiller</span>
    </Link>
  )
}
