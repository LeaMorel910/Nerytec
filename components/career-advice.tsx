"use client"

import { BookOpen, Users, TrendingUp, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export function CareerAdvice() {
  const { ref, isVisible } = useScrollAnimation()
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const offres = [
    {
      title: "Business Manager",
      description: "Pilotez le développement commercial, gérez des portefeuilles clients stratégiques et accompagnez la croissance de votre équipe dans un environnement stimulant.",
    },
    {
      title: "KAM",
      description: "Devenez Key Account Manager et prenez en charge la relation avec nos clients majeurs, développez des solutions sur-mesure et assurez leur satisfaction à long terme.",
    },
    {
      title: "DIRECTEUR général",
      description: "Prenez la direction générale d'une structure ambitieuse, définissez la stratégie globale et pilotez la performance de l'entreprise.",
    },
    {
      title: "Directeur de BU",
      description: "Dirigez une Business Unit, développez l'activité, managez les équipes et portez l'innovation au cœur de votre périmètre.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#111827" }}>Nos Offres Exclusives</h2>
          <p className="text-xl mb-0" style={{ color: "#4b5563" }}>Découvrez des opportunités uniques pour booster votre carrière</p>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {offres.map((offre, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-2xl shadow-md border border-black bg-white transition-all duration-300 flex flex-col items-stretch ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex flex-col flex-1 items-center justify-center py-6 px-3 sm:px-4 text-center">
                <h3 className="text-base md:text-lg font-bold text-[#0078BE] mb-1 leading-tight">{offre.title}</h3>
                <span className="text-[#0078BE]/60 text-xs">Cliquez pour en savoir plus</span>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden px-3 pb-4"
                  >
                    <div className="bg-[#0078BE]/90 rounded-xl mt-2 p-3 text-white text-sm md:text-base shadow">
                      <div className="text-center leading-relaxed whitespace-pre-line break-words">{offre.description}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
