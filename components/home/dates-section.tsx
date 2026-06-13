'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { SITE } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function DatesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-ink py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
            Conference Dates
          </p>
          <h2 className="mt-4 font-display text-5xl text-champagne md:text-7xl">
            <span className="gold-gradient-text">{SITE.dates}</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Three days of learning, connection, and leadership growth for women
            in home health — hosted at the {SITE.venue} in {SITE.city}.
          </p>
          <Link
            href="/guest"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-gold transition-all hover:bg-primary hover:text-primary-foreground"
          >
            See the Guests
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
              <Image
                src="/speaker-stage.png"
                alt="Keynote speaker on the conference stage under a golden spotlight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold/20 bg-ink/60 p-5 backdrop-blur">
              <p className="font-display text-xl text-champagne">
                A stage built for queens
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Keynotes, panels, and masterclasses from industry royalty.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
