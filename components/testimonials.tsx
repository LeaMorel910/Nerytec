"use client"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "DRH",
      company: "TechConseil ESN",
      content: "NERYTEC a su comprendre nos besoins spécifiques et nous a proposé des profils parfaitement adaptés. Leur expertise du secteur ESN est remarquable.",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      role: "Directeur Commercial",
      company: "InnovaConseil",
      content: "Grâce à NERYTEC, j'ai trouvé le poste idéal qui correspond parfaitement à mes aspirations. Un accompagnement professionnel et personnalisé.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "CEO",
      company: "DigitalExperts",
      content: "Partenaire de confiance depuis 3 ans, NERYTEC nous aide à recruter nos meilleurs talents commerciaux. Réactivité et qualité au rendez-vous.",
      rating: 5,
    },
    {
      name: "Laurent Bernardo",
      role: "Directeur des Opérations",
      company: "CloudTech Solutions",
      content: "Processus de recrutement très professionnel et efficace. Ils ont trouvé notre futur directeur technique en moins de 3 semaines avec une grande précision.",
      rating: 4,
    },
    {
      name: "Amélie Rousseau",
      role: "Responsable RH",
      company: "InnovSoft ESN",
      content: "L'accompagnement personnalisé de NERYTEC m'a permis de décrocher un poste de rêve. Leur réseau est impressionnant et leur suivi remarquable.",
      rating: 4.5,
    },
    {
      name: "Thomas Moreau",
      role: "Practice Manager",
      company: "DataConsulting",
      content: "Expertise remarquable du secteur et compréhension parfaite des enjeux. Ils comprennent vraiment les enjeux business et techniques de notre domaine.",
      rating: 4,
    },
    {
      name: "Céline Garnier",
      role: "COO",
      company: "CyberTech Group",
      content: "Réactivité exceptionnelle et suivi post-placement excellent. Un vrai partenaire de confiance depuis 5 ans qui nous accompagne dans notre croissance.",
      rating: 5,
    },
    {
      name: "Julien Fabre",
      role: "Directeur Général",
      company: "AI Solutions",
      content: "NERYTEC nous a aidés à structurer notre équipe commerciale de façon efficace. Résultats au-delà de nos attentes avec un ROI exceptionnel.",
      rating: 4.5,
    },
    {
      name: "Nadia El Mansouri",
      role: "Business Manager",
      company: "SecureNet Consulting",
      content: "Négociation salariale facilitée et conseils carrière précieux et personnalisés. Une approche humaine qui fait vraiment la différence sur le marché.",
      rating: 4,
    },
    {
      name: "Vincent Leroy",
      role: "Directeur Technique",
      company: "DevOps Masters",
      content: "Ils ont su identifier mes compétences clés et m'orienter vers le poste parfait. Merci pour ce professionnalisme et cette écoute attentive.",
      rating: 5,
    },
    {
      name: "Sarah Benoit",
      role: "Responsable Recrutement",
      company: "TechCorp ESN",
      content: "Collaboration fluide et efficace depuis plusieurs années. NERYTEC comprend nos enjeux et nous livre des candidats de qualité exceptionnelle.",
      rating: 4.5,
    },
    {
      name: "Alexandre Durand",
      role: "Head of Sales",
      company: "QuantumSoft",
      content: "Transition de carrière réussie grâce à leur expertise reconnue. Accompagnement de A à Z remarquable avec un suivi personnalisé constant.",
      rating: 4,
    },
    {
      name: "Isabelle Moreau",
      role: "Directrice Marketing",
      company: "DevTech ESN",
      content: "Service client impeccable et résultats concrets. Ils ont transformé notre processus de recrutement et amélioré significativement nos embauches.",
      rating: 5,
    },
    {
      name: "Maxime Dubois",
      role: "Consultant Senior",
      company: "ITConseil Group",
      content: "Grâce à NERYTEC, ma carrière a pris un tournant décisif. Leur connaissance du marché et leur réseau professionnel sont des atouts majeurs.",
      rating: 4.5,
    },
    {
      name: "Caroline Petit",
      role: "Directrice Opérationnelle",
      company: "CloudFirst Solutions",
      content: "Partenariat stratégique de longue durée avec des résultats mesurables. Une équipe professionnelle qui comprend nos besoins spécifiques.",
      rating: 4,
    },
    {
      name: "Romain Leclerc",
      role: "Business Developer",
      company: "TechInnovation ESN",
      content: "Processus transparent et efficace du début à la fin. NERYTEC m'a accompagné avec bienveillance vers une opportunité en parfaite adéquation.",
      rating: 5,
    },
    {
      name: "Émilie Bernard",
      role: "Directrice des Talents",
      company: "NextGen Consulting",
      content: "Expertise sectorielle reconnue et méthodologie éprouvée. Ils nous aident à attirer et retenir les meilleurs profils du marché ESN.",
      rating: 4.5,
    },
    {
      name: "Fabien Roussel",
      role: "Manager Commercial",
      company: "DataScience Corp",
      content: "Approche consultative remarquable et suivi personnalisé exceptionnel. Une équipe qui prend le temps de comprendre nos ambitions professionnelles.",
      rating: 4,
    }
  ]

  // Multiplier les témoignages pour un scroll vraiment infini et lent
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ]

  // Largeur d'une carte (w-80 = 20rem = 320px) + gap-6 (1.5rem = 24px)
  const cardWidthWithGap = 320 + 24; // 344px

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos candidats – Nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients et nos candidats est notre priorité
          </p>
        </div>

        {/* Carousel horizontal infini */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll" style={{ transform: `translateX(-${cardWidthWithGap}px)` }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        {testimonial.rating % 1 !== 0 && (
                          <div className="relative">
                            <Star className="w-4 h-4 text-gray-300" />
                            <div className="absolute inset-0 w-1/2 overflow-hidden">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                          </div>
                        )}
                      </div>
                      <Quote className="w-6 h-6 text-blue-500 mb-4" />
                      <div className="min-h-[120px] flex items-start">
                        <p className="text-gray-700 leading-relaxed text-sm">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(-${cardWidthWithGap}px);
          }
          to {
            transform: translateX(calc(-80% - ${cardWidthWithGap}px));
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Assurer la fluidité sur mobile */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 45s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}