import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AnimatedSection delay={200}>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Stats />
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={600}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection delay={800}>
        <CTA />
      </AnimatedSection>
      <Footer />
    </div>
  )
}
