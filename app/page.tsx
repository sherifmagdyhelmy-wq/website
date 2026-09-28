import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { SalesIntelligence } from '@/components/sales-intelligence'
import { Deliverables } from '@/components/deliverables'
import { Dashboard } from '@/components/dashboard'
import { Quality } from '@/components/quality'
import { CaseStudy } from '@/components/case-study'
import { Why } from '@/components/why'
import { FinalCta, SiteFooter } from '@/components/final-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <SalesIntelligence />
        <Deliverables />
        <Dashboard />
        <Quality />
        <CaseStudy />
        <Why />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
