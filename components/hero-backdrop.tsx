'use client'

import { useEffect, useRef } from 'react'
import { LogoMark } from '@/components/logo'

export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let scrollY = 0
    let pointerX = 0
    let pointerY = 0

    const apply = () => {
      frame = 0
      el.style.setProperty('--sy', String(scrollY))
      el.style.setProperty('--px', String(pointerX))
      el.style.setProperty('--py', String(pointerY))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onScroll = () => {
      scrollY = Math.min(window.scrollY, 1000)
      schedule()
    }
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      pointerX = event.clientX / window.innerWidth - 0.5
      pointerY = event.clientY / window.innerHeight - 0.5
      schedule()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="grid-lines absolute -inset-y-20 inset-x-0"
        style={{ transform: 'translate3d(0, calc(var(--sy, 0) * 0.12px), 0)' }}
      />
      <div
        className="absolute -right-48 top-0 h-full w-[30rem] md:-right-32 md:w-[42rem]"
        style={{
          transform:
            'translate3d(calc(var(--px, 0) * -40px), calc(var(--sy, 0) * 0.3px + var(--py, 0) * -24px), 0)',
        }}
      >
        <div className="slash drift h-full w-full bg-brand/[0.12]" />
      </div>
      <div
        className="absolute -right-10 top-1/4 h-2/3 w-40 md:right-40 md:w-64"
        style={{
          transform:
            'translate3d(calc(var(--px, 0) * 60px), calc(var(--sy, 0) * -0.15px + var(--py, 0) * 30px), 0)',
        }}
      >
        <div className="slash h-full w-full bg-white/[0.04]" />
      </div>
      <div
        className="absolute -bottom-10 right-4 hidden opacity-[0.05] lg:block"
        style={{ transform: 'translate3d(calc(var(--px, 0) * 24px), calc(var(--sy, 0) * 0.2px), 0)' }}
      >
        <LogoMark className="h-[26rem]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-white/10">
        <div className="scan h-full w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent" />
      </div>
    </div>
  )
}
