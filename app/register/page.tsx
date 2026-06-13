'use client'

import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { Countdown } from '@/components/countdown'

const tiers = [
  { id: 'lady', name: 'The Lady', price: '$497' },
  { id: 'duchess', name: 'The Duchess', price: '$897' },
  { id: 'queen', name: 'The Queen', price: '$1,997' },
]

export default function RegisterPage() {
  const [selected, setSelected] = useState('duchess')
  const [done, setDone] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Reserve Your Seat"
        title="Register"
        subtitle="Claim your place among the women rewriting the rules of home health."
        image="/women-leaders.png"
      />

      <section className="relative px-6 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Early Bird Pricing Ends Soon
              </span>
              <Countdown />
            </div>
          </Reveal>

          {done ? (
            <Reveal>
              <div className="rounded-2xl border border-primary/40 bg-card/60 p-12 text-center">
                <h2 className="font-serif text-4xl text-primary">
                  Welcome, Queen.
                </h2>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Your registration is confirmed. Check your inbox for your
                  royal welcome packet and event details. We can&apos;t wait to
                  see you in Las Vegas.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setDone(true)
                }}
                className="flex flex-col gap-8 rounded-2xl border border-border bg-card/60 p-8 md:p-10"
              >
                <div>
                  <h3 className="mb-4 font-serif text-2xl">
                    1. Choose your experience
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {tiers.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setSelected(t.id)}
                        className={`rounded-xl border p-5 text-left transition-all ${
                          selected === t.id
                            ? 'border-primary bg-primary/10 shadow-[0_0_30px_-12px_var(--color-primary)]'
                            : 'border-border hover:border-primary/40'
                        }`}
                      >
                        <span className="font-serif text-xl">{t.name}</span>
                        <span className="mt-1 block font-serif text-2xl text-primary">
                          {t.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-serif text-2xl">2. Your details</h3>
                  <div className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="First Name" name="firstName" />
                      <Field label="Last Name" name="lastName" />
                    </div>
                    <Field label="Email" name="email" type="email" />
                    <Field label="Business / Agency" name="company" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Complete Registration
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
}: {
  label: string
  name: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  )
}
