"use client"

import { Clock, Shield, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useRef, useState } from "react"

interface AboutValue {
  title: string
  description: string
}

interface AboutExperience {
  years?: string
  description?: string
  esnPercentage?: string
  satisfactionPercentage?: string
}

interface AboutProps {
  title?: string
  description?: string
  values?: AboutValue[]
  buttonText?: string
  buttonLink?: string
  experience?: AboutExperience
}

function iconForIndex(index: number) {
  switch (index) {
    case 0:
      return Clock
    case 1:
      return Shield
    case 2:
      return Heart
    default:
      return Lightbulb
  }
}

export function About({
  title = "Pourquoi choisir NERYTEC ?",
  description = "Depuis plus de 20 ans, Notre expertise du secteur des ESN et du conseil en ingénierie nous permet d'anticiper les enjeux de nos clients et les enjeux de nos talents.",
  values = [
    {
      title: "Réactivité",
      description: "Réponse rapide et suivi personnalisé de chaque mission",
    },
    {
      title: "Confidentialité",
      description: "Respect total de la confidentialité de nos clients et candidats",
    },
    {
      title: "Proximité",
      description: "Relation de confiance et accompagnement sur le long terme",
    },
    {
      title: "Expertise",
      description: "Connaissance approfondie des métiers et du marché",
    },
  ],
  buttonText = "Découvrir notre histoire",
  buttonLink = "/about",
  experience = {
    years: "20+",
    description: "Dans le recrutement spécialisé",
    esnPercentage: "100%",
    satisfactionPercentage: "96%"
  }
}: AboutProps) {
  const { ref, isVisible } = useScrollAnimation()

  // --- 3D Tilt pour la carte expérience (désactivé sur mobile) ---
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1, transition: "none" })
  const [isMouseOver, setIsMouseOver] = useState(false)

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // Désactiver l'effet tilt sur mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return

    setIsMouseOver(true)
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const tolerance = 30
    const x = e.clientX - rect.left + tolerance
    const y = e.clientY - rect.top + tolerance
    const width = rect.width + 2 * tolerance
    const height = rect.height + 2 * tolerance
    let percentX = (x / width) * 2 - 1
    let percentY = (y / height) * 2 - 1
    percentX = Math.max(-1, Math.min(1, percentX))
    percentY = Math.max(-1, Math.min(1, percentY))
    const maxTilt = 5
    const rotateY = percentX * maxTilt
    const rotateX = -percentY * maxTilt
    setTilt({ x: rotateX, y: rotateY, scale: 1.018, transition: "transform 0.12s cubic-bezier(0.4,0,0.2,1), box-shadow 0.12s cubic-bezier(0.4,0,0.2,1)" })
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // Désactiver l'effet tilt sur mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return

    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const tolerance = 30
    const x = e.clientX - rect.left + tolerance
    const y = e.clientY - rect.top + tolerance
    const width = rect.width + 2 * tolerance
    const height = rect.height + 2 * tolerance
    let percentX = (x / width) * 2 - 1
    let percentY = (y / height) * 2 - 1
    percentX = Math.max(-1, Math.min(1, percentX))
    percentY = Math.max(-1, Math.min(1, percentY))
    const maxTilt = 5
    const rotateY = percentX * maxTilt
    const rotateX = -percentY * maxTilt
    setTilt({ x: rotateX, y: rotateY, scale: 1.008, transition: "none" })
  }

  function handleMouseLeave() {
    setIsMouseOver(false)
    setTilt({ x: 0, y: 0, scale: 1, transition: "transform 0.12s cubic-bezier(0.4,0,0.2,1), box-shadow 0.12s cubic-bezier(0.4,0,0.2,1)" })
  }

  return (
    <section id="pourquoi-nerytec" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8" ref={ref}>
              {values.map((value, index) => {
                const Icon = iconForIndex(index)
                return (
                  <div
                    key={index}
                    className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{
                      transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                      transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                    }}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 bg-white rounded-lg p-2 sm:p-0 transition-transform transition-shadow transition-colors duration-300 group hover:scale-105 hover:shadow-lg">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0078BE] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#006bb0]">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link href={buttonLink || "/about"}>
              <Button
                size="lg"
                className="bg-[#0078BE] hover:bg-[#006bb0] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base"
              >
                {buttonText}
              </Button>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div
              ref={cardRef}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{
                transform: typeof window !== 'undefined' && isMouseOver && window.innerWidth >= 768
                  ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`
                  : 'none',
                transition: tilt.transition,
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0078BE] rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors transition-transform duration-300 group-hover:bg-[#006bb0] group-hover:scale-105">
                    <span className="text-lg sm:text-2xl font-bold text-white">{experience.years}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
                      Années d'expérience
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {experience.description}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-gray-700">ESN & Conseil en ingénierie</span>
                    <span className="font-semibold text-blue-600 text-sm sm:text-base">{experience.esnPercentage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#0078BE] h-2 rounded-full w-full transition-all duration-700" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-gray-700">Satisfaction client</span>
                    <span className="font-semibold text-blue-600 text-sm sm:text-base">{experience.satisfactionPercentage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#0078BE] h-2 rounded-full w-[95%] transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements - réduits sur mobile */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#0078BE] rounded-full opacity-20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-[#0078BE] rounded-full opacity-20 blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}