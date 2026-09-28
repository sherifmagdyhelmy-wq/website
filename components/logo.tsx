import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" className={cn('h-7 w-auto', className)} aria-hidden="true">
      <polygon points="0,0 36,0 82,100 62,100 34,39 34,100 0,100" fill="#ffffff" />
      <polygon points="40,0 76,0 104,61 104,0 140,0 140,100 86,100" fill="var(--brand)" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark />
      <span className="text-lg font-black leading-none tracking-tight">
        <span className="text-brand">NEW</span> <span className="text-white">VISION</span>
      </span>
    </span>
  )
}
