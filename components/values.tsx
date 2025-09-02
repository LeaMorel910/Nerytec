"use client"
import { Heart, Shield, Zap, Users, Target, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ValuesItemInput { title: string; description: string }
interface ValuesItem extends ValuesItemInput { icon: any; color: string }
interface ValuesProps {
  title?: string
  description?: string
  items?: Array<ValuesItemInput>
}

export function Values({
  title = "Pourquoi choisir NERYTEC ?",
  description = "Depuis 2005, NERYTEC Consulting accompagne exclusivement les ESN et sociétés de conseil en technologies dans leurs recrutements. Notre hyperspécialisation du marché nous permet de comprendre parfaitement vos enjeux et de vous proposer les meilleurs talents.",
  items,
}: ValuesProps) {
  const { ref, isVisible } = useScrollAnimation()
  // Jeux d'icônes et couleurs par défaut
  const defaultIcons = [Heart, Shield, Target, Users, Award, Zap]
  const defaultColors = [
    "from-red-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-yellow-500 to-orange-500",
    "from-green-500 to-teal-500",
    "from-purple-500 to-indigo-500",
    "from-amber-500 to-yellow-500",
  ]

  const defaultValues: Array<ValuesItem> = [
    {
      icon: Heart,
      title: "Proximité",
      description: "Une relation de confiance basée sur l'écoute et l'accompagnement personnalisé de nos clients et candidats",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Expertise",
      description: "Hyperspécialisation sur le marché des ESN avec une connaissance très forte des professionnels du secteur et un réseau solide en IDF, Rhône-Alpes, Sud-Ouest, Sud Méditerranée, Nord-Ouest, Nord et à l'international (Suisse, Belgique, Angleterre, Espagne, Dubaï).",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Approche prédictive",
      description: "Notre spécificité unique : présenter des candidats qui correspondent à la culture, aux valeurs et au mode de fonctionnement attendu par le client, en prévision des besoins à venir",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Connaissance du marché",
      description: "Plus de 20 ans d'expérience nous permettent de connaître nos clients aussi bien comme candidats que comme clients et donneurs d'ordre.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Équilibre candidat-client",
      description: "Notre considération pour le candidat est aussi haute que celle que nous donnons à notre client.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Réponse rapide et suivi personnalisé de chaque mission de recrutement",
      color: "from-amber-500 to-yellow-500",
    },
  ]

  // Si des items viennent de Sanity (sans icon/couleur), on assigne par défaut
  const values: Array<ValuesItem> = (items ?? defaultValues).map((v, index) => {
    const withDefaults = v as Partial<ValuesItem>
    return {
      title: v.title,
      description: v.description,
      icon: withDefaults.icon ?? defaultIcons[index % defaultIcons.length],
      color: withDefaults.color ?? defaultColors[index % defaultColors.length],
    }
  })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {(() => {
                    const Icon = value.icon
                    return <Icon className="w-8 h-8 text-white" />
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
          
          .gap-8 {
            gap: 1.5rem !important; /* gap-6 */
          }
          
          .p-8 {
            padding: 1.5rem !important; /* p-6 */
          }
          

          
          .w-16.h-16 {
            width: 3.5rem !important; /* w-14 */
            height: 3.5rem !important; /* h-14 */
          }
          
          .w-8.h-8 {
            width: 1.75rem !important; /* w-7 */
            height: 1.75rem !important; /* h-7 */
          }
          
          .mb-6 {
            margin-bottom: 1rem !important; /* mb-4 */
          }
          
          .text-xl.font-bold {
            font-size: 1.125rem !important; /* text-lg */
            line-height: 1.75rem !important;
          }
          
          .mb-4 {
            margin-bottom: 0.75rem !important; /* mb-3 */
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