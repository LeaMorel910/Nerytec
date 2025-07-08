"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "❓ Combien de temps dure votre processus ?",
      answer:
        "En moyenne, notre processus dure entre 2 à 4 semaines, de l'entretien initial à la signature du contrat.",
    },
    {
      question: "❓ Quels types de postes proposez-vous ?",
      answer:
        "Nous nous spécialisons dans les postes commerciaux, managériaux et de direction générale pour les ESN et sociétés de conseil en technologies.",
    },
    {
      question: "❓ Travaillez-vous avec des freelances ?",
      answer:
        "Principalement en CDI, mais nous avons également des missions freelance pour des profils seniors et spécialisés.",
    },
    {
      question: "❓ Quelles sont vos zones géographiques ?",
      answer:
        "France entière (IDF, Rhône-Alpes, Sud-Ouest, Sud Med, Nord) et international (Suisse, Belgique, UK, Espagne, Dubaï).",
    },
    {
      question: "❓ Comment garantissez-vous la confidentialité ?",
      answer:
        "Nous respectons strictement les règles déontologiques et ne contactons jamais votre employeur actuel sans votre accord préalable.",
    },
    {
      question: "❓ Quels sont vos critères de sélection ?",
      answer:
        "Nous recherchons des profils expérimentés dans l'écosystème ESN/SCT avec une expertise commerciale, managériale ou technique avérée.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur notre processus</p>
        </div>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
