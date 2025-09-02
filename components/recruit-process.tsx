"use client"
import { MessageCircle, Search, Users, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

type ProcessStep = { step: string; title: string; description: string }
type RecruitProcessProps = {
  title?: string
  subtitle?: string
  steps?: ProcessStep[]
}

export function RecruitProcess({ title, subtitle, steps: stepsProp }: RecruitProcessProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [current, setCurrent] = useState(0)

  const defaultSteps = [
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

  const steps = stepsProp && stepsProp.length > 0
    ? stepsProp.map((s, idx) => ({
      icon: [MessageCircle, Search, Users, CheckCircle][idx % 4],
      title: s.title,
      description: s.description,
      step: s.step,
    }))
    : defaultSteps

  // Fonctions pour le carrousel mobile
  const prevStep = () => setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  const nextStep = () => setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1))

  // Correction pour l'icône dynamique
  const Icon = steps[current].icon

  return (
    <section className="py-6 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">{title ?? "Notre processus"}</h2>
          <p className="text-base md:text-xl text-gray-600">{subtitle ?? "Une méthode éprouvée pour vos recrutements"}</p>
        </div>

        {/* Carrousel mobile */}
        <div className="md:hidden flex flex-col items-center" ref={ref}>
          <div className="relative w-full max-w-xs mx-auto">
            <div
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-500 border border-gray-100"
            >
              {/* Step number badge stylé */}
              <div className="absolute -top-3 -right-3 bg-[#0078BE] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md">
                {steps[current].step}
              </div>
              <div className="w-12 h-12 bg-[#0078BE] rounded-full flex items-center justify-center mb-4 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{steps[current].title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{steps[current].description}</p>
            </div>
            {/* Boutons carrousel */}
            <div className="flex justify-between items-center mt-4">
              <button
                aria-label="Précédent"
                onClick={prevStep}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0078BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div className="flex gap-1">
                {steps.map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-[#0078BE]' : 'bg-blue-200'}`}></span>
                ))}
              </div>
              <button
                aria-label="Suivant"
                onClick={nextStep}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0078BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Grille desktop/tablette */}
        <div ref={ref} className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#0078BE] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-[#0078BE]">{step.step}</span>
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