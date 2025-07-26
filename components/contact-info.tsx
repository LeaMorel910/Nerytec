"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation()

  const contactDetails = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["34 boulevard des italiens 75009"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["recrutement@nerytec.com", "Réponse sous 24h"],
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["8h00 - 20h00", "Lundi au Vendredi"],
    },
  ]

  return (
    <section className="py-20 bg-[#0078BE]">
      <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nos coordonnées</h2>
          <div className="space-y-8">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  {item.details.map((detail, detailIndex) => (
                    item.title === "Adresse" && detailIndex === 0 ? (
                      <p key={detailIndex} className="text-blue-100">
                        <a
                          href="https://maps.app.goo.gl/Y7utm8igG9hB5Jf67" // Remplacer par le lien court réel
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-200 transition-colors"
                        >
                          {detail}
                        </a>
                      </p>
                    ) : item.title === "Email" && detailIndex === 0 ? (
                      <p key={detailIndex} className="text-blue-100">
                        <a
                          href={`mailto:${detail}`}
                          className="underline hover:text-blue-200 transition-colors"
                        >
                          {detail}
                        </a>
                      </p>
                    ) : (
                      <p key={detailIndex} className="text-blue-100">
                        {detail}
                      </p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Adaptations responsive pour mobile uniquement */
        @media (max-width: 639px) {
          .py-20 {
            padding-top: 3rem !important; /* py-12 */
            padding-bottom: 3rem !important;
          }
          
          .text-3xl {
            font-size: 1.5rem !important; /* text-2xl */
            line-height: 2rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-8 {
            margin-bottom: 1.5rem !important; /* mb-6 */
          }
          
          .space-y-8 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 1.5rem !important; /* space-y-6 */
          }
          
          .space-x-4 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.75rem !important; /* space-x-3 */
          }
          
          .w-12.h-12 {
            width: 2.5rem !important; /* w-10 */
            height: 2.5rem !important; /* h-10 */
          }
          
          .w-6.h-6 {
            width: 1.25rem !important; /* w-5 */
            height: 1.25rem !important; /* h-5 */
          }
          
          .text-lg {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
          }
          
          .mb-1 {
            margin-bottom: 0.25rem !important;
          }
          
          .text-blue-100 {
            font-size: 0.875rem !important; /* text-sm */
            line-height: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  )
}