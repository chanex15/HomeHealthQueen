'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/site-data'

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:gap-8">
        {/* Venue */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="The One Woman Show crest"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-lg text-champagne">
              The One Woman Show
            </span>
          </div>
          <h4 className="mb-2 text-[11px] uppercase tracking-[0.28em] text-gold">
            Venue
          </h4>
          <p className="font-display text-xl text-champagne">{SITE.venue}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {SITE.address}
            <br />
            {SITE.city}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold/70">
            Nearby Hotel Options
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>JW Marriott Las Vegas Resort &amp; Spa</li>
            <li>La Quinta Inn &amp; Suites — Red Rock/Summerlin</li>
            <li>Hampton Inn &amp; Suites — Red Rock/Summerlin</li>
            <li>Suncoast Hotel and Casino</li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="md:px-6">
          <h4 className="mb-5 text-[11px] uppercase tracking-[0.28em] text-gold">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/register"
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                Conference Refund &amp; Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-5 text-[11px] uppercase tracking-[0.28em] text-gold">
            Newsletter
          </h4>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            Stay up to date with our latest news, receive exclusive deals, and
            more.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSent(true)
            }}
            className="space-y-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full rounded-full border border-input bg-card/60 px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-all hover:shadow-[0_0_24px_rgba(212,175,90,0.5)]"
            >
              {sent ? 'Subscribed' : 'Subscribe'}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © 2026 {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  )
}
