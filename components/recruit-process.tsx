"use client"

import { MessageCircle, Search, Users, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function RecruitProcess() {
  const { ref, isVisible } = useScrollAnimation()

  const steps = [
    {
      icon: MessageCircle,
      title: "Analyse du besoin",
      description: "Nous analysons en détail votre besoin et définissons le profil recherché",
      step: "01",
    },
    {
      icon: Search,
      title: "Sourcing ciblé",
      description: "Recherche active dans notre réseau et approche directe des meilleurs profils",
      step: "02",
    },
    {
      icon: Users,
      title: "Présélection",
      description: "Entretiens approfondis et évaluation des compétences techniques et humaines",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Présentation",
      description: "Présentation des candidats présélectionnés avec rapport détaillé",
      step: "04",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre processus</h2>
          <p className="text-xl text-gray-600">Une méthode éprouvée pour vos recrutements</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-purple-600">{step.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
