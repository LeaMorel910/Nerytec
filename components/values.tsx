"use client"

import { Heart, Shield, Zap, Users, Target, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Values() {
  const { ref, isVisible } = useScrollAnimation()

  const values = [
    {
      icon: Heart,
      title: "Proximité",
      description: "Une relation de confiance basée sur l'écoute et l'accompagnement personnalisé",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Respect total de la confidentialité de nos clients et candidats",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Réponse rapide et suivi rigoureux de chaque mission de recrutement",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Connaissance approfondie des métiers commerciaux et managériaux",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Précision",
      description: "Ciblage précis des profils en adéquation avec vos besoins",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Recherche constante de l'excellence dans nos prestations",
      color: "from-amber-500 to-yellow-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Les principes qui guident notre approche du recrutement
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
