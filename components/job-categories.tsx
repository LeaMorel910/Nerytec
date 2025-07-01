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
      title: "Management Commercial",
      count: "25+ postes",
      description: "Directeurs commerciaux, managers d'équipes",
      tags: ["CDI", "Cadre", "Paris"],
    },
    {
      icon: Target,
      title: "Business Development",
      count: "18+ postes",
      description: "Développement commercial, grands comptes",
      tags: ["CDI", "Expérience", "Remote"],
    },
    {
      icon: Building,
      title: "Direction Générale",
      count: "12+ postes",
      description: "Directeurs généraux, country managers",
      tags: ["CDI", "Senior", "International"],
    },
    {
      icon: TrendingUp,
      title: "Consulting",
      count: "30+ postes",
      description: "Consultants seniors, chefs de projet",
      tags: ["CDI/Freelance", "Tech", "Conseil"],
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
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {category.count}
                  </Badge>
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
