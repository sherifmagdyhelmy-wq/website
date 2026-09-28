import { ListChecks, ShieldCheck, DatabaseZap, Lock, Scale } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  { icon: ListChecks, title: 'Structured Methodology', body: 'Consistent questionnaires, scripts and coding frameworks.' },
  { icon: ShieldCheck, title: 'Quality Control', body: 'Ongoing monitoring and review of fieldwork and outputs.' },
  { icon: DatabaseZap, title: 'Data Validation', body: 'Checks for completeness, consistency and accuracy.' },
  { icon: Lock, title: 'Confidentiality', body: 'Client and customer data handled securely and privately.' },
  { icon: Scale, title: 'Research Governance', body: 'Clear, ethical standards across every engagement.' },
]

export function Quality() {
  return (
    <section className="bg-paper-soft py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            tone="light"
            index="07"
            eyebrow="Quality & Data Integrity"
            title="Intelligence you can base decisions on."
            className="lg:col-span-7"
          />
          <div className="border-l-4 border-brand bg-paper p-6 lg:col-span-5">
            <p className="leading-relaxed text-ink/80">
              Our approach is aligned with internationally recognised market research quality principles,
              including <span className="font-bold text-ink">ISO 20252</span> and the{' '}
              <span className="font-bold text-ink">ICC/ESOMAR International Code</span>.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <li key={p.title} className="flex flex-col gap-6 bg-paper p-7">
              <p.icon className="size-6 text-ink" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
