"use client"

import { ArrowRight, Rocket, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import React, { useEffect, useState } from "react"

type StatItem = { number: string; label: string }
type FinalCtaSectionProps = {
    title?: string
    subtitle?: string
    stats?: StatItem[]
    note?: string
}

export function FinalCtaSection({ title, subtitle, stats, note }: FinalCtaSectionProps) {
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

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title ?? "Prêt à donner un nouvel élan à votre carrière ?"}</h2>

                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">{subtitle ?? "Bénéficiez de notre expertise ESN/SSII et de notre approche prédictive unique"}</p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            {(stats && stats.length > 0 ? stats : [
                                { number: '20+', label: "Années d'expertise" },
                                { number: '500+', label: 'Placements réussis' },
                                { number: '96%', label: 'Taux de satisfaction' },
                            ]).slice(0, 3).map((s, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-white mb-2">{s.number}</div>
                                    <div className="text-blue-100">{s.label}</div>
                                </div>
                            ))}
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

                    <p className="text-blue-100 text-sm mt-4">{note ?? "🎉 Rappel : 500€ offerts quand nous vous trouvons votre job de rêve !"}</p>
                    <Link href="/gift-cards" passHref legacyBehavior>
                        <a className="block mt-2 text-blue-100 text-sm italic underline hover:text-white transition-colors duration-200">
                            En chèque cadeau de votre choix - conditions fournies sur demande
                        </a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                /* Adaptations responsive pour mobile uniquement */
                @media (max-width: 639px) {
                    .py-20 {
                        padding-top: 3rem !important; /* py-12 */
                        padding-bottom: 3rem !important;
                    }
                    
                    .w-96.h-96 {
                        width: 12rem !important; /* w-48 */
                        height: 12rem !important; /* h-48 */
                    }
                    
                    .mb-8:first-child {
                        margin-bottom: 1.5rem !important; /* mb-6 */
                    }
                    
                    .w-16.h-16 {
                        width: 3rem !important; /* w-12 */
                        height: 3rem !important; /* h-12 */
                    }
                    
                    .mb-6:nth-child(1) {
                        margin-bottom: 1rem !important; /* mb-4 */
                    }
                    
                    .text-3xl {
                        font-size: 1.5rem !important; /* text-2xl */
                        line-height: 2rem !important;
                        padding-left: 0.5rem !important;
                        padding-right: 0.5rem !important;
                    }
                    
                    .mb-6:nth-child(2) {
                        margin-bottom: 1rem !important; /* mb-4 */
                    }
                    
                    .text-xl {
                        font-size: 1rem !important; /* text-base */
                        line-height: 1.5rem !important;
                        padding-left: 0.5rem !important;
                        padding-right: 0.5rem !important;
                    }
                    
                    .mb-12 {
                        margin-bottom: 2rem !important; /* mb-8 */
                    }
                    
                    .p-8 {
                        padding: 1.5rem !important; /* p-6 */
                    }
                    
                    .gap-6 {
                        gap: 1rem !important; /* gap-4 */
                    }
                    
                    .text-3xl.font-bold {
                        font-size: 1.5rem !important; /* text-2xl */
                        line-height: 2rem !important;
                    }
                    
                    .mb-2 {
                        margin-bottom: 0.5rem !important;
                    }
                    
                    .text-blue-100 {
                        font-size: 0.875rem !important; /* text-sm */
                        line-height: 1.25rem !important;
                    }
                    
                    .mb-8:last-of-type {
                        margin-bottom: 1.5rem !important; /* mb-6 */
                    }
                    
                    .px-8.py-4 {
                        padding-left: 1.5rem !important; /* px-6 */
                        padding-right: 1.5rem !important;
                        padding-top: 0.75rem !important; /* py-3 */
                        padding-bottom: 0.75rem !important;
                    }
                    
                    .text-lg {
                        font-size: 1rem !important; /* text-base */
                        line-height: 1.5rem !important;
                    }
                    
                    .w-5.h-5 {
                        width: 1rem !important; /* w-4 */
                        height: 1rem !important; /* h-4 */
                    }
                    
                    .text-sm {
                        font-size: 0.75rem !important; /* text-xs */
                        line-height: 1rem !important;
                    }
                    
                    .mt-4 {
                        margin-top: 0.75rem !important; /* mt-3 */
                    }
                    
                    .mt-2 {
                        margin-top: 0.5rem !important;
                    }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                
                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}