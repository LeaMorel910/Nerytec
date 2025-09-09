import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { sanityFetch } from "@/sanity/lib/live"

// Types pour les données de la page d'accueil
interface HomepageData {
  // Hero Section
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
  heroButton1Text?: string
  heroButton1Link?: string
  heroButton2Text?: string
  heroButton2Link?: string
  heroTrustIndicators?: Array<{ text: string }>

  // Services Section
  servicesTitle?: string
  servicesSubtitle?: string
  services?: Array<{
    title: string
    features: string[]
  }>
  servicesButtonText?: string
  servicesButtonLink?: string

  // About Section
  aboutTitle?: string
  aboutDescription?: string
  aboutValues?: Array<{
    title: string
    description: string
  }>
  aboutButtonText?: string
  aboutButtonLink?: string
  aboutExperience?: {
    years?: string
    description?: string
    esnPercentage?: string
    satisfactionPercentage?: string
  }

  // Stats Section
  statsTitle?: string
  stats?: Array<{
    number: string
    label: string
    description?: string
  }>

  // Testimonials Section
  testimonialsTitle?: string
  testimonialsSubtitle?: string
  testimonials?: Array<{
    name: string
    role: string
    company: string
    content: string
    rating: number
  }>

  // CTA Section
  ctaTitle?: string
  ctaDescription?: string
  titre_carte_candidat?: string
  description_carte_candidat?: string
  texte_bouton_candidat?: string
  titre_carte_recruteur?: string
  description_carte_recruteur?: string
  texte_bouton_recruteur?: string
}

// Query robuste: d'abord le singleton par ID fixe, sinon le plus récent
const homepageQuery = `coalesce(
  *[_type == "homepage" && _id == "homepage"][0],
  *[_type == "homepage"] | order(_updatedAt desc)[0]
) {
  // Hero Section
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButton1Text,
  heroButton1Link,
  heroButton2Text,
  heroButton2Link,
  heroTrustIndicators[]{
    text
  },
  
  // Services Section
  servicesTitle,
  servicesSubtitle,
  services[]{
    title,
    features
  },
  servicesButtonText,
  servicesButtonLink,
  
  // About Section
  aboutTitle,
  aboutDescription,
  aboutValues[]{
    title,
    description
  },
  aboutButtonText,
  aboutButtonLink,
  aboutExperience{
    years,
    description,
    esnPercentage,
    satisfactionPercentage
  },
  
  // Stats Section
  statsTitle,
  stats[]{
    number,
    label,
    description
  },
  
  // Testimonials Section
  testimonialsTitle,
  testimonialsSubtitle,
  testimonials[]{
    name,
    role,
    company,
    content,
    rating
  },
  
  // CTA Section (cartes)
  ctaTitle,
  ctaDescription,
  titre_carte_candidat,
  description_carte_candidat,
  texte_bouton_candidat,
  titre_carte_recruteur,
  description_carte_recruteur,
  texte_bouton_recruteur
}`

