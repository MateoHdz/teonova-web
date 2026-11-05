import { type ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        glass rounded-2xl p-6
        ${hover ? 'transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05] hover:-translate-y-0.5' : ''}
        ${glow ? 'hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
