'use client'

import Image from 'next/image'
import { SPONSORS } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function SponsorsMarquee() {
  const row = [...SPONSORS, ...SPONSORS]
  return (
    <section className="border-y border-border bg-ink py-20">
      <Reveal className="mx-auto mb-12 max-w-2xl px-5 text-center">
        <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
          In Good Company
        </p>
        <h2 className="mt-4 font-display text-4xl text-champagne md:text-5xl">
          Event Sponsors
        </h2>
      </Reveal>

      <div className="marquee-paused relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-6">
          {row.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-border bg-card/40 px-6 transition-colors hover:border-gold/50"
              title={s.name}
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={160}
                height={70}
                className="max-h-16 w-auto object-contain opacity-85 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
