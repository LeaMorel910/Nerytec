"use client"

import { ArrowRight, Briefcase, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

interface AnimationElement {
  id: number;
  left?: string;
  top?: string;
  animationDelay: string;
  animationDuration?: string;
  backgroundColor: string;
  transform?: string;
}

export function Hero() {
  const [confettiElements, setConfettiElements] = useState<AnimationElement[]>([]);
  const [sparkleElements, setSparkleElements] = useState<AnimationElement[]>([]);
  const [bubbleElements, setBubbleElements] = useState<AnimationElement[]>([]);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  const confettiColors = [
    "#ef4444", "#f97316", "#eab308", "#22c55e",
    "#3b82f6", "#9333ea", "#ec4899", "#06b6d4"
  ];

  const bubbleColors = [
    "#fbbf24", "#f59e0b", "#10b981", "#3b82f6",
    "#8b5cf6", "#ec4899", "#ef4444"
  ];

  useEffect(() => {
    // Générer les confetti
    const confetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${6 + Math.random() * 4}s`,
      backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      transform: `rotate(${Math.random() * 360}deg)`,
    }));

    // Générer les sparkles
    const sparkles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      backgroundColor: "#fbbf24", // Couleur fixe pour les sparkles
    }));

    // Générer les bubbles
    const bubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      backgroundColor: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
    }));

    setConfettiElements(confetti);
    setSparkleElements(sparkles);
    setBubbleElements(bubbles);
    setIsAnimationReady(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 pt-16 lg:pt-0">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(2deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
          75% {
            transform: translateY(10px) translateX(-5px) rotate(-2deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.2;
          }
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes bounce-celebration {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.2);
          }
        }

        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          33% {
            transform: translateY(-8px) scale(1.03);
          }
          66% {
            transform: translateY(-4px) scale(1.02);
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

        @keyframes pulse-rainbow {
          0% { background-color: rgba(239, 68, 68, 0.3); }
          16% { background-color: rgba(249, 115, 22, 0.3); }
          33% { background-color: rgba(234, 179, 8, 0.3); }
          50% { background-color: rgba(34, 197, 94, 0.3); }
          66% { background-color: rgba(59, 130, 246, 0.3); }
          83% { background-color: rgba(147, 51, 234, 0.3); }
          100% { background-color: rgba(236, 72, 153, 0.3); }
        }

        @keyframes wave-festive {
          0% { 
            background-position: 0% 50%; 
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
          100% { 
            background-position: 100% 50%; 
            opacity: 0.1;
          }
        }

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

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-confetti-fall {
          animation: confetti-fall 8s linear infinite;
        }
        .animate-bounce-celebration {
          animation: bounce-celebration 2s ease-in-out infinite;
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 2.8s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        .animate-pulse-rainbow {
          animation: pulse-rainbow 4s ease-in-out infinite;
        }
        .animate-wave-festive {
          animation: wave-festive 15s linear infinite alternate;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Festive Background Elements */}
      <div className="absolute inset-0">
        {/* Confetti particles - Only render after hydration */}
        {isAnimationReady && confettiElements.map((confetti) => (
          <div
            key={`confetti-${confetti.id}`}
            className="absolute animate-confetti-fall"
            style={{
              left: confetti.left,
              animationDelay: confetti.animationDelay,
              animationDuration: confetti.animationDuration,
            }}
          >
            <div
              className="w-3 h-3 rounded-sm"
              style={{
                backgroundColor: confetti.backgroundColor,
                transform: confetti.transform,
              }}
            />
          </div>
        ))}

        {/* Floating celebration circles */}
        <div
          className="absolute top-1/4 left-1/4 w-36 h-36 rounded-full blur-3xl animate-float animate-pulse-rainbow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full blur-3xl animate-float animate-pulse-rainbow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full blur-3xl animate-float animate-pulse-rainbow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full blur-3xl animate-float animate-pulse-rainbow"
          style={{ animationDelay: "3s" }}
        />

        {/* Sparkle effects - Only render after hydration */}
        {isAnimationReady && sparkleElements.map((sparkle) => (
          <div
            key={`sparkle-${sparkle.id}`}
            className="absolute animate-sparkle"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.animationDelay,
            }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg" />
          </div>
        ))}

        {/* Festive wavy pattern */}
        <div
          className="absolute inset-0 animate-wave-festive"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 75%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: "400% 400%",
          }}
        />

        {/* Celebration bubbles - Only render after hydration */}
        {isAnimationReady && bubbleElements.map((bubble) => (
          <div
            key={`bubble-${bubble.id}`}
            className="absolute animate-bounce-celebration"
            style={{
              top: bubble.top,
              left: bubble.left,
              animationDelay: bubble.animationDelay,
            }}
          >
            <div
              className="w-4 h-4 rounded-full opacity-60"
              style={{
                backgroundColor: bubble.backgroundColor,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
          Le spécialiste du Recrutement
          <span className="block text-black pb-2">
            De Sales - Managers - Directeurs - Dirigeants
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Le spécialiste du secteur des ESN et société de conseil en technologies

        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link href="/jobs">
            <Button
              size="lg"
              className="bg-[#0078BE] hover:bg-[#006bb0] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-float"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Je veux un job de rêve !
            </Button>
          </Link>
          <Link href="/recruit">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0078BE] text-[#0078BE] bg-white/50 hover:bg-white text-lg px-8 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-[#006bb0] animate-pulse-float"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Je veux une pépite !
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap justify-center items-center gap-8 text-gray-500 animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-sparkle" />
            <span className="text-sm font-medium">500+ placements réussis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-sparkle" />
            <span className="text-sm font-medium">100+ entreprises partenaires</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-sparkle" />
            <span className="text-sm font-medium">95% de satisfaction client</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator with animations */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-fade-in-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div
          className="group cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-8 h-12 border-2 border-gray-400/40 rounded-full flex justify-center relative overflow-hidden group-hover:border-gray-600/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-400/20">
            {/* Animated scroll line */}
            <div className="w-0.5 h-4 bg-gradient-to-b from-gray-800/80 to-transparent rounded-full mt-2 animate-scroll-bounce group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300" />

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Scroll text hint */}
          <div className="text-gray-600/60 text-xs mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
            Scroll
          </div>
        </div>
      </div>
    </section>
  )
}