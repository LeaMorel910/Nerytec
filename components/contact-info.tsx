"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation()

  const contactDetails = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Paris, France", "Île-de-France"],
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "Du lundi au vendredi"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@nerytec.com", "Réponse sous 24h"],
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["9h00 - 18h00", "Lundi au Vendredi"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-500">
      <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nos coordonnées</h2>

          <div className="space-y-8">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-blue-100">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Pourquoi nous contacter ?</h3>
            <ul className="space-y-2 text-blue-100">
              <li>• Conseil personnalisé pour votre recherche d'emploi</li>
              <li>• Accompagnement dans vos projets de recrutement</li>
              <li>• Expertise du marché ESN et conseil en ingénierie</li>
              <li>• Réseau de partenaires et opportunités exclusives</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
