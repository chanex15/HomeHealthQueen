'use client'

import Image from 'next/image'
import { PILLARS } from '@/lib/site-data'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'

export function PillarsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
            Why You Belong Here
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl text-champagne md:text-5xl">
            Four pillars of the experience
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Every moment is designed to move you forward — from the first
            keynote to the final standing ovation.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
                    <Image
                      src={p.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-champagne">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
