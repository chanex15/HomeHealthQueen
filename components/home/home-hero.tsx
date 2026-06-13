'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Crown3D } from '@/components/crown-3d'
import { Countdown } from '@/components/countdown'
import { SITE } from '@/lib/site-data'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-vegas.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,90,0.18),transparent_55%)]" />

      {/* 3D crown on the right */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <Crown3D />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.26em] text-gold backdrop-blur"
          >
            <Sparkles size={13} /> {SITE.edition}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-balance font-display text-5xl leading-[1.02] text-champagne md:text-7xl"
          >
            Empowering the{' '}
            <span className="gold-gradient-text">Next Generation</span>
            {' in Home Health & Group Homes'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/85 md:text-lg"
          >
            Step into a transformative event designed for strong, visionary women
            in home health. Build confidence, elevate your leadership, and gain
            the tools you need to grow your business, your impact, and your
            future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(212,175,90,0.55)]"
            >
              Reserve Your Seat
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/guest"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-champagne transition-colors hover:border-gold hover:text-gold"
            >
              See the Guests
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold/80">
              {SITE.dates} · {SITE.venue}
            </p>
            <Countdown />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-10 w-6 rounded-full border border-gold/40"
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-gold/70" />
        </motion.div>
      </div>
    </section>
  )
}
