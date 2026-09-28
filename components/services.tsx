import { Gauge, MessageSquareQuote, Settings2, TrendingUp, ScanEye } from 'lucide-react'
import { SectionHeading, Accent } from '@/components/section-heading'

const services = [
  {
    icon: Gauge,
    title: 'Customer Experience Measurement',
    body: 'Continuous, structured measurement of how customers experience your service across branches, channels and teams.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Voice of Customer',
    body: 'The real words, reasons and expectations of your customers — captured, categorised and made usable.',
  },
  {
    icon: Settings2,
    title: 'Operational Insights',
    body: 'Recurring frontline issues identified, traced to their source and escalated to the people who can fix them.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Intelligence',
    body: 'Missed upselling, cross-selling and sales opportunities revealed through real customer interactions.',
  },
  {
    icon: ScanEye,
    title: 'Mystery Shopping',
    body: 'Objective, standards-based evaluation of the frontline experience exactly as your customers receive it.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="What We Do"
            title={
              <>
                One partner for customer <Accent>and</Accent> sales intelligence.
              </>
            }
          />
          <p className="max-w-sm text-pretty leading-relaxed text-white/60">
            An ongoing, outsourced intelligence function — not a call center, not a one-off survey.
          </p>
        </div>

        <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="group relative flex flex-col gap-10 bg-ink p-7 transition-colors hover:bg-ink-soft"
            >
              <div className="flex items-center justify-between">
                <s.icon className="size-7 text-brand" aria-hidden="true" />
                <span className="font-mono text-xs text-white/40">{`0${i + 1}`}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold leading-tight text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{s.body}</p>
              </div>
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform group-hover:scale-x-100"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
