'use client'

import { useEffect, useState, useRef } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Canvas animation for organic Australian landscape-inspired shapes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create organic flowing shapes inspired by Australian landscapes
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const offsetX = Math.sin(time + i * 2) * 100
        const offsetY = Math.cos(time + i * 1.5) * 50

        for (let j = 0; j <= 360; j += 10) {
          const angle = (j * Math.PI) / 180
          const radius = 150 + Math.sin(time * 2 + j * 0.1 + i) * 30
          const x = canvas.width / 2 + offsetX + Math.cos(angle) * radius
          const y = canvas.height / 2 + offsetY + Math.sin(angle) * radius * 0.6

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          300
        )

        if (i === 0) {
          gradient.addColorStop(0, 'rgba(112, 186, 150, 0.08)')
          gradient.addColorStop(1, 'rgba(112, 186, 150, 0)')
        } else if (i === 1) {
          gradient.addColorStop(0, 'rgba(76, 154, 191, 0.08)')
          gradient.addColorStop(1, 'rgba(76, 154, 191, 0)')
        } else {
          gradient.addColorStop(0, 'rgba(212, 165, 122, 0.08)')
          gradient.addColorStop(1, 'rgba(212, 165, 122, 0)')
        }

        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, oklch(0.45 0.12 150) 0%, transparent 70%)',
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.15 200) 0%, transparent 70%)',
            right: `${mousePosition.x * 0.015}px`,
            bottom: `${mousePosition.y * 0.015}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl" />
      </div>

      {/* Floating Australian-inspired elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Eucalyptus leaf shapes */}
        <div className="absolute top-[15%] left-[10%] w-20 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-sm rotate-45 animate-float" />
        <div className="absolute top-[60%] right-[15%] w-24 h-36 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-sm -rotate-12 animate-float-delayed" />
        <div className="absolute bottom-[20%] left-[20%] w-16 h-28 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-sm rotate-[30deg] animate-float-slow" />

        {/* Small accent dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20 animate-pulse"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Decorative line */}
        <div className="mb-8 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Welcome to
          </span>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Main Heading */}
        <h1 className="relative text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-balance leading-[1.05] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Stories Told
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
            Through Play
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          Discover fictional board games inspired by Australian culture, where every roll tells a tale and every move creates memories
        </p>

        {/* Decorative bottom element */}
        <div className="mt-12 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-150" style={{ animationDelay: '150ms' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-300" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
