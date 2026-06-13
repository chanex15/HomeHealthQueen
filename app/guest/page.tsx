import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Become a Guest',
  description:
    'Join The One Woman Show 2026 as a guest and step into a room full of visionary women shaping the future of home health and group homes.',
}

const perks = [
  {
    title: 'Front-Row Education',
    body: 'Three days of masterclasses, panels, and breakout sessions led by women who have built thriving home health and group home enterprises.',
  },
  {
    title: 'A Powerful Network',
    body: 'Connect with founders, clinicians, investors, and operators who understand your journey and want to see you win.',
  },
  {
    title: 'The Royal Experience',
    body: 'Curated meals, the Queen\u2019s gala, luxury accommodations, and moments of celebration designed to make you feel seen.',
  },
  {
    title: 'Implementation Tools',
    body: 'Walk away with frameworks, templates, and an action plan you can put to work in your business on Monday morning.',
  },
]

const tickets = [
  {
    name: 'The Lady',
    price: '$497',
    tagline: 'General admission',
    features: [
      'All three days of programming',
      'Access to keynote stages',
      'Welcome reception',
      'Digital resource vault',
    ],
    featured: false,
  },
  {
    name: 'The Duchess',
    price: '$897',
    tagline: 'Most popular',
    features: [
      'Everything in The Lady',
      'Reserved priority seating',
      'Invitation to the Queen\u2019s Gala',
      'Exclusive networking brunch',
      'Signed conference workbook',
    ],
    featured: true,
  },
  {
    name: 'The Queen',
    price: '$1,997',
    tagline: 'VIP experience',
    features: [
      'Everything in The Duchess',
      'Front-row VIP seating',
      'Private dinner with speakers',
      'One-on-one strategy session',
      'Luxury gift suite',
    ],
    featured: false,
  },
]

export default function GuestPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Become a Guest"
        subtitle="Your seat at the table is waiting. Step into a room built for women who lead."
        image="/women-leaders.png"
      />

      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/networking.png"
                alt="Women connecting at an upscale conference reception"
                width={720}
                height={820}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Why Attend
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                More than a conference. A coronation of your potential.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-muted-foreground">
                The One Woman Show is where ambition meets community. Whether
                you are launching your first group home or scaling a multi-state
                agency, you will leave with the strategy, relationships, and
                belief to rule your industry.
              </p>
            </Reveal>
            <div className="mt-2 grid gap-5 sm:grid-cols-2">
              {perks.map((perk, i) => (
                <Reveal key={perk.title} delay={0.1 + i * 0.07}>
                  <div className="rounded-xl border border-border bg-card/60 p-5">
                    <h3 className="mb-2 font-serif text-xl text-primary">
                      {perk.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {perk.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Choose Your Crown
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Reserve Your Experience
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {tickets.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-2 ${
                    tier.featured
                      ? 'border-primary bg-gradient-to-b from-primary/10 to-card shadow-[0_0_50px_-12px_var(--color-primary)]'
                      : 'border-border bg-card/60'
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {tier.tagline}
                  </span>
                  <h3 className="mt-3 font-serif text-3xl">{tier.name}</h3>
                  <p className="mt-2 font-serif text-5xl text-primary">
                    {tier.price}
                  </p>
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
                    href="/register"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                      tier.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-primary/40 text-primary hover:bg-primary/10'
                    }`}
                  >
                    Claim This Seat
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
