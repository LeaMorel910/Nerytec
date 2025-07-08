"use client"

import { BookOpen, Users, TrendingUp, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CareerAdvice() {
  const { ref, isVisible } = useScrollAnimation()

  const articles = [
    {
      icon: BookOpen,
      title: "Comment réussir son entretien commercial",
      excerpt: "Les clés pour convaincre lors d'un entretien pour un poste commercial",
      readTime: "5 min",
    },
    {
      icon: TrendingUp,
      title: "Évolution de carrière dans les ESN",
      excerpt: "Les opportunités d'évolution dans le secteur des services numériques",
      readTime: "7 min",
    },
    {
      icon: Users,
      title: "Management d'équipe commerciale",
      excerpt: "Techniques et bonnes pratiques pour manager une équipe commerciale",
      readTime: "6 min",
    },
    {
      icon: Award,
      title: "Négociation salariale",
      excerpt: "Comment négocier efficacement votre rémunération",
      readTime: "4 min",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conseils carrière</h2>
          <p className="text-xl text-gray-600">Nos experts partagent leurs conseils</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <article.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime} de lecture</span>
                  <Button
                    size="sm"
                    className="text-green-600 hover:text-green-700 bg-transparent shadow-none !focus:outline-none focus:ring-2 !focus:ring-green-50"
                  >
                    Lire plus →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">

        </div>
      </div>
    </section>
  )
}
