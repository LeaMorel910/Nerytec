import Link from "next/link"

export default function GiftCards() {
    const cards = [
        { name: "Amazon", image: "/images/amazon.png" },
        { name: "Fnac", image: "/images/fnac.png" },
        { name: "Decathlon", image: "/images/decathlon.png" },
        { name: "Ikea", image: "/images/ikea.png" },
        { name: "Zalando", image: "/images/zalando.png" },
        { name: "Darty", image: "/images/darty.png" },
    ]

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center px-4 py-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#0078BE] mb-8">
                    Les chèques cadeau disponibles avec NERYTEC :
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                    {cards.map(card => (
                        <div key={card.name} className="flex flex-col items-center">
                            <img
                                src={card.image}
                                alt={card.name}
                                className="w-24 h-24 object-contain rounded-xl"
                            />
                        </div>
                    ))}
                </div>
                <Link href="/" className="inline-block mt-4 px-6 py-2 bg-[#0078BE] hover:bg-[#006bb0] text-white rounded-lg font-semibold transition-colors duration-200 shadow-md">
                    Retour à l'accueil
                </Link>
            </div>
        </main>
    )
} 