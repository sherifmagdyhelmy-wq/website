import { Check, HelpCircle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const have = [
  'Transaction records and volumes',
  'Branch and team activity reports',
  'Sales figures and targets',
  'Customer databases',
]

const missing = [
  'How customers actually experienced the service',
  'Why a customer did not buy more — or did not return',
  'Recurring frontline issues no report shows',
  'Sales moments that were missed at the counter or on the call',
]

export function Problem() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="light"
          index="01"
          eyebrow="The Business Problem"
          title={
            <>
              You see every transaction.
              <br className="hidden md:block" /> You don&apos;t see the experience.
            </>
          }
          intro="Large customer bases generate enormous activity. But activity data only tells you what happened — not what customers felt, what went wrong on the frontline, or what revenue walked out the door."
        />

        <div className="mt-16 grid gap-px bg-ink/15 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-6 bg-paper p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/55">What you have</p>
            <ul className="flex flex-col gap-4">
              {have.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg font-medium">
                  <Check className="mt-1 size-5 shrink-0 text-ink/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center bg-ink px-6 py-8 md:w-40 md:py-0">
            <p className="text-center font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand md:[writing-mode:vertical-rl] md:rotate-180">
              The Experience Gap
            </p>
          </div>

          <div className="flex flex-col gap-6 bg-paper-soft p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/55">What&apos;s missing</p>
            <ul className="flex flex-col gap-4">
              {missing.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg font-semibold">
                  <HelpCircle className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
