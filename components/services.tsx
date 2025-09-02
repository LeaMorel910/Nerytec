"use client"

import { Briefcase, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Service {
  title: string
  features: string[]
}

interface ServicesProps {
  title?: string
  subtitle?: string
  services?: Service[]
  buttonText?: string
  buttonLink?: string
}

export function Services({
  title = "Nerytec Consulting",
  subtitle = "Le partenaire incontournable des ESN et des sociétés de conseil en ingénierie. Le partenaire incontournable pour booster votre carrière.",
  services = [
    {
      title: "Management/ Direction Commercial (H/F)",
      features: [
        "Directeur commercial",
        "Global Account Manager",
        "Branch Manager",
        "Account Executive",
        "Business manager"
      ],
    },
    {
      title: "Direction Générale (H/F)",
      features: [
        "Directeur Général",
        "Directeur des opérations",
        "Directeur Administratif et financier"
      ],
    },
    {
      title: "Direction Technique – opérationnelle (H/F)",
      features: [
        "Directeur des engagements",
        "Directeur de projet",
        "Bid Manager",
        "Practice Manager",
        "Directeur du delivery"
      ],
    },
    {
      title: "Ressources Humaines (H/F)",
      features: [
        "Directeur des Ressources Humaines",
        "Responsable des Ressources Humaines",
        "Chargé de recrutement",
        "Ressource manager"
      ],
    },
  ],
  buttonText = "Découvrir Nos Opportunités Exclusives",
  buttonLink = "/jobs#contact-form"
}: ServicesProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        {/* Grille responsive : 1 col mobile, 2 cols tablette, 4 cols desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0078BE] rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Button responsive */}
        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 px-4">
          <Link href={buttonLink || "/jobs#contact-form"}>
            <Button
              size="lg"
              className="bg-[#0078BE] hover:bg-[#006bb0] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base max-w-sm sm:max-w-none"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}