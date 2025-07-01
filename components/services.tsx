import { Briefcase, Users, Target, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Recrutement de Managers",
      description: "Identification et placement de profils managériaux expérimentés",
      features: ["Directeurs commerciaux", "Managers d'équipes", "Responsables grands comptes", "Chefs de secteur"],
    },
    {
      icon: Target,
      title: "Dirigeants Commerciaux",
      description: "Recrutement de profils de direction commerciale de haut niveau",
      features: ["Directeurs généraux", "VP Sales", "Directeurs de filiale", "Country managers"],
    },
    {
      icon: Users,
      title: "Spécialisation ESN",
      description: "Expertise dédiée aux Entreprises de Services Numériques",
      features: ["Connaissance du secteur", "Réseau spécialisé", "Approche consultative", "Suivi personnalisé"],
    },
    {
      icon: Zap,
      title: "Conseil en Ingénierie",
      description: "Recrutement pour les cabinets de conseil technique",
      features: ["Profils techniques", "Business developers", "Consultants seniors", "Directeurs de BU"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos domaines d'expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spécialisés dans le recrutement de profils commerciaux et managériaux pour les ESN et cabinets de conseil en
            ingénierie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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
