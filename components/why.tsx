import { Repeat, Siren, Building2, Layers, Plug } from 'lucide-react'
import { SectionHeading, Accent } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reasons = [
  { icon: Repeat, title: 'Continuous customer intelligence', body: 'An ongoing monthly rhythm, not a one-off project.' },
  { icon: Siren, title: 'Escalation-first approach', body: 'Critical issues reach decision-makers immediately.' },
  { icon: Building2, title: 'Operational understanding', body: 'Feedback read through branches, teams and processes.' },
  { icon: Layers, title: 'Customer + Sales Intelligence', body: 'Experience and revenue signals in one conversation.' },
  { icon: Plug, title: 'No heavy system integration', body: 'Share your transaction data. No new IT projects.' },
]

export function Why() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        className="slash drift pointer-events-none absolute -left-48 bottom-0 hidden h-2/3 w-[28rem] bg-brand/[0.07] lg:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Why NEW VISION"
            title={
              <>
                Built for businesses that <Accent>run on customers.</Accent>
              </>
            }
          />
        </Reveal>

        <ul className="mt-12 flex flex-col md:mt-16">
          {reasons.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={i * 70}>
                <div className="group flex items-center gap-5 border-t border-white/10 py-5 transition-colors hover:border-brand md:gap-8 md:py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center bg-ink-soft text-brand transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-brand group-hover:text-ink">
                    <r.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <h3 className="text-lg font-bold text-white transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                      {r.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55 md:max-w-sm md:text-right md:text-base">
                      {r.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
