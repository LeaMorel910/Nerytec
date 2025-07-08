import { TrendingUp, Users, Building, Award } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Placements réussis",
      description: "Candidats placés avec succès",
    },
    {
      icon: Building,
      value: "100+",
      label: "Entreprises partenaires",
      description: "ESN et cabinets de conseil",
    },
    {
      icon: Users,
      value: "20+",
      label: "Années d'expérience",
      description: "Dans le recrutement spécialisé",
    },
    {
      icon: Award,
      value: "95%",
      label: "Taux de satisfaction",
      description: "Clients et candidats satisfaits",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos résultats parlent d'eux-mêmes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#0078BE] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
