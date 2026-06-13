import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaSection({
  title = 'Take The Next Step Forward',
  text = 'Step into a space built to elevate your knowledge, strengthen your leadership, and move your home health journey toward real, measurable success. Your next level starts with one decision.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,90,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-floaty rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl leading-tight text-champagne md:text-6xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {text}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-champagne transition-colors hover:border-gold hover:text-gold"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(212,175,90,0.55)]"
            >
              Register Now
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
