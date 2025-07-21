"use client"

import { Users, Target, Award, ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useIsMobile } from "@/hooks/use-mobile"
import React from "react"

export function AboutHero() {
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
          Découvrir{" "}
          <span className="bg-[#0078BE] bg-clip-text text-transparent">
            NERYTEC
          </span>
        </h1>

        <p
          className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Plus de 20 ans d'expertise dans le recrutement de talents commerciaux et managériaux
        </p>



        <div
          className={`flex flex-wrap justify-center gap-8 text-gray-500 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Expertise humaine</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Approche personnalisée</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Résultats prouvés</span>
          </div>
        </div>
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
