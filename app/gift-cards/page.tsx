import Link from "next/link"

export default function GiftCards() {
    const cards = [
        {
            name: "Amazon",
            image: "/images/amazon.png",
            alt: "Chèque cadeau Amazon"
        },
        {
            name: "Fnac",
            image: "/images/fnac.png",
            alt: "Chèque cadeau Fnac"
        },
        {
            name: "Decathlon",
            image: "/images/decathlon.png",
            alt: "Chèque cadeau Decathlon"
        },
        {
            name: "Ikea",
            image: "/images/ikea.png",
            alt: "Chèque cadeau Ikea"
        },
        {
            name: "Zalando",
            image: "/images/zalando.png",
            alt: "Chèque cadeau Zalando"
        },
        {
            name: "Darty",
            image: "/images/darty.png",
            alt: "Chèque cadeau Darty"
        },
    ]

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center px-4 py-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">

                {/* En-tête avec contexte */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0078BE] mb-4">
                        Nos récompenses clients
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        En tant que cabinet de recrutement, nous offrons des chèques cadeaux
                        à nos clients pour les remercier de leur confiance.
                    </p>
                </div>

                {/* Grille des cartes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                    {cards.map(card => (
                        <div key={card.name} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-20 h-20 object-contain mb-2"
                                loading="lazy"
                            />
                            <span className="text-sm font-medium text-gray-700">
                                {card.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Informations légales */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                        Informations importantes :
                    </h3>
                    <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Chèques cadeaux offerts uniquement dans le cadre de nos services de recrutement</li>
                        <li>• Soumis à conditions selon nos termes de service</li>
                        <li>• NERYTEC n'est pas affilié aux marques mentionnées</li>
                    </ul>
                </div>

                {/* Disclaimer légal */}
                <div className="border-t pt-4 mb-6">
                    <p className="text-xs text-gray-500 text-center">
                        Tous les logos et marques commerciales sont la propriété de leurs détenteurs respectifs.
                        Leur utilisation sur ce site est uniquement à des fins d'information sur les récompenses disponibles
                        dans le cadre de nos services de recrutement. NERYTEC est un cabinet de recrutement indépendant.
                    </p>
                </div>

                {/* Bouton de retour */}
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-[#0078BE] hover:bg-[#006bb0] text-white rounded-lg font-semibold transition-colors duration-200 shadow-md"
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </main>
    )
}