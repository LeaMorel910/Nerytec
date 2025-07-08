import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { Timeline } from "@/components/timeline"
import { Values } from "@/components/values"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <Timeline />
      <Values />

      <Footer />
    </div>
  )
}


