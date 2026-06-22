'use client'

import { useEffect, useRef } from 'react'

interface Firefly {
  x: number
  y: number
  vx: number
  vy: number
  brightness: number
  size: number
  cycle: number
}

export function FireflyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const firefliesRef = useRef<Firefly[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize fireflies
    const fireflies: Firefly[] = []
    for (let i = 0; i < 120; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        brightness: Math.random(),
        size: Math.random() * 2 + 1,
        cycle: Math.random() * Math.PI * 2,
      })
    }
    firefliesRef.current = fireflies

    // Animation loop
    const animate = () => {
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(8, 8, 12, 0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw bokeh circles
      const bokehShapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 200, color: 'rgba(168, 85, 247, 0.08)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 250, color: 'rgba(124, 58, 237, 0.06)' },
        { x: canvas.width * 0.5, y: canvas.height * 0.1, r: 180, color: 'rgba(192, 132, 252, 0.06)' },
        { x: canvas.width * 0.1, y: canvas.height * 0.9, r: 220, color: 'rgba(168, 85, 247, 0.05)' },
        { x: canvas.width * 0.9, y: canvas.height * 0.2, r: 200, color: 'rgba(124, 58, 237, 0.06)' },
      ]

      bokehShapes.forEach((bokeh) => {
        const gradient = ctx.createRadialGradient(bokeh.x, bokeh.y, 0, bokeh.x, bokeh.y, bokeh.r)
        gradient.addColorStop(0, bokeh.color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(bokeh.x - bokeh.r, bokeh.y - bokeh.r, bokeh.r * 2, bokeh.r * 2)
      })

      // Update and draw fireflies
      fireflies.forEach((fly) => {
        // Update position
        fly.x += fly.vx
        fly.y += fly.vy
        fly.cycle += 0.02

        // Bounce off walls with damping
        if (fly.x < 0 || fly.x > canvas.width) fly.vx *= -0.95
        if (fly.y < 0 || fly.y > canvas.height) fly.vy *= -0.95

        // Wrap around edges
        fly.x = (fly.x + canvas.width) % canvas.width
        fly.y = (fly.y + canvas.height) % canvas.height

        // Add slight drift
        fly.vx *= 0.99
        fly.vy *= 0.99
        fly.vx += (Math.random() - 0.5) * 0.1
        fly.vy += (Math.random() - 0.5) * 0.1

        // Limit velocity
        const speed = Math.sqrt(fly.vx * fly.vx + fly.vy * fly.vy)
        if (speed > 2) {
          fly.vx = (fly.vx / speed) * 2
          fly.vy = (fly.vy / speed) * 2
        }

        // Calculate brightness with pulsing
        const pulse = Math.sin(fly.cycle) * 0.3 + 0.7
        const brightness = Math.min(1, fly.brightness * pulse)

        // Draw firefly glow
        const gradientGlow = ctx.createRadialGradient(fly.x, fly.y, 0, fly.x, fly.y, fly.size * 8)
        gradientGlow.addColorStop(0, `rgba(168, 85, 247, ${brightness * 0.6})`)
        gradientGlow.addColorStop(0.5, `rgba(168, 85, 247, ${brightness * 0.2})`)
        gradientGlow.addColorStop(1, 'rgba(168, 85, 247, 0)')
        ctx.fillStyle = gradientGlow
        ctx.fillRect(fly.x - fly.size * 8, fly.y - fly.size * 8, fly.size * 16, fly.size * 16)

        // Draw firefly core
        ctx.fillStyle = `rgba(192, 132, 252, ${brightness})`
        ctx.beginPath()
        ctx.arc(fly.x, fly.y, fly.size, 0, Math.PI * 2)
        ctx.fill()

        // Add inner bright core
        ctx.fillStyle = `rgba(216, 180, 254, ${brightness * 0.8})`
        ctx.beginPath()
        ctx.arc(fly.x, fly.y, fly.size * 0.6, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #08080c 0%, #0d0b14 50%, #0a0a10 100%)' }}
    />
  )
}
