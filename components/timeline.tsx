"use client"

import { Calendar, Award, Users, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Timeline() {
  const { ref, isVisible } = useScrollAnimation()

  const events = [
    {
      year: "2014",
      title: "Création de NERYTEC",
      description: "Lancement du cabinet avec une vision claire : spécialisation dans le recrutement commercial",
      icon: Calendar,
    },
    {
      year: "2017",
      title: "Expansion ESN",
      description: "Développement de l'expertise dans le secteur des ESN et conseil en ingénierie",
      icon: Target,
    },
    {
      year: "2020",
      title: "500+ Placements",
      description: "Franchissement du cap des 500 placements réussis avec un taux de satisfaction de 95%",
      icon: Award,
    },
    {
      year: "2024",
      title: "Leadership reconnu",
      description: "Référence incontournable pour le recrutement de managers et dirigeants commerciaux",
      icon: Users,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre parcours</h2>
          <p className="text-xl text-gray-600">10 ans d'évolution et de croissance</p>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10">
                <event.icon className="w-8 h-8 text-white" />
              </div>

              <div className="ml-8 bg-white rounded-lg shadow-lg p-6 flex-1">
                <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