export default async function HomePage() {
  let data: HomepageData = {}

  try {
    // Récupération des données depuis Sanity
    const result = await sanityFetch({
      query: homepageQuery,
      tags: ['homepage']
    })

    data = result.data || {}

    // Vérification que les données sont disponibles
    if (!data || Object.keys(data).length === 0) {
      console.warn('Aucune donnée Sanity trouvée, utilisation des valeurs par défaut')
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données Sanity:', error)
    console.warn('Utilisation des valeurs par défaut des composants')
    // En cas d'erreur, on utilise un objet vide pour déclencher les valeurs par défaut
    data = {}
  }

  // Fonction utilitaire pour nettoyer les valeurs null/undefined
  const safeValue = (value: any, defaultValue: any) => {
    return value !== null && value !== undefined ? value : defaultValue
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title={safeValue(data.heroTitle, "NERYTEC CONSULTING")}
        subtitle={safeValue(data.heroSubtitle, "Une expertise reconnue dans le secteur du conseil – ESN & SCT")}
        description={safeValue(data.heroDescription, "Cabinet de recrutement nouvelle génération")}
        button1Text={safeValue(data.heroButton1Text, "Je veux un job de rêve !")}
        button1Link={safeValue(data.heroButton1Link, "/jobs")}
        button2Text={safeValue(data.heroButton2Text, "Je veux une pépite !")}
        button2Link={safeValue(data.heroButton2Link, "/recruit")}
        trustIndicators={safeValue(data.heroTrustIndicators, [
          { text: "500+ recrutement réussis" },
          { text: "100+ entreprises partenaires" },
          { text: "96% de satisfaction client" }
        ])}
      />

      <AnimatedSection delay={100}>
        <Services
          title={safeValue(data.servicesTitle, "Nerytec Consulting")}
          subtitle={safeValue(data.servicesSubtitle, "Le partenaire incontournable des ESN et des sociétés de conseil en ingénierie. Le partenaire incontournable pour booster votre carrière.")}
          services={safeValue(data.services, [
            {
              title: "Management/ Direction Commercial (H/F)",
              features: ["Directeur commercial", "Global Account Manager", "Branch Manager", "Account Executive", "Business manager"]
            },
            {
              title: "Direction Générale (H/F)",
              features: ["Directeur Général", "Directeur des opérations", "Directeur Administratif et financier"]
            },
            {
              title: "Direction Technique – opérationnelle (H/F)",
              features: ["Directeur des engagements", "Directeur de projet", "Bid Manager", "Practice Manager", "Directeur du delivery"]
            },
            {
              title: "Ressources Humaines (H/F)",
              features: ["Directeur des Ressources Humaines", "Responsable des Ressources Humaines", "Chargé de recrutement", "Ressource manager"]
            }
          ])}
          buttonText={safeValue(data.servicesButtonText, "Découvrir Nos Opportunités Exclusives")}
          buttonLink={safeValue(data.servicesButtonLink, "/jobs#contact-form")}
        />
      </AnimatedSection>

      <AnimatedSection>
        <Stats title={safeValue(data.statsTitle, 'Nos réalisations - Quelques Chiffres')} stats={safeValue(data.stats, [
          { number: "500+", label: "Placements réussis" },
          { number: "100+", label: "Entreprises partenaires" },
          { number: "20+", label: "Années d'expérience" },
          { number: "96%", label: "Taux de satisfaction" }
        ])} />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <About
          title={safeValue(data.aboutTitle, "Pourquoi choisir NERYTEC ?")}
          description={safeValue(data.aboutDescription, "Depuis plus de 20 ans, Notre expertise du secteur des ESN et du conseil en ingénierie nous permet d'anticiper les enjeux de nos clients et les enjeux de nos talents.")}
          values={safeValue(data.aboutValues, [
            { title: "Réactivité", description: "Réponse rapide et suivi personnalisé de chaque mission" },
            { title: "Confidentialité", description: "Respect total de la confidentialité de nos clients et candidats" },
            { title: "Proximité", description: "Relation de confiance et accompagnement sur le long terme" },
            { title: "Expertise", description: "Connaissance approfondie des métiers et du marché" }
          ])}
          buttonText={safeValue(data.aboutButtonText, "Découvrir notre histoire")}
          buttonLink={safeValue(data.aboutButtonLink, "/about")}
          experience={safeValue(data.aboutExperience, {
            years: "20+",
            description: "Dans le recrutement spécialisé",
            esnPercentage: "100%",
            satisfactionPercentage: "96%"
          })}
        />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <Testimonials
          title={safeValue(data.testimonialsTitle, "Ce que disent nos candidats – Nos clients")}
          subtitle={safeValue(data.testimonialsSubtitle, "La satisfaction de nos clients et nos candidats est notre priorité")}
          testimonials={safeValue(data.testimonials, undefined)}
        />
      </AnimatedSection>

      <CTA
        title={safeValue(data.ctaTitle, "Prêt à faire le prochain pas ?")}
        description={safeValue(data.ctaDescription, "Que vous soyez un candidat ou une entreprise, nous sommes là pour vous accompagner")}
        candidatTitle={safeValue(data.titre_carte_candidat, "Vous êtes candidat ?")}
        candidatDescription={safeValue(data.description_carte_candidat, "Découvrez nos opportunités exclusives et bénéficiez d'un accompagnement personnalisé dans votre recherche d'emploi.")}
        candidatButtonText={safeValue(data.texte_bouton_candidat, "Voir les opportunités")}
        recruteurTitle={safeValue(data.titre_carte_recruteur, "Vous recrutez ?")}
        recruteurDescription={safeValue(data.description_carte_recruteur, "Confiez-nous vos recrutements et accédez à notre réseau de talents.")}
        recruteurButtonText={safeValue(data.texte_bouton_recruteur, "Nous contacter")}
      />

      <Footer />
    </div>
  )
}
