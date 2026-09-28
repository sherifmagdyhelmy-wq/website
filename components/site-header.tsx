'use client'

import { useState } from 'react'
import { Logo } from '@/components/logo'
import { CtaLink } from '@/components/cta-link'
import { CAREERS_HREF, CONTACT_HREF, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="NEW VISION home" onClick={close} className="transition-opacity hover:opacity-80">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  <span
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <CtaLink href={CAREERS_HREF} variant="outline" className="hidden md:inline-flex">
            Apply for a Job
          </CtaLink>
          <CtaLink href={CONTACT_HREF} className="hidden sm:inline-flex">
            Contact Us
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="relative inline-flex size-10 items-center justify-center text-white lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span
              className={cn(
                'absolute h-0.5 w-5 bg-current transition-transform duration-300',
                open ? 'rotate-45' : '-translate-y-1.5',
              )}
              aria-hidden="true"
            />
            <span
              className={cn('absolute h-0.5 w-5 bg-brand transition-opacity duration-200', open && 'opacity-0')}
              aria-hidden="true"
            />
            <span
              className={cn(
                'absolute h-0.5 w-5 bg-current transition-transform duration-300',
                open ? '-rotate-45' : 'translate-y-1.5',
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <nav id="mobile-nav" aria-label="Mobile" className="overflow-hidden" inert={!open}>
          <ul className="flex flex-col border-t border-white/10 px-5 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-base font-semibold text-white"
                >
                  {link.label}
                  <span className="h-3 w-px rotate-[25deg] bg-brand" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="grid grid-cols-2 gap-3 pt-5">
              <CtaLink href={CONTACT_HREF} onClick={close}>
                Contact Us
              </CtaLink>
              <CtaLink href={CAREERS_HREF} variant="outline" onClick={close}>
                Apply
              </CtaLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
