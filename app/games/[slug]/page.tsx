import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const games = [
  {
    slug: 'outback-legends',
    title: 'Outback Legends',
    year: '2019',
    tagline: 'A Journey Through Dreamtime',
    description: 'A cooperative journey across mythical Australian landscapes where players embody ancient spirits protecting sacred sites.',
    image: '/games/outback-legends.jpg',
    origin: 'Born from conversations with indigenous storytellers, honoring the dreamtime narratives and connection to land. This game celebrates the rich oral traditions of Australia\'s First Nations people, transforming ancient stories into interactive experiences.',
    howToPlay: {
      overview: 'Players work together as ancient spirits, navigating dreamtime paths by solving nature-based puzzles.',
      setup: 'Each player chooses an elemental spirit (Earth, Water, Fire, Wind) and receives unique ability cards. Sacred site tiles are placed face-down across the board, creating a mystical landscape to explore.',
      gameplay: [
        'Draw a dreamtime card revealing the next challenge',
        'Combine elemental powers to solve nature puzzles',
        'Restore balance to sacred sites by matching element patterns',
        'Collect story fragments to unlock the final ritual',
      ],
      winning: 'Victory comes from restoring balance to all sacred sites before the cycle ends. Players must work together, as individual victory is impossible.',
    },
    components: [
      '1 Game Board (Dreamtime Landscape)',
      '4 Spirit Tokens',
      '80 Element Cards',
      '24 Sacred Site Tiles',
      '40 Story Fragment Tokens',
      '1 Cycle Tracker',
    ],
    players: '2-4 players',
    duration: '45-60 minutes',
    difficulty: 'Medium',
    color: 'oklch(0.75 0.08 40)',
  },
  {
    slug: 'reef-architects',
    title: 'Reef Architects',
    year: '2021',
    tagline: 'Building Underwater Worlds',
    description: 'Build and protect a thriving coral ecosystem while adapting to changing ocean conditions.',
    image: '/games/reef-architects.jpg',
    origin: 'Conceived while diving the Great Barrier Reef, capturing the delicate balance of marine ecosystems. The game emerged from witnessing both the beauty and fragility of coral reefs, aiming to create awareness through engaging gameplay.',
    howToPlay: {
      overview: 'Players are reef architects placing coral tiles to create thriving ecosystems.',
      setup: 'Each player receives a reef board and starting coral tiles. Ocean condition cards are shuffled to create dynamic environmental challenges.',
      gameplay: [
        'Place a coral tile on your reef board',
        'Each coral type attracts specific marine life',
        'Create symbiotic chains for bonus points',
        'Adapt to changing ocean conditions each round',
      ],
      winning: 'Score points by achieving biodiversity goals while maintaining reef health. The player with the most balanced and diverse ecosystem wins.',
    },
    components: [
      '4 Reef Boards',
      '120 Coral Tiles (6 types)',
      '60 Marine Life Tokens',
      '40 Ocean Condition Cards',
      '4 Reference Cards',
      '1 Scorepad',
    ],
    players: '1-4 players',
    duration: '30-45 minutes',
    difficulty: 'Easy to Medium',
    color: 'oklch(0.65 0.15 200)',
  },
  {
    slug: 'desert-nomads',
    title: 'Desert Nomads',
    year: '2018',
    tagline: 'Trading in the Red Center',
    description: 'Trading and survival game set in the vast Australian interior, where resources are scarce and alliances are everything.',
    image: '/games/desert-nomads.jpg',
    origin: 'Created during a road trip across the Nullarbor Plain, inspired by the vastness and resilience of desert travelers. The endless horizon and harsh beauty of the outback informed every mechanic, emphasizing resource management and social dynamics.',
    howToPlay: {
      overview: 'Trade goods with other nomads while managing precious water and supplies.',
      setup: 'Players place their nomad tokens at different desert camps. Resource cards are distributed, with water being the most precious commodity.',
      gameplay: [
        'Move between desert camps and trading posts',
        'Trade goods with other players to fulfill contracts',
        'Navigate sandstorm events that deplete resources',
        'Form temporary alliances for mutual survival',
      ],
      winning: 'The player with the most successful trading routes when resources deplete wins. Balance cooperation and competition to thrive in the harsh desert.',
    },
    components: [
      '1 Desert Map Board',
      '4 Nomad Tokens',
      '80 Resource Cards',
      '30 Contract Cards',
      '20 Sandstorm Tokens',
      '50 Trade Coins',
      '4 Water Trackers',
    ],
    players: '3-5 players',
    duration: '60-90 minutes',
    difficulty: 'Medium to Hard',
    color: 'oklch(0.88 0.04 65)',
  },
  {
    slug: 'eucalyptus-grove',
    title: 'Eucalyptus Grove',
    year: '2022',
    tagline: 'Seasons of Growth',
    description: 'A peaceful strategy game about growing and maintaining a diverse eucalyptus forest ecosystem.',
    image: '/games/eucalyptus-grove.jpg',
    origin: 'Inspired by bushwalks through ancient forests, celebrating biodiversity and regeneration after fire. This game honors the resilience of Australian forests and the vital role of fire in ecosystem renewal.',
    howToPlay: {
      overview: 'Plant diverse eucalyptus species, attract native wildlife, and manage seasonal events.',
      setup: 'Each player receives a grove board and starter saplings. Season cards determine the order of phases throughout the game.',
      gameplay: [
        'Plant eucalyptus trees with unique wildlife benefits',
        'Attract koalas, birds, and other native species',
        'Manage seasonal events including controlled burns',
        'Balance growth with fire recovery cycles',
      ],
      winning: 'Create the most biodiverse grove by balancing tree diversity, wildlife habitats, and forest health. Points are awarded for ecological harmony.',
    },
    components: [
      '4 Grove Boards',
      '100 Tree Tiles (8 eucalyptus species)',
      '60 Wildlife Tokens',
      '40 Season Cards',
      '20 Fire Recovery Markers',
      '4 Biodiversity Trackers',
    ],
    players: '1-4 players',
    duration: '45-60 minutes',
    difficulty: 'Easy to Medium',
    color: 'oklch(0.45 0.12 150)',
  },
]

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const game = games.find((g) => g.slug === slug)
  
  if (!game) {
    return {
      title: 'Game Not Found',
    }
  }

  return {
    title: `${game.title} - Australia Game Blog`,
    description: game.description,
  }
}

export default async function GamePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const game = games.find((g) => g.slug === slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
                <span className="text-sm font-medium text-primary">{game.players}</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">{game.duration}</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">{game.difficulty}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                {game.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                {game.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
          {/* Description */}
          <div className="mb-16">
            <p className="text-xl text-foreground leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* Origin Story */}
          <section className="mb-16 p-8 lg:p-10 rounded-3xl bg-muted/30 border border-border/50">
            <h2 className="text-3xl font-bold text-foreground mb-4">Origin Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {game.origin}
            </p>
          </section>

          {/* How to Play */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">How to Play</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {game.howToPlay.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Setup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {game.howToPlay.setup}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Gameplay</h3>
                <div className="space-y-3">
                  {game.howToPlay.gameplay.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                        style={{ 
                          backgroundColor: `${game.color}`,
                          color: 'white'
                        }}
                      >
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">Winning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {game.howToPlay.winning}
                </p>
              </div>
            </div>
          </section>

          {/* Components */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Game Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {game.components.map((component, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3"
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: game.color }}
                  />
                  <span className="text-muted-foreground">{component}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Back to Games */}
          <div className="text-center pt-8 border-t border-border/50">
            <Link
              href="/#living-board-worlds"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              ← Back to all games
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
