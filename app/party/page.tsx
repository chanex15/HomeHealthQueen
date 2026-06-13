import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Party With The Queen',
  description:
    'The Queen\u2019s Gala — a black-tie celebration of the women shaping the future of home health. Music, dancing, and pure royalty.',
}

const highlights = [
  {
    title: 'Black-Tie Glamour',
    body: 'Bring your finest. The Queen\u2019s Gala is a night to dress like the royalty you are.',
  },
  {
    title: 'Live Entertainment',
    body: 'A live band, a DJ, and surprises designed to keep the dance floor full until midnight.',
  },
  {
    title: 'The Crowning Toast',
    body: 'We raise our glasses to every woman who dared to build something of her own.',
  },
]

export default function PartyPage() {
  return (
    <>
      <PageHero
        eyebrow="After Dark"
        title="Party With The Queen"
        subtitle="When the sessions end, the celebration begins. This is your night to shine."
        image="/gala-party.png"
      />

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, color-mix(in oklch, var(--color-primary) 22%, transparent), transparent 55%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                The Queen&apos;s Gala
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                A night fit for the women who run the kingdom.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-muted-foreground">
                After two days of learning and leveling up, we trade boardrooms
                for ballrooms. The Queen&apos;s Gala is the signature evening of
                The One Woman Show — a glittering celebration where connections
                turn into sisterhood and the entire room glows.
              </p>
            </Reveal>
            <div className="mt-2 flex flex-col gap-5">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.12 + i * 0.08}>
                  <div className="flex gap-4">
                    <span className="mt-1 text-2xl text-primary">&#9733;</span>
                    <div>
                      <h3 className="font-serif text-xl text-primary">
                        {h.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {h.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-primary/30" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/gala-party.png"
                  alt="Elegant women celebrating at a luxurious evening gala"
                  width={760}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-10 text-center md:p-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Dress Code
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Royal Black-Tie
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                Gowns, tuxedos, and a touch of gold. Wear what makes you feel
                unstoppable — this is the night the cameras come out and the
                crowns come on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
