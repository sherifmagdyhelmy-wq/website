import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Why } from '@/components/why'
import { FinalCta, SiteFooter } from '@/components/final-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Why />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
