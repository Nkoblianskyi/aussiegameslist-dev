import { Navigation } from '@/src/components/navigation'
import { Footer } from '@/src/components/footer'
import { CookieBanner } from '@/src/components/cookie-banner'

const blogPosts = [
  {
    id: 1,
    title: 'Outback Legends: A Journey Through Dreamtime',
    excerpt: 'Explore the mechanics and storytelling behind our cooperative game set in mythical Australian landscapes.',
    category: 'Game Design',
    year: '2019',
    origin: 'Born from conversations with indigenous storytellers, honoring the dreamtime narratives and connection to land.',
    howToPlay: 'Players work together as ancient spirits, navigating dreamtime paths by solving nature-based puzzles. Each turn reveals new challenges that require combining elemental powers. Victory comes from restoring balance to all sacred sites before the cycle ends.',
    size: 'lg',
  },
  {
    id: 2,
    title: 'Reef Architects: Building Underwater Worlds',
    excerpt: 'Discover how coral placement and marine ecosystems create strategic depth in this environmental game.',
    category: 'Mechanics',
    year: '2021',
    origin: 'Conceived while diving the Great Barrier Reef, capturing the delicate balance of marine ecosystems.',
    howToPlay: 'Players are reef architects placing coral tiles to create thriving ecosystems. Each coral type attracts specific marine life, creating symbiotic chains. Score points by achieving biodiversity goals while adapting to ocean conditions.',
    size: 'md',
  },
  {
    id: 3,
    title: 'Gaming Under the Stars',
    excerpt: 'How outdoor board gaming became a cherished Australian tradition, from beach picnics to camping trips.',
    category: 'Culture',
    year: '2023',
    origin: 'Inspired by countless nights playing games around campfires and on coastal shores.',
    howToPlay: 'This is a cultural article exploring the tradition of outdoor gaming in Australia, not a game itself.',
    size: 'md',
  },
  {
    id: 4,
    title: 'Desert Nomads: Trading in the Red Center',
    excerpt: 'Survival, strategy, and social dynamics in the harsh beauty of Australia&apos;s interior.',
    category: 'Game Design',
    year: '2018',
    origin: 'Created during a road trip across the Nullarbor Plain, inspired by the vastness and resilience of desert travelers.',
    howToPlay: 'Trade goods with other nomads while managing precious water and supplies. Navigate sandstorms, establish camps, and form temporary alliances. The player with the most successful trading routes when resources deplete wins.',
    size: 'lg',
  },
  {
    id: 5,
    title: 'The Rise of Indie Tabletop in Australia',
    excerpt: 'Exploring the thriving community of independent game designers across the continent.',
    category: 'Community',
    year: '2023',
    origin: 'Documenting the creative explosion in Australian indie game design.',
    howToPlay: 'This is a community article, not a playable game.',
    size: 'md',
  },
  {
    id: 6,
    title: 'Eucalyptus Grove: Seasons of Growth',
    excerpt: 'A peaceful strategy game celebrating biodiversity and the resilience of Australian forests.',
    category: 'Game Design',
    year: '2022',
    origin: 'Inspired by bushwalks through ancient forests, celebrating biodiversity and regeneration after fire.',
    howToPlay: 'Plant diverse eucalyptus species, attract native wildlife, and manage seasonal events. Each tree has unique properties that benefit different animals. Create the most biodiverse grove by balancing growth, fire recovery, and wildlife habitats.',
    size: 'lg',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Stories & Games
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Deep dives into fictional games, their mechanics, origins, and the
              culture of tabletop gaming in Australia.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="break-inside-avoid mb-6 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className={`group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                  post.size === 'lg' ? 'lg:p-10' : ''
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Origin Story */}
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      Origin Story
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {post.origin}
                    </p>

                    {/* How to Play */}
                    {post.howToPlay && !post.howToPlay.includes('article') && (
                      <>
                        <h3 className="text-sm font-semibold text-foreground mb-2">
                          How to Play
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {post.howToPlay}
                        </p>
                      </>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
