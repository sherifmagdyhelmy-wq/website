import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          Quiet spaces, <em className="text-accent">made to last.</em>
        </h1>
        <div className="flex max-w-xs flex-col gap-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            An independent architecture and interiors studio designing calm, material-led homes,
            hospitality and workplaces since 2012.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            View selected work
            <ArrowDownRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative mt-12 aspect-[4/5] overflow-hidden rounded-sm md:mt-16 md:aspect-[16/8]">
        <Image
          src="/images/hero.png"
          alt="Sunlit living room with lime-washed walls, an arched window and a linen sofa"
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
        {[
          ['140+', 'Projects completed'],
          ['12', 'Years in practice'],
          ['18', 'Design awards'],
          ['4', 'Countries'],
        ].map(([value, label]) => (
          <div key={label} className="flex flex-col gap-1">
            <dt className="order-2 text-sm text-muted-foreground">{label}</dt>
            <dd className="order-1 font-serif text-4xl">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
