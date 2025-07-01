import { Clock, Shield, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const values = [
    {
      icon: Clock,
      title: "Réactivité",
      description: "Réponse rapide et suivi personnalisé de chaque mission",
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Respect total de la confidentialité de nos clients et candidats",
    },
    {
      icon: Heart,
      title: "Proximité",
      description: "Relation de confiance et accompagnement sur le long terme",
    },
    {
      icon: Lightbulb,
      title: "Expertise",
      description: "Connaissance approfondie des métiers et du marché",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pourquoi choisir NERYTEC ?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 20 ans, NERYTEC Consulting accompagne les entreprises dans leurs recrutements de profils
              commerciaux et managériaux. Notre expertise du secteur des ESN et du conseil en ingénierie nous permet de
              comprendre vos enjeux et de vous proposer les meilleurs talents.
            </p>

            <div className="space-y-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Découvrir notre histoire
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">20+</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Années d'expérience</div>
                    <div className="text-gray-600">Dans le recrutement spécialisé</div>
                  </div>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">ESN & Conseil</span>
                    <span className="font-semibold text-blue-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Satisfaction client</span>
                    <span className="font-semibold text-blue-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[95%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
