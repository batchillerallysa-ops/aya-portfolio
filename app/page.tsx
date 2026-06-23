import { GlassmorphicNav } from "@/components/glassmorphic-nav"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Work } from "@/components/work"
import { ToolsMarquee } from "@/components/tools-marquee"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <GlassmorphicNav />
      <main>
        <Hero />
        <Services />
        <ToolsMarquee />
        <Experience />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
