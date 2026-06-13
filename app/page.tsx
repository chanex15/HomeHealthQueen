import { HomeHero } from '@/components/home/home-hero'
import { PillarsSection } from '@/components/home/pillars-section'
import { DatesSection } from '@/components/home/dates-section'
import { ExperiencesSection } from '@/components/home/experiences-section'
import { SponsorsMarquee } from '@/components/home/sponsors-marquee'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PillarsSection />
      <DatesSection />
      <ExperiencesSection />
      <SponsorsMarquee />
      <CtaSection />
    </>
  )
}
