'use client'

import { useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export type AccordionEntry = {
  id: string
  title: string
  summary: string
  content: React.ReactNode
}

export function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const baseId = useId()
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})

  const toggle = (id: string) => {
    const next = openId === id ? null : id
    setOpenId(next)
    if (!next) return
    window.setTimeout(() => {
      const el = itemRefs.current[next]
      if (el && el.getBoundingClientRect().top < 72) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 520)
  }

  return (
    <ul className="border-t border-ink/15">
      {items.map((item, i) => {
        const open = openId === item.id
        const panelId = `${baseId}-${item.id}-panel`
        const buttonId = `${baseId}-${item.id}-button`
        return (
          <li
            key={item.id}
            id={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el
            }}
            className="scroll-mt-20 border-b border-ink/15"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="group flex w-full items-center gap-4 py-6 text-left md:gap-8 md:py-8"
              >
                <span
                  className={cn(
                    'hidden w-10 shrink-0 font-mono text-sm font-semibold transition-colors md:block',
                    open ? 'text-brand' : 'text-ink/40',
                  )}
                >
                  {`0${i + 1}`}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="text-xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:w-80 md:shrink-0 md:text-2xl">
                    {item.title}
                  </span>
                  <span className="text-pretty text-sm leading-relaxed text-ink/60 md:text-base">{item.summary}</span>
                </span>
                <span
                  className={cn(
                    'relative flex size-11 shrink-0 items-center justify-center border transition-colors duration-300',
                    open
                      ? 'border-brand bg-brand text-ink'
                      : 'border-ink/20 text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-white',
                  )}
                  aria-hidden="true"
                >
                  <span className="absolute h-0.5 w-4 bg-current" />
                  <span
                    className={cn(
                      'absolute h-4 w-0.5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      open ? 'rotate-90 scale-y-0' : 'rotate-0',
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!open}
                className="overflow-hidden"
              >
                <div
                  className={cn(
                    'pb-8 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:pb-10 md:pl-[4.5rem]',
                    open ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-2 opacity-0',
                  )}
                >
                  {item.content}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
