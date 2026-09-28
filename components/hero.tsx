import { ArrowDown } from 'lucide-react'
import { CtaLink } from '@/components/cta-link'
import { HeroBackdrop } from '@/components/hero-backdrop'
import { CAREERS_HREF, CONTACT_HREF } from '@/lib/site'

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
  'Operational Insights',
  'Mystery Shopping',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-16">
      <HeroBackdrop />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <p
            className="rise flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/60"
            style={{ '--d': '0ms' } as React.CSSProperties}
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inset-0 animate-ping bg-brand/70" />
              <span className="relative size-2 bg-brand" />
            </span>
            Customer Intelligence Company
          </p>

          <h1
            className="rise text-balance text-[2.75rem] font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ '--d': '100ms' } as React.CSSProperties}
          >
            Customer Experience <span className="text-brand">&amp;</span> Sales Intelligence
          </h1>

          <p
            className="rise max-w-xl text-pretty text-lg leading-relaxed text-white/75 md:text-2xl"
            style={{ '--d': '200ms' } as React.CSSProperties}
          >
            Turning customer feedback and frontline observations into{' '}
            <span className="font-semibold text-white">measurable business actions.</span>
          </p>

          <div
            className="rise flex flex-col gap-3 sm:flex-row"
            style={{ '--d': '300ms' } as React.CSSProperties}
          >
            <CtaLink href={CONTACT_HREF} size="lg">
              Contact Us
            </CtaLink>
            <CtaLink href={CAREERS_HREF} variant="outline" size="lg">
              Apply for a Job
            </CtaLink>
          </div>
        </div>

        <div
          className="rise hidden flex-col justify-end lg:col-span-5 lg:flex"
          style={{ '--d': '400ms' } as React.CSSProperties}
        >
          <div className="border border-white/15 bg-ink-soft/80 p-8 backdrop-blur-sm">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/50">From signal to action</p>
            <ol className="flex flex-col">
              {signals.map((s, i) => (
                <li key={s.label} className="flex flex-col">
                  <div
                    className={
                      s.highlight
                        ? 'flex items-center justify-between gap-4 bg-brand p-5 text-ink'
                        : 'flex items-center justify-between gap-4 border border-white/15 p-5 text-white transition-colors hover:border-white/40'
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
                      <ArrowDown className="size-4 animate-bounce text-brand" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10 py-5">
        <p className="sr-only">Capabilities: {capabilities.join(', ')}</p>
        <div className="marquee flex w-max" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-10 pr-10">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-white/55"
                >
                  <span className="h-3 w-px rotate-[25deg] bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
