import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full overflow-hidden'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const variants = {
    primary:
      'bg-white/[0.06] text-zinc-100 border border-white/[0.1] hover:bg-white/[0.1] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    secondary:
      'bg-transparent text-zinc-300 border border-white/[0.08] hover:border-white/[0.16] hover:text-white',
    ghost: 'bg-transparent text-zinc-400 hover:text-white px-0',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
