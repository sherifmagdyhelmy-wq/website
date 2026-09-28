import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function CtaLink({ href, children, variant = 'primary', size = 'md', className, onClick }: CtaLinkProps) {
  const primary = variant === 'primary'
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-bold transition-[color,border-color,transform] duration-300 active:scale-[0.98]',
        size === 'lg' ? 'h-14 px-7 text-base' : 'h-11 px-5 text-sm',
        primary ? 'bg-brand text-ink' : 'border border-white/25 text-white hover:border-white hover:text-ink',
        className,
      )}
    >
      <span
        className="absolute inset-y-0 -left-[15%] w-[130%] -translate-x-[105%] -skew-x-12 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
      <ArrowUpRight
        className="relative size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  )
}
