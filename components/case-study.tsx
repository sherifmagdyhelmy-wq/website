import { SectionHeading, Accent } from '@/components/section-heading'

const timeline = [
  {
    stage: 'Signal',
    body: 'Customers across several locations independently described the same frustration during feedback calls.',
  },
  {
    stage: 'Pattern',
    body: 'Analysis showed it was not isolated — it was a recurring operational issue tied to one specific process step.',
  },
  {
    stage: 'Escalation',
    body: 'NEW VISION escalated the finding to management with supporting customer verbatims and affected locations.',
  },
  {
    stage: 'Action',
    body: 'The client reviewed the process, made operational changes, and continued tracking the issue through ongoing feedback.',
    highlight: true,
  },
]

export function CaseStudy() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="08"
            eyebrow="Proven in the Field"
            title={
              <>
                From a repeated complaint to a <Accent>business decision.</Accent>
              </>
            }
          />
          <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-wider text-white/45">
            Client details anonymised for confidentiality
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/15 md:block" aria-hidden="true" />
          {timeline.map((t, i) => (
            <li key={t.stage} className="relative flex flex-col gap-5">
              <span
                className={t.highlight ? 'relative size-4 bg-brand' : 'relative size-4 border-2 border-white/50 bg-ink'}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs text-white/45">{`Step 0${i + 1}`}</p>
                <h3 className={t.highlight ? 'text-3xl font-black text-brand' : 'text-3xl font-black text-white'}>
                  {t.stage}
                </h3>
                <p className="leading-relaxed text-white/65">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
