import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_HREF, NAV_LINKS } from '@/lib/site'

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand py-24 text-ink md:py-32">
      <div
        className="slash pointer-events-none absolute -right-32 top-0 hidden h-full w-[34rem] bg-ink/[0.08] md:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">Talk to NEW VISION</p>
        <h2 className="max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          Turn Customer Feedback Into Business Action.
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <a
            href={CONTACT_HREF}
            className="group inline-flex h-14 w-fit items-center gap-3 bg-ink px-8 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Talk to Our Team
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a href={CONTACT_HREF} className="font-semibold underline decoration-2 underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/new-vision-logo.jpg"
            alt="NEW VISION"
            width={1316}
            height={1180}
            className="h-auto w-36 -ml-3"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Customer Experience &amp; Sales Intelligence.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 font-mono text-xs text-white/40 md:px-8">
          {`© ${new Date().getFullYear()} NEW VISION. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
