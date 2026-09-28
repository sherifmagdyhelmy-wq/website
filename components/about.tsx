import { Reveal } from '@/components/reveal'

const notUs = ['Not a call center', 'Not a generic BPO', 'Not a survey company']

export function About() {
  return (
    <section id="about" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
            <span className="font-semibold text-ink">01</span>
            <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
            Who We Are
          </p>
        </Reveal>
        <div className="flex flex-col gap-8 lg:col-span-8">
          <Reveal delay={80}>
            <p className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              Your ongoing, outsourced <span className="text-brand">customer intelligence</span> partner.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink/70">
              We work with businesses that run on large customer bases, transactions, branches and frontline teams
              &mdash; turning what customers experience into decisions leaders can act on.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="flex flex-wrap gap-2">
              {notUs.map((item) => (
                <li
                  key={item}
                  className="border border-ink/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink/60 line-through decoration-brand decoration-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
