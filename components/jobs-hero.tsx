"use client"

import { Search, Briefcase, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function JobsHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Vous cherchez
          <span className="block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-6xl font-bold text-center pb-2 mb-8">
            un nouveau job ?
          </span>
        </h1>

        <p
          className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Découvrez nos opportunités exclusives et bénéficiez d'un accompagnement personnalisé
        </p>

        <div
          className={`flex flex-wrap justify-center gap-8 text-gray-500 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-green-500" />
            <span className="font-medium">Offres variées</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-green-500" />
            <span className="font-medium">Postes qualifiés</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smile className="w-5 h-5 text-green-500" />
            <span className="font-medium">Accompagnement personnalisé</span>
          </div>
        </div>
      </div>
    </section>
  )
}
