"use client"
import { Search, Briefcase, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export function JobsHero() {
  const { ref, isVisible } = useScrollAnimation()

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
            <span className="font-medium text-sm md:text-base">Nos opportunités exclusives</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Briefcase className="w-5 h-5 text-[#0078BE] flex-shrink-0" />
            <span className="font-medium text-sm md:text-base text-center md:text-left">
              Opportunités d'actionariat et de prise de participation
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Smile className="w-5 h-5 text-[#0078BE] flex-shrink-0" />
            <span className="font-medium text-sm md:text-base">
              Accompagnement individuel personnalisé
            </span>
          </div>
        </div>

        <Button
          asChild
          className="bg-[#0078BE] hover:bg-[#006bb0] text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse-glow backdrop-blur-sm"
        >
          <Link href="/contact">
            Nous écrire en toute discrétion
          </Link>
        </Button>
      </div>
    </section>
  )
}