"use client"

import { Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

import Link from "next/link"


export function RecruitCTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-[#0078BE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à démarrer votre recrutement ?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en recrutement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Appelez-nous</h3>
                <p className="text-blue-100 text-sm">+33 1 23 45 67 89</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Écrivez-nous</h3>
                <p className="text-blue-100 text-sm">contact@nerytec.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Planifiez</h3>
                <p className="text-blue-100 text-sm">Rendez-vous en ligne</p>
              </CardContent>
            </Card>
          </div>
          <Link href="/contact" passHref legacyBehavior>
            <Button size="lg" className="bg-white text-[#0078BE] hover:bg-[#006bb0] px-8 py-4 text-lg font-semibold transition-colors duration-200">
              Démarrer maintenant
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
