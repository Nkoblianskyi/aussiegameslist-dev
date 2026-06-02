'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { HeroSection } from '@/components/sections/hero-section'
import { LivingBoardWorlds } from '@/components/sections/living-board-worlds'
import { OriginsTimeline } from '@/components/sections/origins-timeline'
import { GameBreathes } from '@/components/sections/game-breathes'
import { TableCulture } from '@/components/sections/table-culture'
import { AboutPreview } from '@/components/sections/about-preview'

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
