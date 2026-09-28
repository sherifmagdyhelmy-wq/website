import { SectionHeading } from '@/components/section-heading'

const outputs = [
  {
    title: 'Customer Experience Metrics',
    body: 'Satisfaction and experience scores by branch, team, channel and period.',
  },
  {
    title: 'Customer Voice',
    body: 'Categorised customer comments and themes, in their own words.',
  },
  {
    title: 'Operational Insights',
    body: 'Recurring issues, root causes and where they occur.',
  },
  {
    title: 'Sales Insights',
    body: 'Missed upselling, cross-selling and sales opportunities, mapped.',
  },
  {
    title: 'Priority Actions',
    body: 'A clear, ranked list of what to fix first — and who owns it.',
    highlight: true,
  },
]

export function Deliverables() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              tone="light"
              index="05"
              eyebrow="What You Get"
              title="Monthly intelligence, ready for decisions."
              intro="Not raw data. Clear outputs your leadership and operations teams can act on."
            />
          </div>
        </div>

        <ol className="flex flex-col lg:col-span-8">
          {outputs.map((o, i) => (
            <li
              key={o.title}
              className={
                o.highlight
                  ? 'grid grid-cols-[auto_1fr] items-baseline gap-6 bg-ink p-6 text-white md:grid-cols-[5rem_1fr_1.2fr] md:gap-8 md:p-8'
                  : 'grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-ink/15 p-6 md:grid-cols-[5rem_1fr_1.2fr] md:gap-8 md:p-8'
              }
            >
              <span
                className={
                  o.highlight
                    ? 'font-mono text-sm font-semibold text-brand'
                    : 'font-mono text-sm font-semibold text-ink/50'
                }
              >
                {`0${i + 1}`}
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{o.title}</h3>
              <p
                className={
                  o.highlight
                    ? 'col-start-2 leading-relaxed text-white/70 md:col-start-auto'
                    : 'col-start-2 leading-relaxed text-ink/65 md:col-start-auto'
                }
              >
                {o.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
