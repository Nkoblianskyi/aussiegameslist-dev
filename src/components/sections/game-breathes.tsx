'use client'

import { useState, useEffect } from 'react'
import { Dice1, Users, Map, Trophy } from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: 'Gather Your Circle',
    description: 'Games begin with connection. Invite 2-6 players to join your table and choose your roles.',
    delay: 0,
  },
  {
    icon: Map,
    title: 'Set the Stage',
    description: 'Arrange the board, shuffle cards, and distribute starting resources. The world awakens.',
    delay: 200,
  },
  {
    icon: Dice1,
    title: 'Take Your Turn',
    description: 'Roll dice, draw cards, make decisions. Each choice ripples through the game world.',
    delay: 400,
  },
  {
    icon: Trophy,
    title: 'Discover Victory',
    description: 'Complete objectives, earn points, or achieve collective goals. Every ending tells a story.',
    delay: 600,
  },
]

export function GameBreathes() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...new Set([...prev, index])])
              }, steps[index].delay)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('game-breathes')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="game-breathes" className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance text-center">
          How the Game Breathes
        </h2>
        <p className="text-lg text-muted-foreground mb-20 text-center max-w-2xl mx-auto leading-relaxed">
          Rather than rigid rules, games flow like natural rhythms. Here&apos;s
          how play unfolds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isVisible = visibleSteps.includes(index)

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-8 w-0.5 h-24 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
