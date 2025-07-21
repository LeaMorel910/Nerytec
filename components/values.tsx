"use client"

import { Heart, Shield, Zap, Users, Target, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Values() {
  const { ref, isVisible } = useScrollAnimation()

  const values = [
    {
      icon: Heart,
      title: "Proximité",
      description: "Une relation de confiance basée sur l'écoute et l'accompagnement personnalisé de nos clients et candidats",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Expertise",
      description: "Hyperspécialisation sur le marché des ESN avec une connaissance très forte des professionnels du secteur et un réseau solide en IDF, Rhône-Alpes, Sud-Ouest, Sud Méditerranée, Nord-Ouest, Nord et à l'international (Suisse, Belgique, Angleterre, Espagne, Dubaï).",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Approche prédictive",
      description: "Notre spécificité unique : présenter des candidats qui correspondent à la culture, aux valeurs et au mode de fonctionnement attendu par le client, en prévision des besoins à venir",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Connaissance du marché",
      description: "Plus de 20 ans d'expérience nous permettent de connaître nos clients aussi bien comme candidats que comme clients et donneurs d'ordre.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Équilibre candidat-client",
      description: "Notre considération pour le candidat est aussi haute que celle que nous donnons à notre client.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Réponse rapide et suivi personnalisé de chaque mission de recrutement",
      color: "from-amber-500 to-yellow-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir NERYTEC ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depuis 2005, NERYTEC Consulting accompagne exclusivement les ESN et sociétés de conseil en technologies dans leurs recrutements. Notre hyperspécialisation du marché nous permet de comprendre parfaitement vos enjeux et de vous proposer les meilleurs talents.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
