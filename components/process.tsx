import { ArrowRight, PhoneCall, Ruler, BarChart3, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: PhoneCall,
    title: 'Contact',
    body: 'We contact all eligible customers included in the transaction data you provide.',
  },
  {
    icon: Ruler,
    title: 'Measure',
    body: 'Structured questionnaires capture experience, satisfaction and sales moments consistently.',
  },
  {
    icon: BarChart3,
    title: 'Analyze',
    body: 'Responses are validated, coded and analysed by branch, team, product and theme.',
  },
  {
    icon: Zap,
    title: 'Act',
    body: 'Critical issues are escalated immediately. Priority actions are delivered every month.',
  },
]

export function Process() {
  return (
    <section id="how-it-works" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="light"
          index="03"
          eyebrow="How It Works"
          title="A continuous loop from customer to action."
        />

        <ol className="mt-16 grid gap-4 md:grid-cols-4 md:gap-0">
          {steps.map((step, i) => {
            const last = i === steps.length - 1
            return (
              <li key={step.title} className="relative flex flex-col">
                <div
                  className={
                    last
                      ? 'flex h-full flex-col gap-8 bg-brand p-7 text-ink'
                      : 'flex h-full flex-col gap-8 border border-ink/15 bg-paper p-7 md:border-r-0'
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center bg-ink text-white">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-sm font-semibold">{`0${i + 1}`}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-black tracking-tight">{step.title}</h3>
                    <p className={last ? 'leading-relaxed text-ink/80' : 'leading-relaxed text-ink/65'}>
                      {step.body}
                    </p>
                  </div>
                </div>
                {!last ? (
                  <span
                    className="absolute -right-4 top-1/2 z-10 hidden size-8 -translate-y-1/2 items-center justify-center bg-ink text-brand md:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-4" />
                  </span>
                ) : null}
              </li>
            )
          })}
        </ol>

        <div className="mt-10 flex flex-col gap-6 bg-ink p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Full coverage</p>
            <p className="max-w-2xl text-balance text-2xl font-bold leading-snug md:text-3xl">
              Every eligible customer in your transaction data is contacted — not a sample.
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            You share the transaction data. We handle outreach, measurement, analysis and reporting.
          </p>
        </div>
      </div>
    </section>
  )
}
