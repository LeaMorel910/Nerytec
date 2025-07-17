"use client"

import { MessageCircle, Search, Users, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

export function ProcessSection() {
    const { ref, isVisible } = useScrollAnimation()
    const [current, setCurrent] = useState(0)

    const steps = [
        {
            icon: MessageCircle,
            number: "1",
            title: "Entretien Conseil",
            description: "Analyse de votre profil, vos aspirations et profilage de vos besoins/attentes",
            color: "bg-[#0078BE]",
        },
        {
            icon: Search,
            number: "2",
            title: "Recherche & Matching",
            description: "Mapping, recherche multi-sources dans notre réseau de 20+ ans et notre base de données ESN/SCT",
            color: "bg-[#0078BE]",
        },
        {
            icon: Users,
            number: "3",
            title: "Présentation & Suivi",
            description: "Présentation au client, préparation aux entretiens, plan d'action personnalisé",
            color: "bg-[#0078BE]",
        },
        {
            icon: CheckCircle,
            number: "4",
            title: "Intégration",
            description: "Suivi post-embauche, appels réguliers, déjeuners de suivi pour assurer votre réussite",
            color: "bg-[#0078BE]",
        },
    ]

    // Fonctions pour le carrousel mobile
    const prevStep = () => setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
    const nextStep = () => setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1))

    // Correction pour l'icône dynamique
    const Icon = steps[current].icon

    return (
        <section className="py-6 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Notre Processus</h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Comment nous vous accompagnons vers votre nouveau poste
                    </p>
                </div>

                {/* Carrousel mobile */}
                <div className="md:hidden flex flex-col items-center" ref={ref}>
                    <div className={`relative w-full max-w-xs mx-auto`}>
                        <div
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-500 border border-white/20"
                            style={{ minHeight: "220px" }} // Ajustement de la hauteur minimale pour éviter l'espace blanc
                        // minHeight retiré pour éviter l'espace blanc
                        >
                            {/* Step number badge stylé */}
                            <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md">
                                {steps[current].number}
                            </div>
                            <div className={`w-12 h-12 ${steps[current].color} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{steps[current].title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{steps[current].description}</p>
                        </div>
                        {/* Boutons carrousel */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                aria-label="Précédent"
                                onClick={prevStep}
                                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0078BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <div className="flex gap-1">
                                {steps.map((_, i) => (
                                    <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-blue-600' : 'bg-blue-200'}`}></span>
                                ))}
                            </div>
                            <button
                                aria-label="Suivant"
                                onClick={nextStep}
                                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#0078BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grille desktop/tablette */}
                <div ref={ref} className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Step number badge stylé */}
                            <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-sm w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md">
                                {step.number}
                            </div>
                            <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
