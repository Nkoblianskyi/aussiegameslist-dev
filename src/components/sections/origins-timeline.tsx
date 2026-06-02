'use client'

import { useRef } from 'react'

const timelineEvents = [
  {
    year: '2018',
    title: 'Desert Nomads',
    reason: 'Created during a road trip across the Nullarbor Plain, inspired by the vastness and resilience of desert travelers.',
    position: 'top',
  },
  {
    year: '2019',
    title: 'Outback Legends',
    reason: 'Born from conversations with indigenous storytellers, honoring the dreamtime narratives and connection to land.',
    position: 'bottom',
  },
  {
    year: '2021',
    title: 'Reef Architects',
    reason: 'Conceived while diving the Great Barrier Reef, capturing the delicate balance of marine ecosystems.',
    position: 'top',
  },
  {
    year: '2022',
    title: 'Eucalyptus Grove',
    reason: 'Inspired by bushwalks through ancient forests, celebrating biodiversity and regeneration after fire.',
    position: 'bottom',
  },
]

export function OriginsTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-32 px-6 lg:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Origins & Stories
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl leading-relaxed">
          A journey across time and landscape, showing when and why each game
          came to life.
        </p>

        <div className="relative overflow-x-auto pb-8" ref={scrollRef}>
          <div className="inline-flex gap-12 min-w-max px-6">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className="relative flex flex-col items-center animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Event Card */}
                <div
                  className={`w-80 p-6 rounded-2xl bg-card border border-border/50 shadow-lg mb-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    event.position === 'top' ? 'mb-8' : 'mt-32'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.reason}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-ping" />
                </div>

                {/* Year Label */}
                <div className="mt-6 text-center">
                  <span className="text-2xl font-bold text-foreground">
                    {event.year}
                  </span>
                </div>

                {/* Connector Line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute top-[50%] left-[50%] w-48 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </div>
            ))}
          </div>

          {/* Horizontal scroll line */}
          <div className="absolute top-[50%] left-0 right-0 h-0.5 bg-border/30" />
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8 italic">
          Scroll horizontally to explore the timeline →
        </p>
      </div>
    </section>
  )
}
