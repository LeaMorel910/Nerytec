"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Clock, Briefcase, Users, MapPin, Shield, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type FaqItem = { question: string; answer: string }
type FAQSectionProps = {
  title?: string
  subtitle?: string
  faqs?: FaqItem[]
}

export function FAQSection({ title, subtitle, faqs: faqsProp }: FAQSectionProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  const faqs = faqsProp ?? [
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title ?? 'Questions Fréquentes'}</h2>
          <p className="text-xl text-gray-600">{subtitle ?? 'Tout ce que vous devez savoir sur notre processus'}</p>
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
                  {(() => {
                    const Icon = [Clock, Briefcase, Users, MapPin, Shield, CheckCircle][index % 6]
                    const color = ["text-blue-600", "text-green-600", "text-purple-600", "text-pink-600", "text-yellow-600", "text-cyan-600"][index % 6]
                    return <Icon className={`w-5 h-5 mr-3 transition-all duration-300 ${color} ${openIndexes.includes(index) ? 'scale-110' : ''}`} />
                  })()}
                  <span className="text-lg font-semibold text-gray-900 select-none">
                    {faq.question}
                  </span>
                </div>
                <span
                  className={`transition-all duration-300 ease-in-out ${openIndexes.includes(index) ? 'rotate-180' : ''}`}
                >
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${openIndexes.includes(index) ? 'text-blue-600' : 'text-gray-400'}`} />
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
                            // Normalisation des retours chariot et parsing robuste pour le contenu venant de Sanity
                            const normalized = faq.answer.replace(/\r\n/g, '\n')
                            // Découpage en sections, tolère espaces et casse
                            const parts = normalized.split(/\n\n?\s*International\s*:/i)
                            const franceSection = parts[0] || ''
                            const internationalSection = parts[1] || ''

                            // Nettoie un préfixe éventuel "France :"
                            const franceBody = franceSection.replace(/^[\s\S]*?France\s*:\s*/i, '')

                            // Utilise une regex qui supporte '-', '–', '•' comme puces, et espaces variables
                            const stripBullet = (line: string) => line.replace(/^\s*[-–•]\s?/, '').trim()

                            const franceLines = franceBody
                              .split(/\n/)
                              .map(stripBullet)
                              .filter(Boolean)

                            const intlLinesRaw = internationalSection
                              .split(/\n/)
                              .map(stripBullet)
                              .filter(Boolean)

                            // Lignes spéciale Pays Européens (peut être sur la même ligne que les pays)
                            const europeIndex = intlLinesRaw.findIndex(l => /Pays\s+Européens/i.test(l))
                            const europeLine = europeIndex >= 0 ? intlLinesRaw[europeIndex] : undefined
                            const otherIntl = intlLinesRaw.filter((_, i) => i !== europeIndex)

                            // Si parsing vide (contenu inattendu), fallback affichage brut
                            const hasAny = franceLines.length > 0 || intlLinesRaw.length > 0
                            if (!hasAny) {
                              return (
                                <>
                                  {normalized.split('\n').map((line, i) => (
                                    <span key={i}>
                                      {line}
                                      {i !== normalized.split('\n').length - 1 && <br />}
                                    </span>
                                  ))}
                                </>
                              )
                            }

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

      <style jsx>{`
        /* Adaptations responsive pour mobile uniquement */
        @media (max-width: 639px) {
          .py-20 {
            padding-top: 3rem !important; /* py-12 */
            padding-bottom: 3rem !important;
          }
          
          .mb-16 {
            margin-bottom: 3rem !important; /* mb-12 */
          }
          
          .text-3xl {
            font-size: 1.5rem !important; /* text-2xl */
            line-height: 2rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .text-xl {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .space-y-4 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 0.75rem !important; /* space-y-3 */
          }
          
          .px-6.py-4 {
            padding-left: 1rem !important; /* px-4 */
            padding-right: 1rem !important;
            padding-top: 0.75rem !important; /* py-3 */
            padding-bottom: 0.75rem !important;
          }
          
          .w-5.h-5 {
            width: 1rem !important; /* w-4 */
            height: 1rem !important; /* h-4 */
          }
          
          .mr-3 {
            margin-right: 0.5rem !important; /* mr-2 */
          }
          
          .text-lg {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
          }
          
          .px-6.pb-4 {
            padding-left: 1rem !important; /* px-4 */
            padding-right: 1rem !important;
            padding-bottom: 0.75rem !important; /* pb-3 */
          }
          
          .text-gray-600.leading-relaxed {
            font-size: 0.875rem !important; /* text-sm */
            line-height: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  )
}