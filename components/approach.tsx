import { ArrowRight, Check, HelpCircle, PhoneCall, Ruler, BarChart3, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Accordion, type AccordionEntry } from '@/components/accordion'

const label = 'font-mono text-xs uppercase tracking-[0.18em]'

function ProblemPanel() {
  const have = ['Transaction records', 'Branch and team reports', 'Sales figures', 'Customer databases']
  const missing = [
    'How customers actually experienced the service',
    'Recurring frontline issues no report shows',
    'Sales moments missed at the counter or on the call',
  ]
  return (
    <div className="grid gap-px bg-ink/15 md:grid-cols-2">
      <div className="flex flex-col gap-4 bg-paper-soft p-6">
        <p className={`${label} text-ink/55`}>What you have</p>
        <ul className="flex flex-col gap-3">
          {have.map((item) => (
            <li key={item} className="flex items-start gap-3 font-medium">
              <Check className="mt-0.5 size-4 shrink-0 text-ink/40" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 bg-ink p-6 text-white">
        <p className={`${label} text-brand`}>What&apos;s missing</p>
        <ul className="flex flex-col gap-3">
          {missing.map((item) => (
            <li key={item} className="flex items-start gap-3 font-semibold">
              <HelpCircle className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ProcessPanel() {
  const steps = [
    { icon: PhoneCall, title: 'Contact', body: 'All eligible customers in your transaction data.' },
    { icon: Ruler, title: 'Measure', body: 'Structured, consistent questionnaires.' },
    { icon: BarChart3, title: 'Analyze', body: 'Validated and analysed by branch, team and theme.' },
    { icon: Zap, title: 'Act', body: 'Critical issues escalated. Priority actions monthly.' },
  ]
  return (
    <div className="flex flex-col gap-4">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const last = i === steps.length - 1
          return (
            <li
              key={step.title}
              className={
                last
                  ? 'flex items-center gap-4 bg-brand p-4 text-ink sm:flex-col sm:items-stretch sm:p-5'
                  : 'flex items-center gap-4 border border-ink/15 p-4 transition-colors hover:border-ink/40 sm:flex-col sm:items-stretch sm:p-5'
              }
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 shrink-0 items-center justify-center bg-ink text-white">
                  <step.icon className="size-4" aria-hidden="true" />
                </span>
                {!last ? <ArrowRight className="nudge hidden size-4 text-brand sm:block" aria-hidden="true" /> : null}
              </div>
              <div>
                <p className="text-xl font-black tracking-tight">{step.title}</p>
                <p className={last ? 'mt-1 text-sm text-ink/80' : 'mt-1 text-sm text-ink/60'}>{step.body}</p>
              </div>
            </li>
          )
        })}
      </ol>
      <p className="bg-ink p-5 font-bold text-white">
        <span className="text-brand">Full coverage.</span> Every eligible customer in your transaction data is
        contacted &mdash; not a sample.
      </p>
    </div>
  )
}

function SalesPanel() {
  const signals = [
    { type: 'Upselling', heard: 'Asked about a higher tier. No recommendation made.' },
    { type: 'Cross-selling', heard: 'Mentioned a related need the team never explored.' },
    { type: 'Missed sale', heard: 'Left intending to buy, but was not followed up.' },
  ]
  return (
    <ul className="flex flex-col gap-2">
      {signals.map((s) => (
        <li
          key={s.type}
          className="group flex flex-col gap-2 border border-ink/15 p-5 transition-colors hover:border-brand sm:flex-row sm:items-center sm:gap-6"
        >
          <span className={`${label} w-36 shrink-0 font-semibold text-brand`}>{s.type}</span>
          <span className="flex-1 font-medium">{s.heard}</span>
        </li>
      ))}
    </ul>
  )
}

function OutputsPanel() {
  const outputs = [
    'Customer Experience metrics',
    'Customer Voice',
    'Operational Insights',
    'Sales Insights',
    'Priority actions',
  ]
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {outputs.map((o, i) => (
        <li
          key={o}
          className={
            i === outputs.length - 1
              ? 'flex items-center gap-3 bg-ink p-4 font-bold text-white'
              : 'flex items-center gap-3 border border-ink/15 p-4 font-bold'
          }
        >
          <span className="font-mono text-xs text-brand">{`0${i + 1}`}</span>
          {o}
        </li>
      ))}
    </ul>
  )
}

function QualityPanel() {
  const pillars = [
    'Structured methodology',
    'Quality control',
    'Data validation',
    'Confidentiality',
    'Research governance',
  ]
  return (
    <div className="flex flex-col gap-5">
      <ul className="flex flex-wrap gap-2">
        {pillars.map((p) => (
          <li key={p} className="flex items-center gap-2 border border-ink/15 px-3 py-2 text-sm font-semibold">
            <Check className="size-4 text-brand" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <p className="max-w-2xl text-pretty leading-relaxed text-ink/70">
        Our approach is aligned with internationally recognized market research quality principles, including{' '}
        <span className="font-semibold text-ink">ISO 20252</span> and the{' '}
        <span className="font-semibold text-ink">ICC/ESOMAR International Code</span>.
      </p>
    </div>
  )
}

function CasePanel() {
  const steps = [
    { tag: 'Heard', body: 'Customers across several locations described the same frustration.' },
    { tag: 'Identified', body: 'Analysis traced it to one recurring process step.' },
    { tag: 'Escalated', body: 'Findings reached management with verbatims and locations.' },
    { tag: 'Acted', body: 'The client changed the process and kept tracking it.' },
  ]
  return (
    <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li
          key={s.tag}
          className={
            i === steps.length - 1
              ? 'flex flex-col gap-2 bg-brand p-5 text-ink'
              : 'flex flex-col gap-2 border border-ink/15 p-5'
          }
        >
          <span className={`${label} font-semibold ${i === steps.length - 1 ? 'text-ink' : 'text-brand'}`}>
            {`0${i + 1} — ${s.tag}`}
          </span>
          <span className="text-sm font-medium leading-relaxed">{s.body}</span>
        </li>
      ))}
    </ol>
  )
}

const items: AccordionEntry[] = [
  {
    id: 'problem',
    title: 'The Business Problem',
    summary: 'You see every transaction. You don’t see the experience.',
    content: <ProblemPanel />,
  },
  {
    id: 'how-it-works',
    title: 'How It Works',
    summary: 'Contact → Measure → Analyze → Act.',
    content: <ProcessPanel />,
  },
  {
    id: 'sales-intelligence',
    title: 'Sales Intelligence',
    summary: 'Every customer interaction is a sales signal.',
    content: <SalesPanel />,
  },
  {
    id: 'what-you-get',
    title: 'What You Get',
    summary: 'Monthly intelligence, ready for decisions.',
    content: <OutputsPanel />,
  },
  {
    id: 'quality',
    title: 'Quality & Data Integrity',
    summary: 'Structured, validated and confidential by design.',
    content: <QualityPanel />,
  },
  {
    id: 'proven',
    title: 'Proven in the Field',
    summary: 'From one recurring complaint to a real process change.',
    content: <CasePanel />,
  },
]

export function Approach() {
  return (
    <section id="approach" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading tone="light" index="03" eyebrow="Our Approach" title="From customer feedback to action." />
        </Reveal>
        <Reveal delay={120} className="mt-10 md:mt-14">
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  )
}
