import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "DRH",
      company: "TechConseil ESN",
      content:
        "NERYTEC a su comprendre nos besoins spécifiques et nous a proposé des profils parfaitement adaptés. Leur expertise du secteur ESN est remarquable.",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      role: "Directeur Commercial",
      company: "InnovaConseil",
      content:
        "Grâce à NERYTEC, j'ai trouvé le poste idéal qui correspond parfaitement à mes aspirations. Un accompagnement professionnel et personnalisé.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "CEO",
      company: "DigitalExperts",
      content:
        "Partenaire de confiance depuis 3 ans, NERYTEC nous aide à recruter nos meilleurs talents commerciaux. Réactivité et qualité au rendez-vous.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos candidats – Nos  clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients et nos candidats est notre priorité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-500 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
