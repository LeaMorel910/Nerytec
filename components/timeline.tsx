"use client"

import { Calendar, Award, Users, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Timeline() {
  const { ref, isVisible } = useScrollAnimation()

  const events = [
    {
      year: "2005",
      title: "Création de NERYTEC",
      description: "Frédéric ALLOUCH, diplômé d'une école de commerce et fort d'un premier parcours professionnel dans le business développement, crée NERYTEC Consulting. Passionné par l'approche humaine du recrutement et ayant acquis une connaissance du fonctionnement des métiers du service et des sociétés de conseil, il développe une compréhension des différentes cultures des acteurs du marché.",
      icon: Calendar,
    },
    {
      year: "2012",
      title: "Spécialisation ESN/SCT",
      description: "Développement de l'expertise exclusive dans le secteur des ESN et sociétés de conseil en technologies, avec un focus sur les profils à connotation Sales, Manager et Dirigeants.",
      icon: Target,
    },
    {
      year: "2018",
      title: "Approche prédictive",
      description: "Mise en place de notre méthodologie prédictive unique : présentation de candidats en adéquation avec la culture et les valeurs du client, en anticipation de leurs besoins futurs. Anticipation des attentes des candidats en fonction de leur parcours.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Leadership reconnu",
      description: "Référence incontournable dans l'écosystème ESN/SCT - partenariat avec des fonds d'investissement et family offices.",
      icon: Users,
    },
  ]

  return (
    <section id="notre-parcours" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre parcours</h2>
          <p className="text-xl text-gray-600">Plus de 20 ans d'expertise à votre service</p>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0078BE]" />

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-[#0078BE] rounded-full flex items-center justify-center z-10">
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
