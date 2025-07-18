"use client"

import { ArrowRight, Briefcase, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Hero() {
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    setIsAnimationReady(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-16 lg:pt-0">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/surf.mp4" type="video/mp4" />
          {/* Fallback pour les navigateurs qui ne supportent pas la vidéo */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50" />
        </video>
      </div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Overlay graduel pour un effet plus doux */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      {/* Filtre coloré optionnel pour harmoniser avec la marque */}
      <div className="absolute inset-0 bg-blue-900/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Conteneur avec fond semi-transparent pour le texte principal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20 mt-6 sm:mt-12">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-0 leading-tight animate-fade-in-up drop-shadow-lg">
            <span className="text-[#0078BE] drop-shadow-2xl">NERYTEC</span> <span className="font-normal text-white">CONSULTING</span>
            <span className="block text-white pb-6 drop-shadow-md">
              Une expertise reconnue dans le secteur du conseil – ESN & SCT
            </span>
            <span className="block text-gray-100 text-xl font-semibold drop-shadow-md">
              <span className="relative inline-block">
                {/* Coin haut gauche */}
                <span className="absolute pointer-events-none" style={{ top: '-6px', left: '-6px' }}>
                  <span className="absolute top-0 left-0 w-3 h-0.5 bg-gradient-to-r from-white to-transparent opacity-70 block"></span>
                  <span className="absolute top-0 left-0 w-0.5 h-3 bg-gradient-to-b from-white to-transparent opacity-70 block"></span>
                </span>

                {/* Coin bas droite */}
                <span className="absolute pointer-events-none" style={{ bottom: '-6px', right: '-6px' }}>
                  <span className="absolute bottom-0 right-0 w-3 h-0.5 bg-gradient-to-l from-white to-transparent opacity-70 block"></span>
                  <span className="absolute bottom-0 right-0 w-0.5 h-3 bg-gradient-to-t from-white to-transparent opacity-70 block"></span>
                </span>

                Cabinet de recrutement nouvelle génération
              </span>
            </span>
          </h1>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link href="/jobs">
            <Button
              size="lg"
              className="bg-[#0078BE] hover:bg-[#006bb0] text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse-glow backdrop-blur-sm"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Je veux un job de rêve !
            </Button>
          </Link>
          <Link href="/recruit">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/20 hover:bg-white/30 text-lg px-8 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Je veux une pépite !
            </Button>
          </Link>
        </div>

        {/* Trust indicators avec fond semi-transparent */}
        <div
          className="flex flex-wrap justify-center items-center gap-8 text-white animate-fade-in-up bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10 mb-6 sm:mb-12"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0078BE] rounded-full animate-sparkle shadow-lg" />
            <span className="text-sm font-medium drop-shadow-md">500+ recrutement réussis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0078BE] rounded-full animate-sparkle shadow-lg" />
            <span className="text-sm font-medium drop-shadow-md">100+ entreprises partenaires</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0078BE] rounded-full animate-sparkle shadow-lg" />
            <span className="text-sm font-medium drop-shadow-md">96% de satisfaction client</span>
          </div>
        </div>
      </div>
    </section>
  )
}