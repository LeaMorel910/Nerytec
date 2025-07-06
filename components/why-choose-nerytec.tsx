"use client"

import { CheckCircle2, Globe, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhyChooseNerytec() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                    Pourquoi choisir NERYTEC ?
                </h2>
                <p
                    className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                >
                    Depuis 2008, NERYTEC Consulting accompagne exclusivement les ESN et sociétés de conseil en technologies dans leurs recrutements de profils commerciaux, managériaux et techniques. Notre hyperspécialisation du marché nous permet de comprendre parfaitement vos enjeux et de vous proposer les meilleurs talents.
                    <br /><br />
                    Notre approche prédictive unique nous distingue : nous ne cherchons pas uniquement un candidat pour un besoin exprimé, mais nous présentons en mode prédicatif des talents qui correspondent à votre culture d'entreprise et à vos exigences, en anticipation de vos besoins futurs.
                </p>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div
                        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "0ms" }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Hyperspécialisation</h3>
                        <p className="text-gray-600 leading-relaxed">Focus exclusif sur les ESN et sociétés de conseil en technologies pour une expertise inégalée.</p>
                    </div>

                    <div
                        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "100ms" }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Approche Prédictive</h3>
                        <p className="text-gray-600 leading-relaxed">Anticipation de vos besoins et adéquation culturelle des talents.</p>
                    </div>

                    <div
                        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Zones d'intervention</h3>
                        <p className="text-gray-600 leading-relaxed">Île-de-France, Rhône-Alpes, Sud-Ouest, Sud Méditerranée, Nord-Ouest, Nord, et à l'international (Suisse, Belgique, Angleterre, Espagne, Dubaï).</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 