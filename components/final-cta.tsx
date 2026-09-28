import { ArrowUpRight, Briefcase, MessageSquare } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Reveal } from '@/components/reveal'
import { CAREERS_EMAIL, CAREERS_HREF, CONTACT_EMAIL, CONTACT_HREF, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

const actions = [
  {
    href: CONTACT_HREF,
    icon: MessageSquare,
    eyebrow: 'For businesses',
    title: 'Contact Us',
    body: 'Talk to our team about your customers, branches and goals.',
    meta: CONTACT_EMAIL,
    primary: true,
  },
  {
    href: CAREERS_HREF,
    icon: Briefcase,
    eyebrow: 'Careers',
    title: 'Apply for a Job',
    body: 'Join a team turning customer insight into business action.',
    meta: CAREERS_EMAIL,
    primary: false,
  },
]

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-4xl text-balance text-4xl font-black leading-[0.98] tracking-tight text-white md:text-6xl lg:text-7xl">
            Turn Customer Feedback Into <span className="text-brand">Business Action.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 md:mt-16 md:grid-cols-2">
          {actions.map((a, i) => (
            <Reveal key={a.title} delay={100 + i * 100}>
              <a
                href={a.href}
                className={cn(
                  'group relative flex h-full flex-col gap-10 overflow-hidden p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-8',
                  a.primary ? 'bg-brand text-ink' : 'border border-white/20 bg-ink-soft text-white hover:border-white/50',
                )}
              >
                <span
                  className={cn(
                    'slash pointer-events-none absolute -right-16 top-0 h-full w-40 translate-x-10 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100',
                    a.primary ? 'bg-ink/10' : 'bg-brand/15',
                  )}
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center',
                      a.primary ? 'bg-ink text-brand' : 'bg-brand text-ink',
                    )}
                  >
                    <a.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center border transition-all duration-300 group-hover:rotate-45',
                      a.primary ? 'border-ink/30' : 'border-white/25',
                    )}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </span>
                </div>
                <div className="relative flex flex-col gap-2">
                  <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', a.primary ? 'text-ink/70' : 'text-brand')}>
                    {a.eyebrow}
                  </p>
                  <p className="text-3xl font-black tracking-tight md:text-4xl">{a.title}</p>
                  <p className={cn('max-w-sm leading-relaxed', a.primary ? 'text-ink/75' : 'text-white/60')}>{a.body}</p>
                  <p className={cn('mt-2 font-mono text-sm', a.primary ? 'text-ink' : 'text-white/80')}>{a.meta}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-white/50">Customer Experience &amp; Sales Intelligence</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-xs text-white/40">{`© ${new Date().getFullYear()} NEW VISION`}</p>
      </div>
    </footer>
  )
}
