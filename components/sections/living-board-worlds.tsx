'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const games = [
  {
    id: 1,
    slug: 'outback-legends',
    title: 'Outback Legends',
    year: '2019',
    story: 'A cooperative journey across mythical Australian landscapes where players embody ancient spirits protecting sacred sites.',
    preview: 'Navigate dreamtime paths, solve nature puzzles, and unite the elements to restore balance.',
    image: '/games/outback-legends.jpg',
    color: 'oklch(0.75 0.08 40)',
    delay: '0ms',
  },
  {
    id: 2,
    slug: 'reef-architects',
    title: 'Reef Architects',
    year: '2021',
    story: 'Build and protect a thriving coral ecosystem while adapting to changing ocean conditions.',
    preview: 'Place coral tiles strategically, attract marine life, and create symbiotic relationships to score points.',
    image: '/games/reef-architects.jpg',
    color: 'oklch(0.65 0.15 200)',
    delay: '200ms',
  },
  {
    id: 3,
    slug: 'desert-nomads',
    title: 'Desert Nomads',
    year: '2018',
    story: 'Trading and survival game set in the vast Australian interior, where resources are scarce and alliances are everything.',
    preview: 'Trade goods, navigate sandstorms, and establish camps while managing water and supplies.',
    image: '/games/desert-nomads.jpg',
    color: 'oklch(0.88 0.04 65)',
    delay: '400ms',
  },
  {
    id: 4,
    slug: 'eucalyptus-grove',
    title: 'Eucalyptus Grove',
    year: '2022',
    story: 'A peaceful strategy game about growing and maintaining a diverse eucalyptus forest ecosystem.',
    preview: 'Plant trees, attract wildlife, and manage seasons to create the most biodiverse grove.',
    image: '/games/eucalyptus-grove.jpg',
    color: 'oklch(0.45 0.12 150)',
    delay: '600ms',
  },
]

export function LivingBoardWorlds() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="living-board-worlds" className="py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Living Board Worlds
        </h2>
        <p className="text-lg text-muted-foreground mb-20 max-w-2xl leading-relaxed">
          Each game is a floating island of imagination, inspired by
          Australia&apos;s diverse landscapes and rich storytelling traditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {games.map((game) => (
            <Link
              href={`/games/${game.slug}`}
              key={game.id}
              className="group relative block"
              style={{ animationDelay: game.delay }}
              onMouseEnter={() => setHoveredId(game.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5
                  animate-in fade-in slide-in-from-bottom-4"
                style={{
                  transform: hoveredId === game.id 
                    ? 'translateY(-8px)' 
                    : 'translateY(0)',
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Floating indicator */}
                <div
                  className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-40 blur-2xl transition-opacity duration-500"
                  style={{
                    backgroundColor: game.color,
                    opacity: hoveredId === game.id ? 0.6 : 0.3,
                  }}
                />

                {/* Content */}
                <div className="relative p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-foreground text-balance mb-4 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {game.story}
                  </p>

                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: hoveredId === game.id ? '200px' : '0px',
                      opacity: hoveredId === game.id ? 1 : 0,
                    }}
                  >
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        How to Play
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {game.preview}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-block">
                    Learn more →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
