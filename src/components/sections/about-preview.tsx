import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-8">
          {/* Abstract Australia Map */}
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-48">
              <svg
                viewBox="0 0 200 150"
                className="w-full h-full"
                fill="none"
              >
                {/* Stylized dot pattern forming Australia shape */}
                {Array.from({ length: 40 }).map((_, i) => {
                  const x = 20 + (i % 10) * 18
                  const y = 30 + Math.floor(i / 10) * 25
                  const size = Math.random() * 3 + 1
                  const opacity = 0.3 + Math.random() * 0.4
                  
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={size}
                      className="fill-primary animate-pulse"
                      style={{
                        opacity,
                        animationDelay: `${i * 50}ms`,
                        animationDuration: '3s',
                      }}
                    />
                  )
                })}
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Born from the Land Down Under
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Australia Game Blog celebrates the intersection of board gaming and
            Australian culture. We explore fictional games that could exist,
            inspired by our unique landscapes, stories, and traditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/about">Discover Our Story</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/blog">Read the Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
