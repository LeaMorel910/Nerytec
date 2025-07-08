"use client"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
      {/* ... les div d'animation restent pareilles ... */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-normal transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Parlons de votre
          <span className="block bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent pb-2">
            projet ensemble
          </span>
        </h1>

        <p
          className={`text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Vous recherchez un job ou vous vous posez des questions quant aux choix à faire pour construire votre carrière ?
          Notre équipe est à votre disposition pour répondre à toutes vos questions
        </p>

        <div
          className={`flex flex-wrap justify-center gap-8 text-gray-500 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <Phone className="w-5 h-5 text-teal-500" />
            <span className="font-medium">Réponse rapide</span>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 select-text">
              contact@votre-email.com
            </div>
          </div>
          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <Mail className="w-5 h-5 text-teal-500" />
            <span className="font-medium">Conseil personnalisé</span>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 select-text">
              conseil@votre-email.com
            </div>
          </div>
          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <MessageCircle className="w-5 h-5 text-teal-500" />
            <span className="font-medium">Écoute attentive</span>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 select-text">
              0800 123 456
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}