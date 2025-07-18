"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Clock, Briefcase, Users, MapPin, Shield, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  const faqs = [
    {
      question: "Combien de temps dure votre processus ?",
      icon: Clock,
      color: "text-blue-600",
      answer:
        "En moyenne, notre processus dure entre 2 à 4 semaines, de l'entretien initial à la signature du contrat.",
    },
    {
      question: "Quels types de postes proposez-vous ?",
      icon: Briefcase,
      color: "text-green-600",
      answer: `Nous sommes spécialisés dans les fonctions suivantes :\n- Avant-vente et Delivery\n- Sales et fonctions managériales\n- Postes de direction\n- Postes d'entrepreneurs\n\nNous avons accompagné avec succès des groupes et des dirigeants dans des enjeux financiers très importants. Nous sommes également en mesure de répondre à des besoins sur des fonctions de direction technique.`,
    },
    {
      question: "Travaillez-vous avec des freelances ?",
      icon: Users,
      color: "text-purple-600",
      answer: `À ce jour, le marché français n'est pas demandeur de managers dirigeants sales en mode freelance, en tout cas pas à un niveau industriel. Contrairement au marché des experts techniques ou experts métier qui voit sa population freelance s'accroître.`,
    },
    {
      question: "Quelles sont vos zones géographiques ?",
      icon: MapPin,
      color: "text-pink-600",
      answer: `France :\n- Aix-en-Provence\n- Bordeaux\n- Brest\n- Clermont-Ferrand\n- Lille\n- Lyon\n- Marseille\n- Montpellier\n- Nantes\n- Paris\n- Pau\n- Rennes\n- Rouen\n- Sophia Antipolis\n- Strasbourg\n- Toulouse\n- Cherbourg\n\nInternational :\n- Canada\n- Pays Européens : Allemagne, Belgique, Espagne, Italie, Royaume-Uni (UK), Suède, Suisse\n- Colombie\n- Émirats Arabes Unis\n- Singapour`,
    },
    {
      question: "Comment garantissez-vous la confidentialité ?",
      icon: Shield,
      color: "text-yellow-600",
      answer: `Nous avons signé une charte d'engagement de confidentialité avec tous nos partenaires.`,
    },
    {
      question: "Quels sont vos critères de sélection ?",
      icon: CheckCircle,
      color: "text-cyan-600",
      answer: `L'Expérience en ESN/SCT  - l'Expérience en milieu industriel sur des fonctions de consultants  de  managers ou des fonctions Sales. Nos clients nous demandent des que les candidats soient  de Formation  Ecole de commerce - Ecole d'ingénieur.`,
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
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
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-[transform,opacity] duration-75 ease-out hover:shadow-xl hover:bg-gray-50/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 100}ms`,
                boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
                transition: 'box-shadow 0ms, background-color 0ms, transform 75ms ease-out, opacity 75ms ease-out'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between group focus:outline-none transition-all duration-75"
                aria-expanded={openIndexes.includes(index)}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center">
                  <faq.icon className={`w-5 h-5 mr-3 transition-all duration-300 ${faq.color} ${openIndexes.includes(index) ? 'scale-110' : ''
                    }`} />
                  <span className="text-lg font-semibold text-gray-900 select-none">
                    {faq.question}
                  </span>
                </div>
                <span
                  className={`transition-all duration-300 ease-in-out ${openIndexes.includes(index) ? 'rotate-180' : ''}`}
                >
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${openIndexes.includes(index) ? faq.color : 'text-gray-400'
                    }`} />
                </span>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 ease-in-out ${openIndexes.includes(index) ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                style={{
                  transitionProperty: "max-height, opacity",
                  transitionDelay: openIndexes.includes(index) ? "50ms" : "0ms",
                }}
              >
                {openIndexes.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.question.includes('zones géographiques') ? (
                          (() => {
                            // On découpe le texte en sections France / International
                            const [fr, intl] = faq.answer.split(/\n\nInternational :/)
                            // France
                            const franceLines = fr.split(/\n/).slice(1).filter(l => l.trim().startsWith('-')).map(l => l.replace('- ', ''))
                            // International
                            const intlLines = intl
                              ? intl.split(/\n/).filter(l => l.trim().startsWith('-')).map(l => l.replace('- ', ''))
                              : []
                            // Pays Européens (ligne spéciale)
                            const europeLine = intlLines.find(l => l.includes('Pays Européens'))
                            const otherIntl = intlLines.filter(l => !l.includes('Pays Européens'))
                            return (
                              <>
                                <span className="font-medium">France :</span><br />
                                <span>{franceLines.join(', ')}</span><br /><br />
                                <span className="font-medium">International :</span><br />
                                <span>{[
                                  europeLine,
                                  ...otherIntl
                                ].filter(Boolean).join(', ')}</span>
                              </>
                            )
                          })()
                        ) : (
                          faq.answer.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i !== faq.answer.split('\n').length - 1 && <br />}
                            </span>
                          ))
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}