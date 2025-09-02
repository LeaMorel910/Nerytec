import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { Timeline } from "@/components/timeline"
import { Values } from "@/components/values"
import { sanityFetch } from "@/sanity/lib/live"

interface AboutData {
  heroTitle?: string
  heroSubtitle?: string
  heroPills?: string[]
  timelineTitle?: string
  timelineSubtitle?: string
  timelineEvents?: Array<{ year: string; title: string; description: string }>
  valuesTitle?: string
  valuesDescription?: string
  values?: Array<{ title: string; description: string }>
}

export default async function AboutPage() {
  const query = `coalesce(
    *[_type == "about" && _id == "about"][0],
    *[_type == "about"] | order(_updatedAt desc)[0]
  ){
    heroTitle,
    heroSubtitle,
    heroPills,
    timelineTitle,
    timelineSubtitle,
    timelineEvents[]{year,title,description},
    valuesTitle,
    valuesDescription,
    values[]{title,description}
  }`

  const result = await sanityFetch({ query, tags: ['about'] })
  const data = (result as any)?.data as AboutData | null

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero
        title={data?.heroTitle || undefined}
        subtitle={data?.heroSubtitle || undefined}
        pills={data?.heroPills || undefined}
      />
      <Timeline
        title={data?.timelineTitle || undefined}
        subtitle={data?.timelineSubtitle || undefined}
        events={data?.timelineEvents || undefined}
      />
      <Values
        title={data?.valuesTitle || undefined}
        description={data?.valuesDescription || undefined}
        items={data?.values || undefined}
      />

      <Footer />
    </div>
  )
}


