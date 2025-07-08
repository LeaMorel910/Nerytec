"use client"

import { Users, Target, Building, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function JobCategories() {
  const { ref, isVisible } = useScrollAnimation()

  const categories = [
    {
      icon: Users,
      title: "Directeur commercial",
      description: "Responsables du développement commercial et de la stratégie de vente.",
      tags: ["CDI", "Cadre", "Paris"],
    },
    {
      icon: Target,
      title: "Global Account Manager",
      description: "Gestion des comptes stratégiques à l'international.",
      tags: ["CDI", "International", "Expérience"],
    },
    {
      icon: Building,
      title: "Branch Manager",
      description: "Direction d'agences et management d'équipes locales.",
      tags: ["CDI", "Management", "France"],
    },
    {
      icon: TrendingUp,
      title: "Account Executive",
      description: "Développement et gestion de portefeuilles clients.",
      tags: ["CDI", "Commercial", "Remote"],
    },
    {
      icon: Users,
      title: "Directeur Général",
      description: "Pilotage global de l'entreprise et définition de la vision stratégique.",
      tags: ["CDI", "Top Management", "International"],
    },
    {
      icon: Building,
      title: "Directeur des opérations",
      description: "Supervision des opérations et optimisation des processus internes.",
      tags: ["CDI", "Opérations", "France"],
    },
    {
      icon: TrendingUp,
      title: "Practice Manager",
      description: "Gestion de practices spécialisées et développement de l'expertise.",
      tags: ["CDI", "Expertise", "Paris"],
    },
    {
      icon: Target,
      title: "Directeur du delivery",
      description: "Responsable de la bonne exécution des projets et de la satisfaction client.",
      tags: ["CDI", "Delivery", "France"],
    },
    {
      icon: Users,
      title: "Directeur des engagements",
      description: "Gestion des engagements contractuels et relation client.",
      tags: ["CDI", "Engagement", "Paris"],
    },
    {
      icon: Building,
      title: "Directeur de projet",
      description: "Pilotage de projets stratégiques et management transversal.",
      tags: ["CDI", "Projet", "Remote"],
    },
    {
      icon: TrendingUp,
      title: "Bid Manager",
      description: "Gestion des réponses aux appels d'offres et coordination des équipes.",
      tags: ["CDI", "Bid", "France"],
    },
    {
      icon: Target,
      title: "Business developers",
      description: "Prospection et développement de nouveaux marchés.",
      tags: ["CDI", "Développement", "Paris"],
    },
    {
      icon: Users,
      title: "Consultants seniors",
      description: "Conseil et accompagnement de haut niveau auprès des clients.",
      tags: ["CDI/Freelance", "Conseil", "Expert"],
    },
    {
      icon: Building,
      title: "Directeurs de BU",
      description: "Direction de Business Units et pilotage de la performance.",
      tags: ["CDI", "BU", "France"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Catégories d'emploi</h2>
          <p className="text-xl text-gray-600">Découvrez nos opportunités par domaine</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
