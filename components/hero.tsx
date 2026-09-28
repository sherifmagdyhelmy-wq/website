import { ArrowRight, ArrowDown } from 'lucide-react'
import { CONTACT_HREF } from '@/lib/site'

const signals = [
  { label: 'Customer feedback', detail: 'Every eligible customer, contacted' },
  { label: 'Frontline observations', detail: 'Branches, teams, service moments' },
  { label: 'Measurable business actions', detail: 'Prioritised, escalated, tracked', highlight: true },
]

const capabilities = [
  'Customer Experience',
  'Voice of Customer',
  'Customer Intelligence',
  'Sales Intelligence',
  'Mystery Shopping',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-16">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="slash pointer-events-none absolute -right-40 top-0 hidden h-full w-[38rem] bg-brand/10 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="size-2 bg-brand" aria-hidden="true" />
            Customer Intelligence Company
          </p>

          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Customer Experience <span className="text-brand">&amp;</span> Sales Intelligence
          </h1>

          <p className="max-w-xl text-pretty text-xl leading-relaxed text-white/80 md:text-2xl">
            Turning customer feedback and frontline observations into{' '}
            <span className="font-semibold text-white">measurable business actions.</span>
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT_HREF}
              className="group inline-flex h-14 items-center justify-center gap-3 bg-brand px-7 text-base font-bold text-ink transition-colors hover:bg-white"
            >
              Talk to Our Team
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center gap-3 border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:border-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end lg:col-span-5">
          <div className="border border-white/15 bg-ink-soft/80 p-6 backdrop-blur-sm md:p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              From signal to action
            </p>
            <ol className="flex flex-col">
              {signals.map((s, i) => (
                <li key={s.label} className="flex flex-col">
                  <div
                    className={
                      s.highlight
                        ? 'flex items-center justify-between gap-4 bg-brand p-5 text-ink'
                        : 'flex items-center justify-between gap-4 border border-white/15 p-5 text-white'
                    }
                  >
                    <div>
                      <p className="text-lg font-bold leading-tight">{s.label}</p>
                      <p className={s.highlight ? 'mt-1 text-sm text-ink/75' : 'mt-1 text-sm text-white/55'}>
                        {s.detail}
                      </p>
                    </div>
                    <span className="font-mono text-sm font-semibold">{`0${i + 1}`}</span>
                  </div>
                  {i < signals.length - 1 ? (
                    <div className="flex h-8 items-center pl-5" aria-hidden="true">
                      <ArrowDown className="size-4 text-brand" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-6 md:px-8">
          {capabilities.map((c) => (
            <li
              key={c}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-white/60"
            >
              <span className="h-3 w-px rotate-[25deg] bg-brand" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
