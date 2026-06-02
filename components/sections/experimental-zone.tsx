'use client'

import { useEffect, useRef, useState } from 'react'

export function ExperimentalZone() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [shapes, setShapes] = useState<Array<{
    x: number
    y: number
    size: number
    color: string
    speedX: number
    speedY: number
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize shapes
    const colors = [
      'oklch(0.65 0.15 200 / 0.6)',
      'oklch(0.45 0.12 150 / 0.6)',
      'oklch(0.88 0.04 65 / 0.6)',
      'oklch(0.75 0.08 40 / 0.6)',
    ]

    const initialShapes = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 60 + 30,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }))
    setShapes(initialShapes)

    let animationId: number
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          // Move toward mouse
          const dx = mouseX - shape.x
          const dy = mouseY - shape.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const force = Math.min(100 / distance, 2)

          let newX = shape.x + shape.speedX + (dx / distance) * force * 0.1
          let newY = shape.y + shape.speedY + (dy / distance) * force * 0.1

          // Bounce off edges
          if (newX < 0 || newX > canvas.width) shape.speedX *= -1
          if (newY < 0 || newY > canvas.height) shape.speedY *= -1

          newX = Math.max(0, Math.min(canvas.width, newX))
          newY = Math.max(0, Math.min(canvas.height, newY))

          // Draw shape
          ctx.beginPath()
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2)
          ctx.fillStyle = shape.color
          ctx.fill()

          // Draw connecting lines
          prevShapes.forEach((otherShape) => {
            const dist = Math.sqrt(
              Math.pow(shape.x - otherShape.x, 2) +
                Math.pow(shape.y - otherShape.y, 2)
            )
            if (dist < 200) {
              ctx.beginPath()
              ctx.moveTo(shape.x, shape.y)
              ctx.lineTo(otherShape.x, otherShape.y)
              ctx.strokeStyle = `oklch(0.5 0.1 160 / ${0.3 - dist / 600})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })

          return { ...shape, x: newX, y: newY }
        })
      )

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            The Dance of Play
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An abstract representation of how games connect us, move us, and
            create patterns of interaction.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm">
          <canvas
            ref={canvasRef}
            className="w-full h-[500px] cursor-crosshair"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          Move your cursor to interact with the elements
        </p>
      </div>
    </section>
  )
}
