import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'
import { SITE } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Location & Venue',
  description:
    'The One Woman Show 2026 takes place at Red Rock Resort Casino and Spa in Las Vegas, Nevada.',
}

const details = [
  { label: 'Venue', value: SITE.venue },
  { label: 'Address', value: `${SITE.address}, ${SITE.city}` },
  { label: 'Dates', value: SITE.dates },
  { label: 'Nearest Airport', value: 'Harry Reid International (LAS)' },
]

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Where It Happens"
        title="Location & Venue"
        subtitle="A desert oasis of luxury just minutes from the Las Vegas Strip."
        image="/venue-redrock.png"
      />

      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/venue-redrock.png"
                alt="Red Rock Resort exterior at dusk in the Las Vegas desert"
                width={760}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                The Setting
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                {SITE.venue}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-muted-foreground">
                Set against the backdrop of the Red Rock Canyon, this AAA Four
                Diamond resort blends desert serenity with world-class luxury.
                Spa days, fine dining, and elegant suites give you the perfect
                place to learn, connect, and recharge like the queen you are.
              </p>
            </Reveal>
            <dl className="mt-2 grid gap-4 sm:grid-cols-2">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.12 + i * 0.07}>
                  <div className="rounded-xl border border-border bg-card/60 p-5">
                    <dt className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                      {d.label}
                    </dt>
                    <dd className="mt-2 text-foreground">{d.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map to Red Rock Resort Casino and Spa"
                src="https://www.google.com/maps?q=Red+Rock+Casino+Resort+Spa,+11011+W+Charleston+Blvd,+Las+Vegas,+NV+89135&output=embed"
                className="h-[420px] w-full grayscale-[0.3] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
