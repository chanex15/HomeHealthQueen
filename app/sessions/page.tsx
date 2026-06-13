import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Sessions & Agenda',
  description:
    'Explore the three-day agenda for The One Woman Show 2026 — keynotes, masterclasses, and breakout sessions for women in home health.',
}

const schedule = [
  {
    day: 'Day One',
    theme: 'Educate',
    date: 'Friday',
    sessions: [
      {
        time: '9:00 AM',
        title: 'Opening Coronation Keynote',
        desc: 'Setting the vision for three days of transformation.',
      },
      {
        time: '11:00 AM',
        title: 'The Compliance Crown',
        desc: 'Mastering ACHC accreditation and state regulations without losing your sanity.',
      },
      {
        time: '2:00 PM',
        title: 'Funding Your Empire',
        desc: 'Capital, lending, and grants tailored for home health founders.',
      },
      {
        time: '6:00 PM',
        title: 'Welcome Reception',
        desc: 'First-night cocktails and connections under the Vegas lights.',
      },
    ],
  },
  {
    day: 'Day Two',
    theme: 'Elevate',
    date: 'Saturday',
    sessions: [
      {
        time: '9:00 AM',
        title: 'Scaling to Multi-State',
        desc: 'Systems, staffing, and structure for growth that lasts.',
      },
      {
        time: '11:30 AM',
        title: 'The Brand of a Queen',
        desc: 'Positioning your agency as the premium choice in your market.',
      },
      {
        time: '2:00 PM',
        title: 'Breakout Masterclasses',
        desc: 'Choose your track: operations, marketing, clinical, or finance.',
      },
      {
        time: '8:00 PM',
        title: 'The Queen\u2019s Gala',
        desc: 'A black-tie celebration of every woman in the room.',
      },
    ],
  },
  {
    day: 'Day Three',
    theme: 'Implement',
    date: 'Sunday',
    sessions: [
      {
        time: '9:30 AM',
        title: 'Building Your 90-Day Plan',
        desc: 'Turn inspiration into an executable roadmap.',
      },
      {
        time: '11:00 AM',
        title: 'Investor & Partner Roundtables',
        desc: 'Sit at the table with the people who can fund your next chapter.',
      },
      {
        time: '1:00 PM',
        title: 'Closing Send-Off',
        desc: 'Commitments, celebration, and your crowning moment.',
      },
    ],
  },
]

export default function SessionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Agenda"
        title="Sessions & Schedule"
        subtitle="Three days. Three themes. One transformation. Here is how we build queens."
        image="/speaker-stage.png"
      />

      <section className="relative px-6 py-24 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-20">
          {schedule.map((day, di) => (
            <div key={day.day} className="relative">
              <Reveal>
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                      {day.date}
                    </span>
                    <h2 className="mt-2 font-serif text-4xl md:text-5xl">
                      {day.day}
                    </h2>
                  </div>
                  <span className="gold-gradient-text font-serif text-3xl italic md:text-4xl">
                    {day.theme}
                  </span>
                </div>
              </Reveal>

              <div className="flex flex-col">
                {day.sessions.map((s, si) => (
                  <Reveal key={s.title} delay={si * 0.06}>
                    <div className="group grid grid-cols-[80px_1fr] gap-4 border-b border-border/60 py-6 transition-colors hover:bg-card/50 md:grid-cols-[140px_1fr] md:gap-8">
                      <span className="font-mono text-sm text-primary md:text-base">
                        {s.time}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
