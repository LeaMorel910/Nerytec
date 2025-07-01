"use client"

import { Search, MapPin, Briefcase, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function JobSearch() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rechercher un emploi</h2>
            <p className="text-xl text-gray-600">Trouvez votre prochain défi professionnel</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input type="text" placeholder="Poste, entreprise..." className="pl-10" />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input type="text" placeholder="Localisation" className="pl-10" />
              </div>

              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input type="text" placeholder="Secteur d'activité" className="pl-10" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              >
                <Search className="w-5 h-5 mr-2" />
                Rechercher
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                <Filter className="w-5 h-5 mr-2" />
                Filtres avancés
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
