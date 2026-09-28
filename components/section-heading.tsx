import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const light = tone === 'light'
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <p
        className={cn(
          'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]',
          light ? 'text-ink/60' : 'text-white/60',
        )}
      >
        <span className={cn('font-semibold', light ? 'text-ink' : 'text-brand')}>{index}</span>
        <span className={cn('h-px w-8', light ? 'bg-ink/30' : 'bg-white/30')} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'max-w-3xl text-balance text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl',
          light ? 'text-ink' : 'text-white',
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-lg leading-relaxed',
            light ? 'text-ink/70' : 'text-white/65',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-brand">{children}</span>
}
