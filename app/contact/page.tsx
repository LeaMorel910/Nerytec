import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Suspense } from "react"
import { sanityFetch } from "@/sanity/lib/live"

type ContactDoc = {
  heroSubtitle?: string
  contactFeatures?: { title: string; description: string }[]
  contactInfo?: {
    address?: string
    email?: string
    responseTime?: string
    hours?: string
    days?: string
  }
  formButtonText?: string
}

export default async function ContactPage() {
  const query = `coalesce(
    *[_type == "contact" && _id == "contact"][0],
    *[_type == "contact"] | order(_updatedAt desc)[0]
  ){
    heroSubtitle,
    contactFeatures[]{title,description},
    contactInfo{
      address,
      email,
      responseTime,
      hours,
      days
    },
    formButtonText
  }`

  const result = await sanityFetch({ query, tags: ['contact'] })
  const data = (result as any)?.data as ContactDoc | null

  // Debug: afficher les données récupérées
  console.log('Contact data from Sanity:', data)

  // Valeurs par défaut si aucune donnée n'est trouvée
  const defaultData: ContactDoc = {
    heroSubtitle: "Vous recherchez un job ou vous vous posez des questions quant aux choix à faire pour construire votre carrière ? Notre équipe est à votre disposition pour répondre à toutes vos questions",
    contactFeatures: [
      { title: "Réponse rapide", description: "recrutement@nerytec.com" },
      { title: "Écoute attentive", description: "0800 123 456" }
    ],
    contactInfo: {
      address: "34 boulevard des italiens 75009",
      email: "recrutement@nerytec.com",
      responseTime: "Réponse sous 24h",
      hours: "8h00 - 20h00",
      days: "Lundi au Vendredi"
    },
    formButtonText: "Envoyer le message"
  }

  const finalData = data || defaultData

  // Afficher un message si les données par défaut sont utilisées
  if (!data) {
    console.log('⚠️ Aucune donnée Sanity trouvée pour la page contact. Utilisation des valeurs par défaut.')
    console.log('📝 Pour modifier le contenu, créez le document "contact" dans Sanity Studio.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero
        subtitle={finalData.heroSubtitle}
        contactFeatures={finalData.contactFeatures}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <Suspense>
          <ContactForm
            buttonText={finalData.formButtonText}
          />
        </Suspense>
        <ContactInfo
          contactInfo={finalData.contactInfo}
        />
      </div>
      <Footer />
    </div>
  )
}
