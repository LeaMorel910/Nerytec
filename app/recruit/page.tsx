import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RecruitHero } from "@/components/recruit-hero"
import { RecruitProcess } from "@/components/recruit-process"
import { RecruitServices } from "@/components/recruit-services"
import { RecruitCTA } from "@/components/recruit-cta"

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RecruitHero />
      <RecruitProcess />
      <RecruitServices />
      <RecruitCTA />
      <Footer />
    </div>
  )
}
