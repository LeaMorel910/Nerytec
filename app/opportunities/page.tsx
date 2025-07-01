import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OpportunitiesHero } from "@/components/opportunities-hero"
import { JobListings } from "@/components/job-listings"
import { ApplicationForm } from "@/components/application-form"

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <OpportunitiesHero />
      <JobListings />
      <ApplicationForm />
      <Footer />
    </div>
  )
}
