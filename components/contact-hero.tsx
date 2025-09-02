"use client"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ContactHeroProps {
  subtitle?: string
  contactFeatures?: { title: string; description: string }[]
}

export function ContactHero({ subtitle, contactFeatures }: ContactHeroProps) {
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
          className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="block mb-2">Parlons de votre</span>
          <span className="block bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent pb-2">
            projet ensemble
          </span>
        </h1>
        <p
          className={`text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {subtitle || "Vous recherchez un job ou vous vous posez des questions quant aux choix à faire pour construire votre carrière ? Notre équipe est à votre disposition pour répondre à toutes vos questions"}
        </p>
        <div
          className={`flex flex-wrap justify-center gap-8 text-gray-500 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {contactFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 relative group cursor-pointer">
              {feature.title === "Réponse rapide" ? (
                <Mail className="w-5 h-5 text-teal-500" />
              ) : (
                <Phone className="w-5 h-5 text-teal-500" />
              )}
              <span className="font-medium">{feature.title}</span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 select-text">
                {feature.description}
              </div>
            </div>
          )) || (
              <>
                <div className="flex items-center space-x-2 relative group cursor-pointer">
                  <Mail className="w-5 h-5 text-teal-500" />
                  <span className="font-medium">Réponse rapide</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 select-text">
                    recrutement@nerytec.com
                  </div>
                </div>
                <div className="flex items-center space-x-2 relative group cursor-pointer">
                  <Phone className="w-5 h-5 text-teal-500" />
                  <span className="font-medium">Écoute attentive</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 select-text">
                    0800 123 456
                  </div>
                </div>
              </>
            )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Adaptations responsive pour mobile uniquement */
        @media (max-width: 639px) {
          .min-h-[70vh] {
            min-height: 60vh !important;
          }
          
          .w-32.h-32 {
            width: 6rem !important; /* w-24 */
            height: 6rem !important; /* h-24 */
          }
          
          .w-48.h-48 {
            width: 8rem !important; /* w-32 */
            height: 8rem !important; /* h-32 */
          }
          
          .w-24.h-24 {
            width: 4rem !important; /* w-16 */
            height: 4rem !important; /* h-16 */
          }
          
          .text-4xl {
            font-size: 1.875rem !important; /* text-3xl */
            line-height: 2.25rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-4 {
            margin-bottom: 1rem !important;
          }
          
          .pb-2 {
            padding-bottom: 0.5rem !important;
          }
          
          .text-lg {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .mb-8 {
            margin-bottom: 1.5rem !important; /* mb-6 */
          }
          
          .gap-8 {
            gap: 1rem !important; /* gap-4 */
          }
          
          .space-x-2 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.5rem !important;
          }
          
          .w-5.h-5 {
            width: 1rem !important; /* w-4 */
            height: 1rem !important; /* h-4 */
          }
          
          .font-medium {
            font-size: 0.875rem !important; /* text-sm */
            line-height: 1.25rem !important;
          }
          
          .text-sm {
            font-size: 0.75rem !important; /* text-xs */
            line-height: 1rem !important;
          }
          
          /* Tooltips sur mobile - affichage permanent sur tap */
          .group:active .group-hover\\:opacity-100 {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}