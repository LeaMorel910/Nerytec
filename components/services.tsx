"use client"

import { Briefcase, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

export function Services() {
  const { ref, isVisible } = useScrollAnimation()
  const services = [
    {
      icon: Users,
      title: (
        <>
          Management/ Direction <br /> Commercial (H/F)
        </>
      ),
      features: [
        "Directeur commercial",
        "Global Account Manager",
        "Branch Manager",
        "Account Executive",
        "Business manager"
      ],
    },
    {
      icon: Users,
      title: (
        <>
          Direction Générale (H/F) <br /> &nbsp;
        </>
      ),
      features: [
        "Directeur Général",
        "Directeur des opérations",
        "Directeur Administratif et financier"
      ],
    },
    {
      icon: Users,
      title: (
        <>
          Direction Technique – <br /> opérationnelle (H/F)
        </>
      ),
      features: [
        "Directeur des engagements",
        "Directeur de projet",
        "Bid Manager",
        "Practice Manager",
        "Directeur du delivery"
      ],
    },
    {
      icon: Users,
      title: (
        <>
          Ressources Humaines (H/F)
        </>
      ),
      features: [
        "Directeur des Ressources Humaines",
        "Responsable des Ressources Humaines",
        "Chargé de recrutement",
        "Ressource manager"
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nerytec Consulting</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le partenaire incontournable des ESN et des sociétés de conseil en ingénierie. Le partenaire incontournable pour booster votre carrière.          </p>
        </div>
        {/* Grille adaptative : 1 col mobile, 2 cols tablette, 3 cols desktop */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          ref={ref}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <Card
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 h-full"
              >
                <CardHeader className="pb-4 min-h-[96px] flex flex-col justify-end">
                  <div className="w-14 h-14 bg-[#0078BE] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
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
            </div>
          ))}
        </div>
        {/* Add the button below the grid */}
        <div className="flex justify-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#0078BE] hover:bg-[#006bb0] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white font-bold text-lg"
          >
            <a href="/jobs#contact-form">Découvrir Nos Opportunités Exclusives</a>
          </Button>
        </div>
      </div>
    </section>
  )
}