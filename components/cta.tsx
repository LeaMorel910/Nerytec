import { ArrowRight, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0078BE] relative overflow-hidden">
      {/* Background decoration - adaptées pour mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
            Prêt à faire le prochain pas ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 leading-relaxed">
            Que vous soyez un candidat ou une entreprise, nous sommes là pour vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Candidats */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0078BE] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Vous êtes candidat ?
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 leading-relaxed min-h-[60px] sm:min-h-[72px]">
                Découvrez nos opportunités exclusives et bénéficiez d'un accompagnement personnalisé dans votre
                recherche d'emploi.
              </p>
              <Link href="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 w-full group-hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-3 sm:py-4"
                >
                  Voir les opportunités
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recruteurs */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0078BE] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Vous recrutez ?
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6 leading-relaxed min-h-[60px] sm:min-h-[72px]">
                Confiez-nous vos recrutements et accédez à notre réseau de talents.
              </p>
              <Link href="/recruit">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 w-full group-hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-3 sm:py-4"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}