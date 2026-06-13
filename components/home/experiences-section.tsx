'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { EXPERIENCES } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

const IMAGES = [
  '/speaker-stage.png',
  '/networking.png',
  '/venue-redrock.png',
  '/women-leaders.png',
]

export function ExperiencesSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.34em] text-gold">
            The Experience
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl text-champagne md:text-5xl">
            More than a conference — a coronation
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Image panel */}
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl border border-border lg:order-1 lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={IMAGES[active]}
                  alt={EXPERIENCES[active].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Accordion list */}
          <div className="order-1 flex flex-col gap-3 lg:order-2">
            {EXPERIENCES.map((exp, i) => {
              const isActive = i === active
              return (
                <button
                  key={exp.title}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group rounded-2xl border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-gold/60 bg-card/70'
                      : 'border-border bg-card/30 hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-2xl tabular-nums transition-colors ${
                        isActive ? 'text-gold' : 'text-muted-foreground'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl text-champagne">
                      {exp.title}
                    </h3>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden pl-12 text-sm leading-relaxed text-muted-foreground"
                      >
                        {exp.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
