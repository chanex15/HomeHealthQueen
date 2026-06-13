import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-20 pb-16 md:pt-28 md:pb-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,90,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 text-balance font-display text-4xl leading-[1.05] text-champagne md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.24}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
        <div className="mx-auto mt-10 h-px w-40 gold-hairline" />
      </div>
    </section>
  )
}
