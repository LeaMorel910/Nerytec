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
      color: "#0078BE",
      iconBg: "bg-gradient-to-tr from-blue-500 to-cyan-400",
      bullet: "bg-blue-500",
      titleColor: "text-blue-700",
    },
    {
      icon: Clock,
      title: "Délais maîtrisés",
      description: "Engagement sur les délais de présentation des candidats",
      features: ["Première présentation sous 15 jours", "Suivi régulier", "Reporting transparent"],
      color: "#F59E42",
      iconBg: "bg-gradient-to-tr from-orange-400 to-yellow-300",
      bullet: "bg-orange-400",
      titleColor: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Suivi personnalisé",
      description: "Accompagnement dédié durant toute la mission de recrutement",
      features: ["Connaissance approfondie de votre secteur", "Suivi post-intégration", "Accompagnement continu"],
      color: "#10B981",
      iconBg: "bg-gradient-to-tr from-green-500 to-emerald-400",
      bullet: "bg-green-500",
      titleColor: "text-green-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p className="text-xl text-gray-600">Une offre complète pour vos recrutements</p>
        </div>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full flex flex-col bg-white/90 backdrop-blur">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 ${service.bullet} rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
          
          .gap-8 {
            gap: 1.5rem !important; /* gap-6 */
          }
          
          .pb-4 {
            padding-bottom: 0.75rem !important; /* pb-3 */
          }
          
          .w-16.h-16 {
            width: 3.5rem !important; /* w-14 */
            height: 3.5rem !important; /* h-14 */
          }
          
          .w-8.h-8 {
            width: 1.75rem !important; /* w-7 */
            height: 1.75rem !important; /* h-7 */
          }
          
          .mb-4 {
            margin-bottom: 0.75rem !important; /* mb-3 */
          }
          
          .text-xl.font-bold {
            font-size: 1.125rem !important; /* text-lg */
            line-height: 1.75rem !important;
          }
          
          .text-gray-600.mb-6 {
            font-size: 0.875rem !important; /* text-sm */
            line-height: 1.25rem !important;
            margin-bottom: 1rem !important; /* mb-4 */
          }
          
          .space-y-2 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 0.5rem !important;
          }
          
          .text-sm.text-gray-700 {
            font-size: 0.75rem !important; /* text-xs */
            line-height: 1rem !important;
          }
          
          .mr-3 {
            margin-right: 0.5rem !important; /* mr-2 */
          }
        }
      `}</style>
    </section>
  )
}