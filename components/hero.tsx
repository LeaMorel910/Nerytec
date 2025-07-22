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

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fade-in-up-stagger-1 {
          animation-delay: 0.1s;
        }
        .animate-fade-in-up-stagger-2 {
          animation-delay: 0.3s;
        }
        .animate-fade-in-up-stagger-3 {
          animation-delay: 0.5s;
        }
        .pulse-dot {
          animation: pulse-subtle 1.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .pulse-dot {
            animation: none !important;
          }
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform scale-95">
        {/* Conteneur avec fond semi-transparent pour le texte principal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20 mt-6 sm:mt-12 animate-fade-in-up animate-fade-in-up-stagger-1">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-0 leading-tight drop-shadow-lg">
            <span className="text-[#0078BE] drop-shadow-2xl">NERYTEC</span> <span className="font-normal text-white">CONSULTING</span>
            <span className="block text-white pb-6 drop-shadow-md">
              Une expertise reconnue dans le secteur du conseil – ESN & SCT
            </span>
            <span className="block text-gray-50 text-xl font-light italic">
              Cabinet de recrutement nouvelle génération
            </span>
          </h1>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-fade-in-up-stagger-2"
        >
          <Link href="/jobs">
            <Button
              size="lg"
              className="bg-[#0078BE] hover:bg-[#006bb0] text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0078BE]"
              style={{ transition: 'background 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Je veux un job de rêve !
            </Button>
          </Link>
          <Link href="/recruit">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/20 hover:bg-white/30 text-lg px-8 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              style={{ transition: 'background 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Je veux une pépite !
            </Button>
          </Link>
        </div>

        {/* Trust indicators avec fond semi-transparent */}
        <div
          className="flex flex-wrap justify-center items-center gap-8 text-white animate-fade-in-up animate-fade-in-up-stagger-3 bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10 mb-6 sm:mb-12"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0078BE] rounded-full pulse-dot shadow-lg" />
            <span className="text-sm font-medium drop-shadow-md">500+ recrutement réussis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0078BE] rounded-full pulse-dot shadow-lg" />
            <span className="text-sm font-medium drop-shadow-md">100+ entreprises partenaires</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0078BE] rounded-full pulse-dot shadow-lg" />
            <span className="text-sm font-medium drop-shadow-md">96% de satisfaction client</span>
          </div>
        </div>
      </div>
    </section>
  )
}