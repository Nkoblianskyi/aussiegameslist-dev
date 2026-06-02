'use client'

import { Navigation } from '@/src/components/navigation'
import { Footer } from '@/src/components/footer'
import { CookieBanner } from '@/src/components/cookie-banner'
import { HeroSection } from '@/src/components/sections/hero-section'
import { LivingBoardWorlds } from '@/src/components/sections/living-board-worlds'
import { OriginsTimeline } from '@/src/components/sections/origins-timeline'
import { GameBreathes } from '@/src/components/sections/game-breathes'
import { TableCulture } from '@/src/components/sections/table-culture'
import { AboutPreview } from '@/src/components/sections/about-preview'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LivingBoardWorlds />
      <OriginsTimeline />
      <GameBreathes />
      <TableCulture />
      <AboutPreview />
      <Footer />
      <CookieBanner />
    </div>
  )
}
