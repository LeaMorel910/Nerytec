import { Briefcase, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Management Commercial (H/F)",
      description: "Identification et sélection  de profils Sales managers  pertinents",
      features: [
        "Directeur commercial",
        "Global Account Manager",
        "Branch Manager",
        "Account Executive",
        "Business manager"
      ],
    },
    {
      icon: Target,
      title: "Direction Générale (H/F)",
      description: "Recrutement de profils de direction de haut niveau",
      features: [
        "Directeur Général",
        "Directeur des opérations",
        "Directeur des Ressources Humaines",
        "Directeur Administratif et financier"
      ],
    },
    {
      icon: Users,
      title: "Spécialisation ESN & Conseil (H/F)",
      description: "Expertise dédiée aux Entreprises de Services Numériques- societes de conseil en ingenierie",
      features: [
        "Directeur des engagements",
        "Directeur de projet",
        "Bid Manager",
        "Practice Manager",
        "Directeur du delivery"
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nerytec Consulting</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le partenaire incontournable des ESN et des sociétés de conseil en ingénierie, ainsi que le partenaire incontournable pour booster votre carrière.          </p>
        </div>
        {/* Grille adaptative : 1 col mobile, 2 cols tablette, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-[#0078BE] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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