import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobsHero } from "@/components/jobs-hero"
import { JobCategories } from "@/components/job-categories"
import { Offres } from "@/components/career-advice"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import React from "react"
import { sanityFetch } from "@/sanity/lib/live"

type JobsDoc = {
  heroTitle?: string
  heroPills?: string[]
  heroButtonLabel?: string
  heroButtonHref?: string
  processTitle?: string
  processSubtitle?: string
  processSteps?: { title: string; description: string }[]
  opportunitiesTitle?: string
  opportunitiesSubtitle?: string
  opportunities?: { category: string; title: string; description: string }[]
  secondaryCtas?: { title: string; description?: string; buttonText?: string; link?: string }[]
  faqTitle?: string
  faqSubtitle?: string
  faqs?: { question: string; answer: string }[]
  stats?: { number: string; label: string; description?: string }[]
  finalCtaTitle?: string
  finalCtaNote?: string
}

export default async function JobsPage() {
  const query = `coalesce(
    *[_type == "jobs" && _id == "jobs"][0],
    *[_type == "jobs"] | order(_updatedAt desc)[0]
  ){
    heroTitle,
    heroPills,
    heroButtonLabel,
    heroButtonHref,
    processTitle,
    processSubtitle,
    processSteps[]{title,description},
    opportunitiesTitle,
    opportunitiesSubtitle,
    opportunities[]{category,title,description},
    secondaryCtas[]{title,description,buttonText,link},
    faqTitle,
    faqSubtitle,
    faqs[]{question,answer},
    stats[]{number,label,description},
    finalCtaTitle,
    finalCtaNote
  }`

  const result = await sanityFetch({ query, tags: ['jobs'] })
  const data = (result as any)?.data as JobsDoc | null

  // Regrouper opportunités par catégories pour le composant Offres
  const categories = (data?.opportunities ?? []).reduce((acc: any[], item) => {
    const id = item.category?.toLowerCase().replace(/\s+/g, '-') ?? 'autres'
    const found = acc.find((c) => c.id === id)
    if (found) {
      found.jobs.push({ title: item.title, description: item.description })
    } else {
      acc.push({ id, label: item.category, jobs: [{ title: item.title, description: item.description }] })
    }
    return acc
  }, [] as any[])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JobsHero
        pills={data?.heroPills}
        buttonLabel={data?.heroButtonLabel}
        buttonHref={data?.heroButtonHref ?? "/contact"}
      />

      <ProcessSection
        title={data?.processTitle}
        subtitle={data?.processSubtitle}
        steps={data?.processSteps}
      />
      <Offres
        title={data?.opportunitiesTitle}
        subtitle={data?.opportunitiesSubtitle}
        categories={categories}
        ctas={(data?.secondaryCtas ?? []).map((c) => ({
          title: c.title,
          description: c.description,
          buttonText: c.buttonText,
          href: c.link ?? "/contact#contact-form",
        }))}
      />
      {/* <JobCategories /> */}

      <FAQSection
        title={data?.faqTitle}
        subtitle={data?.faqSubtitle}
        faqs={data?.faqs}
      />
      <FinalCtaSection
        title={data?.finalCtaTitle}
        stats={data?.stats?.map((s) => ({ number: s.number, label: s.label }))}
        note={data?.finalCtaNote}
      />
      <Footer />
    </div>
  )
}
