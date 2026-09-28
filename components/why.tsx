import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    title: 'Continuous customer intelligence',
    body: 'An ongoing monthly rhythm — not a one-off project that goes out of date.',
  },
  {
    title: 'Escalation-first approach',
    body: 'Critical issues reach decision-makers immediately, not at the end of the month.',
  },
  {
    title: 'Operational understanding',
    body: 'We read feedback through the lens of branches, teams and processes.',
  },
  {
    title: 'Customer + Sales Intelligence',
    body: 'Experience and revenue opportunities captured in the same conversation.',
  },
  {
    title: 'No heavy system integration',
    body: 'Share your transaction data. No new platforms or IT projects required.',
  },
]

export function Why() {
  return (
    <section id="why" className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading tone="light" index="09" eyebrow="Why NEW VISION" title="Built for businesses that run on customers." />

        <ul className="mt-16 grid gap-px bg-ink/15 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex flex-col gap-10 bg-paper p-8">
              <span className="font-mono text-sm font-semibold text-ink/45">{`0${i + 1}`}</span>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight">{r.title}</h3>
                <p className="leading-relaxed text-ink/65">{r.body}</p>
              </div>
            </li>
          ))}
          <li className="flex flex-col justify-between gap-10 bg-ink p-8 text-white">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Our position</p>
            <p className="text-balance text-2xl font-extrabold leading-tight">
              Not a call center. Not a survey vendor. A customer intelligence partner.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
