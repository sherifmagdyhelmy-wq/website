import { Gauge, MessageSquareQuote, Settings2, TrendingUp, ScanEye } from 'lucide-react'
import { SectionHeading, Accent } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Gauge,
    title: 'Customer Experience Measurement',
    body: 'Continuous measurement of how customers experience your service.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Voice of Customer',
    body: 'Real reasons and expectations, captured and made usable.',
  },
  {
    icon: Settings2,
    title: 'Operational Insights',
    body: 'Recurring frontline issues traced to source and escalated.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Intelligence',
    body: 'Missed upselling and cross-selling revealed in real interactions.',
  },
  {
    icon: ScanEye,
    title: 'Mystery Shopping',
    body: 'Objective evaluation of the frontline, as customers receive it.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="What We Do"
            title={
              <>
                One partner for customer <Accent>and</Accent> sales intelligence.
              </>
            }
          />
        </Reveal>

        <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-5">
          {services.map((s, i) => (
            <li key={s.title} className="bg-ink">
              <Reveal delay={i * 80} className="h-full">
                <div className="group relative flex h-full items-start gap-5 p-6 transition-colors duration-300 hover:bg-ink-soft sm:flex-col sm:gap-10 md:p-7">
                  <div className="flex items-center justify-between sm:w-full">
                    <span className="flex size-11 items-center justify-center border border-white/15 text-brand transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand group-hover:bg-brand group-hover:text-ink">
                      <s.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="hidden font-mono text-xs text-white/40 sm:block">{`0${i + 1}`}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold leading-tight text-white md:text-xl">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{s.body}</p>
                  </div>
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
