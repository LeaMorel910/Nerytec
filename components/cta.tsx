import { ArrowRight, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à faire le prochain pas ?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Que vous soyez candidat ou recruteur, nous sommes là pour vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Candidats */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vous êtes candidat ?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Découvrez nos opportunités exclusives et bénéficiez d'un accompagnement personnalisé dans votre
                recherche d'emploi.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 w-full group-hover:shadow-lg transition-all duration-300"
              >
                Voir les opportunités
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Recruteurs */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vous recrutez ?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Confiez-nous vos recrutements et accédez à notre réseau de talents commerciaux et managériaux qualifiés.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 w-full group-hover:shadow-lg transition-all duration-300"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
