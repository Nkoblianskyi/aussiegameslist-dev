import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Australian Tabletop Games — Aussie Games List',
  description: 'Discover original Australian tabletop board games. No big brands — just independent, culturally rich games inspired by Australian landscapes and stories.',
}

const categories = [
  {
    id: 'cooperative',
    label: 'Cooperative',
    description: 'Games where players work together toward a shared goal — survival, exploration, or story resolution.',
    image: '/tabletop/cooperative.png',
    color: 'from-primary/10 to-primary/5',
    border: 'border-primary/20',
    accent: 'text-primary',
  },
  {
    id: 'strategy',
    label: 'Strategy',
    description: 'Deep decision-making games inspired by Australian landscapes — resource management, territory, and planning.',
    image: '/tabletop/strategy.png',
    color: 'from-accent/10 to-accent/5',
    border: 'border-accent/20',
    accent: 'text-accent',
  },
  {
    id: 'storytelling',
    label: 'Storytelling',
    description: 'Narrative-driven games built around Australian folklore, oral tradition, and character-driven journeys.',
    image: '/tabletop/storytelling.png',
    color: 'from-secondary/30 to-secondary/10',
    border: 'border-secondary/30',
    accent: 'text-foreground',
  },
]

const games = [
  {
    slug: 'outback-legends',
    title: 'Outback Legends',
    category: 'Cooperative',
    genre: 'Mythology · Adventure',
    description:
      'A cooperative journey across mythical Australian landscapes where players embody ancient spirits protecting sacred sites from disruption.',
    players: '2 – 5 players',
    duration: '60 – 90 min',
    image: '/games/outback-legends.jpg',
  },
  {
    slug: 'reef-architects',
    title: 'Reef Architects',
    category: 'Strategy',
    genre: 'Ecology · Tile Placement',
    description:
      'Build and protect a thriving coral ecosystem while adapting to changing ocean conditions and competing for biodiversity points.',
    players: '1 – 4 players',
    duration: '45 – 75 min',
    image: '/games/reef-architects.jpg',
  },
  {
    slug: 'desert-nomads',
    title: 'Desert Nomads',
    category: 'Strategy',
    genre: 'Trading · Survival',
    description:
      'A trading and survival game set in the vast Australian interior. Resources are scarce, alliances are fragile, and every decision matters.',
    players: '2 – 6 players',
    duration: '90 – 120 min',
    image: '/games/desert-nomads.jpg',
  },
  {
    slug: 'eucalyptus-grove',
    title: 'Eucalyptus Grove',
    category: 'Cooperative',
    genre: 'Nature · Resource Management',
    description:
      'A peaceful strategy game about growing and maintaining a diverse eucalyptus forest ecosystem through seasons and environmental shifts.',
    players: '1 – 4 players',
    duration: '40 – 60 min',
    image: '/games/eucalyptus-grove.jpg',
  },
]

const facts = [
  {
    label: 'What makes a game "Australian"?',
    body: 'We look for games rooted in Australian themes — the landscape, the culture, the relationship between people and land. No licensed tie-ins, no franchise spin-offs. Original creative vision only.',
  },
  {
    label: 'Are these games playable with family?',
    body: 'Most games featured on Aussie Games List are designed for a broad audience. Each listing notes player count and approximate play time so you can find the right fit.',
  },
  {
    label: 'How is this different from a standard review site?',
    body: 'We focus on the story behind each game — its origins, its design intent, the culture it draws from. We treat every game as a piece of creative work, not just a product.',
  },
]

export default function TabletopGamesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary/50" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Australian Tabletop Games
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-[1.05] mb-6">
                Games from
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  the Land Down Under
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A curated list of original Australian board games — cooperative, strategic, and story-driven.
                No big brands, no franchise games. Just authentic, independently conceived tabletop experiences
                rooted in Australian culture and landscape.
              </p>
            </div>

            {/* Hero image */}
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-border/40 shadow-2xl shadow-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Image
                src="/tabletop/hero.png"
                alt="Australian board games on a table"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-sm font-medium text-foreground/80 bg-background/60 backdrop-blur-md px-4 py-2 rounded-full border border-border/40">
                  Crafted for the Australian table
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 px-6 lg:px-12 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
              Game Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`relative overflow-hidden rounded-3xl border ${cat.border} bg-gradient-to-br ${cat.color} p-8`}
                >
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${cat.accent}`}>
                    {cat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Game List */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                All Games
              </h2>
              <span className="text-sm text-muted-foreground">{games.length} games listed</span>
            </div>

            <div className="space-y-6">
              {games.map((game, i) => (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="group flex flex-col md:flex-row gap-0 rounded-3xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-72 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:bg-gradient-to-l" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-8 flex-1">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {game.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {game.genre}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {game.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {game.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Players</p>
                          <p className="text-sm font-medium text-foreground">{game.players}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Duration</p>
                          <p className="text-sm font-medium text-foreground">{game.duration}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-block">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ / What makes a game Australian */}
        <section className="py-24 px-6 lg:px-12 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
              About this list
            </h2>
            <div className="space-y-4">
              {facts.map((fact, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-card/50 border border-border/50"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {fact.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {fact.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
