"use client"

import { ArrowRight, Rocket, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export function FinalCtaSection() {
    const { ref, isVisible } = useScrollAnimation()
    const [stars, setStars] = useState<{ top: number, left: number, delay: number }[]>([])

    useEffect(() => {
        setStars(
            Array.from({ length: 20 }, () => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
                delay: Math.random() * 3,
            }))
        )
    }, [])

    return (
        <section className="py-20 bg-[#0078BE] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#0078BE]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

                {/* Floating stars */}
                {stars.map((star, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute animate-twinkle"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            animationDelay: `${star.delay}s`,
                        }}
                    >
                        <Star className="w-4 h-4 text-white/30" />
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    ref={ref}
                    className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="mb-8">
                        <Rocket className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Prêt à donner un nouvel élan à votre carrière ?
                    </h2>

                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Bénéficiez de notre expertise ESN/SSII et de notre approche prédictive unique
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">20+</div>
                                <div className="text-blue-100">Années d'expertise</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">500+</div>
                                <div className="text-blue-100">Placements réussis</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">96%</div>
                                <div className="text-blue-100">Taux de satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <Link href="/contact" passHref legacyBehavior>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Button>
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Discutons de votre projet
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Button>
                    </Link>

                    <p className="text-blue-100 text-sm mt-4">
                        🎉 Rappel : 500€ offerts quand nous vous trouvons votre job de rêve !
                    </p>
                    <Link href="/gift-cards" passHref legacyBehavior>
                        <a className="block mt-2 text-blue-100 text-sm italic underline hover:text-white transition-colors duration-200">
                            En chèque cadeau de votre choix - conditions fournies sur demande
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
