import { ArrowRight } from 'lucide-react'
import { SectionHeading, Accent } from '@/components/section-heading'

const signals = [
  {
    type: 'Upselling',
    heard: 'Customer asked about a higher-tier option. No recommendation was made.',
    reveals: 'Missed upgrade conversation at the point of sale',
  },
  {
    type: 'Cross-selling',
    heard: 'Customer mentioned a related need the team never explored.',
    reveals: 'Complementary product never offered',
  },
  {
    type: 'Sales opportunity',
    heard: 'Customer left intending to buy, but was not followed up.',
    reveals: 'Warm lead lost after the interaction',
  },
]

export function SalesIntelligence() {
  return (
    <section id="sales-intelligence" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        className="slash pointer-events-none absolute -left-48 bottom-0 hidden h-2/3 w-[28rem] bg-brand/[0.07] lg:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <SectionHeading
            index="04"
            eyebrow="Sales Intelligence"
            title={
              <>
                Every interaction is a <Accent>sales signal.</Accent>
              </>
            }
            intro="Customers tell you where revenue was left on the table. We listen for it systematically — and show you where, when and in which teams opportunities are being missed."
          />
          <ul className="flex flex-wrap gap-2">
            {['Upselling', 'Cross-selling', 'Missed opportunities', 'Frontline sales behaviour'].map((t) => (
              <li
                key={t}
                className="border border-white/20 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white/75"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">Example signals</p>
          {signals.map((s) => (
            <article
              key={s.type}
              className="grid items-stretch border border-white/15 bg-ink-soft md:grid-cols-[1fr_auto_1fr]"
            >
              <div className="flex flex-col gap-2 p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-white/45">Customer interaction</p>
                <p className="leading-relaxed text-white/85">{s.heard}</p>
              </div>
              <div className="flex items-center justify-center px-4 pb-2 md:pb-0" aria-hidden="true">
                <ArrowRight className="size-5 rotate-90 text-brand md:rotate-0" />
              </div>
              <div className="flex flex-col gap-2 border-t border-white/10 p-6 md:border-l md:border-t-0">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">{s.type}</p>
                <p className="font-bold leading-snug text-white">{s.reveals}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
