"use client"

import { MessageCircle, Search, Users, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProcessSection() {
    const { ref, isVisible } = useScrollAnimation()

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

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comment nous vous accompagnons vers votre nouveau poste
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Step number badge stylé */}
                            <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-sm w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-md">
                                {step.number}
                            </div>

                            <div
                                className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
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
