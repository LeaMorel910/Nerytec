import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobsHero } from "@/components/jobs-hero"
import { JobCategories } from "@/components/job-categories"
import { CareerAdvice } from "@/components/career-advice"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import React, { useEffect, useState } from "react"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <JobsHero />
      <ProcessSection />
      {/* <JobCategories /> */}
      <CareerAdvice />
      <FAQSection />
      <FinalCtaSection />
      <Footer />
    </div>
  )
}
