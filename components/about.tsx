"use client"

import { Clock, Shield, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useRef, useState } from "react"

export function About() {
  const { ref, isVisible } = useScrollAnimation()
  const values = [
    {
      icon: Clock,
      title: "Réactivité",
      description: "Réponse rapide et suivi personnalisé de chaque mission",
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Respect total de la confidentialité de nos clients et candidats",
    },
    {
      icon: Heart,
      title: "Proximité",
      description: "Relation de confiance et accompagnement sur le long terme",
    },
    {
      icon: Lightbulb,
      title: "Expertise",
      description: "Connaissance approfondie des métiers et du marché",
    },
  ]

  // --- 3D Tilt pour la carte expérience ---
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1, transition: "none" })
  const [isMouseOver, setIsMouseOver] = useState(false)

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
    const card = cardRef.current
    if (!card) return
    // setIsMouseOver(true) // déjà fait dans onMouseEnter
    const rect = card.getBoundingClientRect()
    // Ajoute une zone de tolérance de 30px autour
    const tolerance = 30
    const x = e.clientX - rect.left + tolerance
    const y = e.clientY - rect.top + tolerance
    const width = rect.width + 2 * tolerance
    const height = rect.height + 2 * tolerance
    let percentX = (x / width) * 2 - 1 // -1 (gauche) à 1 (droite)
    let percentY = (y / height) * 2 - 1 // -1 (haut) à 1 (bas)
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
    <section id="pourquoi-nerytec" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pourquoi choisir NERYTEC ?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 20 ans, NERYTEC Consulting accompagne les entreprises dans leurs recrutements de profils
              commerciaux et managériaux. Notre expertise du secteur des ESN et du conseil en ingénierie nous permet de
              comprendre vos enjeux et de vous proposer les meilleurs talents.
            </p>

            <div className="space-y-6 mb-8" ref={ref}>
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{
                    transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                    transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
                  }}
                >
                  <div
                    className="flex items-start space-x-4 bg-white rounded-lg transition-transform transition-shadow transition-colors duration-300 group hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-[#0078BE] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#006bb0]">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-[#0078BE] hover:bg-[#006bb0] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Découvrir notre histoire
              </Button>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div
              ref={cardRef}
              className="bg-white rounded-3xl p-8 shadow-2xl group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{
                transform: isMouseOver
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
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#0078BE] rounded-2xl flex items-center justify-center transition-colors transition-transform duration-300 group-hover:bg-[#006bb0] group-hover:scale-105">
                    <span className="text-2xl font-bold text-white">20+</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Années d'expérience</div>
                    <div className="text-gray-600">Dans le recrutement spécialisé</div>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">ESN & Conseil</span>
                    <span className="font-semibold text-blue-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#0078BE] h-2 rounded-full w-full transition-all duration-700" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Satisfaction client</span>
                    <span className="font-semibold text-blue-600">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#0078BE] h-2 rounded-full w-[95%] transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0078BE] rounded-full opacity-20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0078BE] rounded-full opacity-20 blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
