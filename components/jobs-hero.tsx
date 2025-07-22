"use client"
import { Search, Briefcase, Smile, ChevronDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"

export function JobsHero() {
  const { ref, isVisible } = useScrollAnimation()
  const isMobile = useIsMobile()

  const scrollToNextSection = () => {
    const startPosition = window.scrollY
    const targetDistance = 700
    const duration = 800 // 800ms d'animation
    const startTime = performance.now()
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      const easedProgress = easeInOutQuad(progress)
      const currentPosition = startPosition + (targetDistance * easedProgress)
      window.scrollTo(0, currentPosition)
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    requestAnimationFrame(animateScroll)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-50">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="block mb-2">Vous cherchez</span>
          <span className="block text-[#0078BE] text-4xl md:text-6xl font-bold pb-2">
            un nouveau job ?
          </span>
        </h1>

        <div
          className={`flex flex-col md:flex-row md:flex-wrap justify-center gap-6 md:gap-8 text-gray-500 mb-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Search className="w-5 h-5 text-[#0078BE] flex-shrink-0" />
            <span className="font-medium text-sm md:text-base">Notre processus</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Briefcase className="w-5 h-5 text-[#0078BE] flex-shrink-0" />
            <span className="font-medium text-sm md:text-base text-center md:text-left">
              Nos opportunités exclusives
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Smile className="w-5 h-5 text-[#0078BE] flex-shrink-0" />
            <span className="font-medium text-sm md:text-base">
              Accompagnement individuel personnalisé
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <TrendingUp className="w-5 h-5 text-[#0078BE] flex-shrink-0" />
            <span className="font-medium text-sm md:text-base">
              Opportunités d'actionnariat et de prise de participation
            </span>
          </div>
        </div>

        <Button
          asChild
          className={`bg-[#0078BE] text-white px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300 animate-pulse-glow backdrop-blur-sm ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} hover:bg-[#006bb0] hover:shadow-[0_0_32px_8px_rgba(0,120,190,0.35)] hover:scale-105 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0078BE]`}
          style={{ transition: 'background 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <Link href="/contact">
            Nous écrire en toute discrétion
          </Link>
        </Button>
      </div>
      {/* Indicateur de scroll animé - Cliquable */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-24 lg:bottom-28 z-30 cursor-pointer group"
        onClick={scrollToNextSection}
      >
        <ChevronDown
          className={`w-6 h-6 md:w-8 md:h-8 text-[#0078BE] animate-bounce transition-all duration-1000 delay-[800ms] group-hover:scale-110 group-hover:opacity-90 group-hover:translate-y-1 ${isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        />
      </div>
    </section>
  )
}