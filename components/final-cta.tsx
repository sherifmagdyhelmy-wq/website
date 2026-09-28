import { Briefcase, MessageSquare } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { CAREERS_EMAIL, CAREERS_HREF, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

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
          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-8 bg-brand p-6 text-ink md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center bg-ink text-brand">
                  <MessageSquare className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">For businesses</p>
                  <p className="text-2xl font-black tracking-tight">Contact Us</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={CAREERS_HREF}
              className={cn(
                'group relative flex h-full flex-col gap-10 overflow-hidden p-6 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-8',
                'border border-white/20 bg-ink-soft hover:border-white/50',
              )}
            >
              <div className="relative flex items-center justify-between">
                <span className="flex size-12 items-center justify-center bg-brand text-ink">
                  <Briefcase className="size-5" aria-hidden="true" />
                </span>
              </div>
              <div className="relative flex flex-col gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Careers</p>
                <p className="text-3xl font-black tracking-tight md:text-4xl">Apply for a Job</p>
                <p className="max-w-sm leading-relaxed text-white/60">
                  Join a team turning customer insight into business action.
                </p>
                <p className="mt-2 font-mono text-sm text-white/80">{CAREERS_EMAIL}</p>
              </div>
            </a>
          </Reveal>
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
