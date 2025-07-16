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
      answer: `Nous sommes spécialisés dans les fonctions suivantes : Avant-vente et Delivery- Sales et fonctions managériales - Postes de direction - Postes d'entrepreneurs. Nous avons accompagné avec succès des groupes et des dirigeants dans des enjeux financiers très importants. Nous sommes également en mesure de répondre à des besoins sur des fonctions de direction technique.`,
    },
    {
      question: "❓ Travaillez-vous avec des freelances ?",
      answer: `À ce jour, le marché français n'est pas demandeur de managers dirigeants sales en mode freelance, en tout cas pas à un niveau industriel. Contrairement au marché des experts techniques ou experts métier qui voit sa population freelance s'accroître.`,
    },
    {
      question: "❓ Quelles sont vos zones géographiques ?",
      answer: `France : Toutes les grandes villes\nInternational : Canada, pays européens (Belgique, Suisse, Suède, Espagne, Allemagne, Italie)\nNous avons également eu la joie de réaliser des recrutements en Colombie et aux Émirats Arabes Unis.`,
    },
    {
      question: "❓ Comment garantissez-vous la confidentialité ?",
      answer: `Nous avons signé une charte d'engagement de confidentialité avec tous nos partenaires.`,
    },
    {
      question: "❓ Quels sont vos critères de sélection ?",
      answer: `L’Exérience en ESN/SCT  Expience en milieu industriels sur des fonctions de managers ou des fonctions Sales. nos clients nous demandent  des  que les candidats soietn titulaires de  formation BAC+5 Ecole de commerce  - Ecole d’ingénieur. `,
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
              className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
