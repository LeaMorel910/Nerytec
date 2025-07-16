"use client"

import { Target, Clock, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function RecruitServices() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      icon: Target,
      title: "Recrutement sur mesure",
      description: "Approche personnalisée selon vos besoins spécifiques",
      features: ["Analyse détaillée du poste", "Profil candidat précis", "Sourcing ciblé"],
    },
    {
      icon: Clock,
      title: "Délais maîtrisés",
      description: "Engagement sur les délais de présentation des candidats",
      features: ["Première présentation sous 15 jours", "Suivi régulier", "Reporting transparent"],
    },
    {
      icon: Shield,
      title: "Suivi personnalisé",
      description: "Accompagnement dédié durant toute la mission de recrutement",
      features: ["Connaissance approfondie de votre secteur", "Suivi post-intégration", "Accompagnement continu"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p className="text-xl text-gray-600">Une offre complète pour vos recrutements</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#0078BE] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#0078BE] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
