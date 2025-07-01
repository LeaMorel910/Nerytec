"use client"

import { MapPin, Clock, Building, Euro } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function JobListings() {
  const { ref, isVisible } = useScrollAnimation()

  const jobs = [
    {
      title: "Directeur Commercial ESN",
      company: "TechConseil Solutions",
      location: "Paris",
      type: "CDI",
      salary: "80-100k€",
      description: "Pilotage de l'activité commerciale d'une ESN en forte croissance",
      tags: ["Management", "ESN", "Commercial"],
      posted: "Il y a 2 jours",
    },
    {
      title: "Business Developer Senior",
      company: "InnovaConseil",
      location: "Lyon",
      type: "CDI",
      salary: "60-80k€",
      description: "Développement commercial grands comptes dans le conseil en ingénierie",
      tags: ["Business Dev", "Grands Comptes", "Conseil"],
      posted: "Il y a 5 jours",
    },
    {
      title: "Manager Commercial",
      company: "DigitalExperts",
      location: "Remote",
      type: "CDI",
      salary: "70-90k€",
      description: "Management d'une équipe commerciale de 8 personnes",
      tags: ["Management", "Remote", "Digital"],
      posted: "Il y a 1 semaine",
    },
    {
      title: "Directeur Général Adjoint",
      company: "ConseilTech Group",
      location: "Toulouse",
      type: "CDI",
      salary: "100-120k€",
      description: "Seconder le DG dans la stratégie et le développement de l'entreprise",
      tags: ["Direction", "Stratégie", "Leadership"],
      posted: "Il y a 3 jours",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Opportunités actuelles</h2>
          <p className="text-xl text-gray-600">Découvrez nos dernières offres d'emploi</p>
        </div>

        <div ref={ref} className="space-y-6">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{job.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="w-4 h-4" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {job.type}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                    Postuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
            Voir toutes les opportunités
          </Button>
        </div>
      </div>
    </section>
  )
}
