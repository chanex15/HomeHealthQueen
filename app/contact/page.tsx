'use client'

import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SITE } from '@/lib/site-data'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title="Contact Us"
        subtitle="Questions about tickets, sponsorship, or group rates? The court is listening."
        image="/speaker-stage.png"
      />

      <section className="relative px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl">
                  Let&apos;s connect
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Whether you want to reserve a group of seats, explore
                  sponsorship, or simply learn more, our team will respond
                  within two business days.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-5">
                <div className="rounded-xl border border-border bg-card/60 p-5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    Email
                  </span>
                  <p className="mt-2 text-foreground">
                    hello@thehomehealthqueen.com
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/60 p-5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    Venue
                  </span>
                  <p className="mt-2 text-foreground">{SITE.venue}</p>
                  <p className="text-sm text-muted-foreground">
                    {SITE.address}, {SITE.city}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/60 p-5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    Dates
                  </span>
                  <p className="mt-2 text-foreground">{SITE.dates}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First Name" name="firstName" />
                <Field label="Last Name" name="lastName" />
              </div>
              <Field label="Email" name="email" type="email" />
              <Field label="Subject" name="subject" />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {sent ? 'Message Sent' : 'Send Message'}
              </button>
              {sent && (
                <p className="text-center text-sm text-primary">
                  Thank you. We&apos;ll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>
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
