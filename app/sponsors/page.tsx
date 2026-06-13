import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'
import { SPONSORS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Sponsors & Partners',
  description:
    'Meet the partners powering The One Woman Show 2026 and learn how your brand can stand alongside the women leading home health.',
}

const tiers = [
  {
    name: 'Crown Partner',
    price: 'Title Sponsor',
    features: [
      'Headline branding across all stages',
      'Keynote speaking opportunity',
      'Premium booth in the royal hall',
      'VIP gala table for ten',
    ],
  },
  {
    name: 'Royal Partner',
    price: 'Featured',
    features: [
      'Branding on main stage and signage',
      'Breakout session slot',
      'Exhibitor booth',
      'Four gala tickets',
    ],
  },
  {
    name: 'Court Partner',
    price: 'Supporting',
    features: [
      'Logo across digital channels',
      'Shared exhibitor space',
      'Two gala tickets',
      'Attendee gift bag insert',
    ],
  },
]

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        title="Sponsors & Partners"
        subtitle="The brands that believe in the women building the future of home health."
        image="/networking.png"
      />

      <section className="relative px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Proudly Backed By
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Our 2026 Sponsors
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {SPONSORS.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="group flex aspect-square items-center justify-center rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <Image
                    src={s.logo || '/placeholder.svg'}
                    alt={`${s.name} logo`}
                    width={180}
                    height={120}
                    className="max-h-20 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Become A Sponsor
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Partnership Tiers
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Put your brand in front of hundreds of decision-makers and
                founders shaping the home health industry. Choose the level of
                visibility that fits your goals.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-8 transition-transform duration-300 hover:-translate-y-2">
                  <h3 className="font-serif text-3xl text-primary">
                    {tier.name}
                  </h3>
                  <span className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {tier.price}
                  </span>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 text-primary">&#10022;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
                  >
                    Inquire Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
