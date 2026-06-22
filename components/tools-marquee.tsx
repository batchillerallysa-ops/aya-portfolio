"use client"

import { Zap, Layers, Box, Gauge } from "lucide-react"

interface Tool {
  name: string
  icon: React.ComponentType<{ size: number; className?: string }>
  color: string
  bgColor: string
}

const tools: Tool[] = [
  {
    name: "Zapier",
    icon: Zap,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "Make",
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "n8n",
    icon: Box,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "GoHighLevel",
    icon: Gauge,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
]

export function ToolsMarquee() {
  const repeatedTools = [...tools, ...tools, ...tools]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-background/80 to-background py-8">
      <div className="relative">
        <div className="flex animate-marquee gap-8 w-max">
          {repeatedTools.map((tool, idx) => {
            const Icon = tool.icon
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 px-6 py-3 rounded-full ${tool.bgColor} border border-border/50 hover:border-border transition-colors whitespace-nowrap`}
              >
                <Icon size={20} className={tool.color} />
                <span className="text-sm font-medium text-muted-foreground">
                  {tool.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        :global(.animate-marquee) {
          animation: marquee 30s linear infinite;
        }

        :global(.animate-marquee:hover) {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
