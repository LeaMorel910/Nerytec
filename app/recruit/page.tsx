import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RecruitHero } from "@/components/recruit-hero"
import { RecruitProcess } from "@/components/recruit-process"
import { RecruitServices } from "@/components/recruit-services"
import { RecruitCTA } from "@/components/recruit-cta"
import { sanityFetch } from "@/sanity/lib/live"

type RecruitDoc = {
  heroTitle?: string
  heroQuestionMark?: boolean
  heroSubtitle?: string
  heroPills?: string[]
  processTitle?: string
  processSubtitle?: string
  processSteps?: { step: string; title: string; description: string }[]
  servicesTitle?: string
  servicesSubtitle?: string
  services?: { title: string; description: string; features: string[] }[]
  ctaTitle?: string
  ctaSubtitle?: string
  emailCardTitle?: string
  emailCardText?: string
  contactCardTitle?: string
  contactCardText?: string
}

export default async function RecruitPage() {
  const query = `coalesce(
    *[_type == "recruit" && _id == "recruit"][0],
    *[_type == "recruit"] | order(_updatedAt desc)[0]
  ){
    heroTitle,
    heroQuestionMark,
    heroSubtitle,
    heroPills,
    processTitle,
    processSubtitle,
    processSteps[]{step,title,description},
    servicesTitle,
    servicesSubtitle,
    services[]{title,description,features},
    ctaTitle,
    ctaSubtitle,
    emailCardTitle,
    emailCardText,
    contactCardTitle,
    contactCardText
  }`

  const result = await sanityFetch({ query, tags: ['recruit'] })
  const data = (result as any)?.data as RecruitDoc | null

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RecruitHero
        title={data?.heroTitle}
        showQuestionMark={data?.heroQuestionMark}
        subtitle={data?.heroSubtitle}
        pills={data?.heroPills}
      />
      <RecruitProcess
        title={data?.processTitle}
        subtitle={data?.processSubtitle}
        steps={data?.processSteps}
      />
      <RecruitServices
        title={data?.servicesTitle}
        subtitle={data?.servicesSubtitle}
        services={data?.services}
      />
      <RecruitCTA
        title={data?.ctaTitle}
        subtitle={data?.ctaSubtitle}
        emailCardTitle={data?.emailCardTitle}
        emailCardText={data?.emailCardText}
        contactCardTitle={data?.contactCardTitle}
        contactCardText={data?.contactCardText}
      />
      <Footer />
    </div>
  )
}
