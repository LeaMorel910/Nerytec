import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobsHero } from "@/components/jobs-hero"
import { JobSearch } from "@/components/job-search"
import { JobCategories } from "@/components/job-categories"
import { CareerAdvice } from "@/components/career-advice"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JobsHero />
      <JobSearch />
      <JobCategories />
      <CareerAdvice />
      <Footer />
    </div>
  )
}
