'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  brightness: number
  size: number
  cycle: number
  depth?: number
}

interface BokehCircle {
  x: number
  y: number
  r: number
  color: string
  blurRadius: number
  depth: number
}

type ThemeId = 'wave' | 'sparkle' | 'sun' | 'moon'

export function ThemeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const [theme, setTheme] = useState<ThemeId>('wave')

  // Listen for theme changes from the DOM
  useEffect(() => {
    const updateTheme = () => {
      const themeAttr = document.documentElement.getAttribute('data-theme') || 'wave'
      setTheme(themeAttr as ThemeId)
    }

    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

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

    // Initialize particles based on theme
    const initializeParticles = () => {
      const particles: Particle[] = []
      let particleCount = 120
      
      if (theme === 'sun') particleCount = 80
      if (theme === 'wave') particleCount = 300 // Hundreds of firefly particles for wave
      
      for (let i = 0; i < particleCount; i++) {
        let velocity = 0.8
        if (theme === 'sun') velocity = 0.3
        if (theme === 'wave') velocity = 0.4 // Slower drift for fireflies
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * velocity,
          vy: (Math.random() - 0.5) * velocity,
          brightness: Math.random(),
          size: theme === 'wave' ? Math.random() * 1.5 + 0.5 : Math.random() * 2 + 1,
          cycle: Math.random() * Math.PI * 2,
          depth: theme === 'wave' ? Math.random() : undefined,
        })
      }
      particlesRef.current = particles
    }

    initializeParticles()

    // Animation loop
    const animate = () => {
      const particles = particlesRef.current

      // Clear canvas based on theme
      if (theme === 'wave') {
        ctx.fillStyle = 'rgba(8, 8, 12, 0.12)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else if (theme === 'moon') {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.15)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else if (theme === 'sun') {
        ctx.fillStyle = 'rgba(250, 245, 240, 0.08)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else if (theme === 'sparkle') {
        ctx.fillStyle = 'rgba(15, 3, 25, 0.12)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Draw bokeh/gradient circles based on theme
      if (theme === 'wave') {
        // Large blurred cyan/turquoise bokeh circles at different depths for cinematic effect
        const bokehShapes: BokehCircle[] = [
          // Background layer (deeper, more blurred)
          { x: canvas.width * 0.15, y: canvas.height * 0.25, r: 300, color: 'rgba(16, 185, 129, 0.04)', blurRadius: 40, depth: 0.3 },
          { x: canvas.width * 0.85, y: canvas.height * 0.75, r: 350, color: 'rgba(6, 182, 212, 0.05)', blurRadius: 45, depth: 0.2 },
          
          // Mid layer
          { x: canvas.width * 0.5, y: canvas.height * 0.2, r: 280, color: 'rgba(34, 211, 238, 0.06)', blurRadius: 35, depth: 0.5 },
          { x: canvas.width * 0.1, y: canvas.height * 0.8, r: 320, color: 'rgba(6, 182, 212, 0.04)', blurRadius: 42, depth: 0.4 },
          { x: canvas.width * 0.9, y: canvas.height * 0.3, r: 300, color: 'rgba(34, 211, 238, 0.05)', blurRadius: 38, depth: 0.35 },
          
          // Foreground layer (sharper, more visible)
          { x: canvas.width * 0.35, y: canvas.height * 0.6, r: 250, color: 'rgba(103, 232, 249, 0.07)', blurRadius: 32, depth: 0.7 },
          { x: canvas.width * 0.7, y: canvas.height * 0.45, r: 270, color: 'rgba(22, 163, 74, 0.05)', blurRadius: 36, depth: 0.6 },
        ]

        bokehShapes.forEach((bokeh) => {
          const gradient = ctx.createRadialGradient(bokeh.x, bokeh.y, 0, bokeh.x, bokeh.y, bokeh.r)
          gradient.addColorStop(0, bokeh.color)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = gradient
          ctx.filter = `blur(${bokeh.blurRadius}px)`
          ctx.fillRect(bokeh.x - bokeh.r, bokeh.y - bokeh.r, bokeh.r * 2, bokeh.r * 2)
          ctx.filter = 'none'
        })
      } else if (theme === 'moon') {
        const bokehShapes = [
          { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 200, color: 'rgba(139, 92, 246, 0.06)' },
          { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 250, color: 'rgba(108, 92, 231, 0.05)' },
          { x: canvas.width * 0.5, y: canvas.height * 0.1, r: 180, color: 'rgba(196, 181, 253, 0.04)' },
        ]

        bokehShapes.forEach((bokeh) => {
          const gradient = ctx.createRadialGradient(bokeh.x, bokeh.y, 0, bokeh.x, bokeh.y, bokeh.r)
          gradient.addColorStop(0, bokeh.color)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = gradient
          ctx.fillRect(bokeh.x - bokeh.r, bokeh.y - bokeh.r, bokeh.r * 2, bokeh.r * 2)
        })
      } else if (theme === 'sun') {
        // Golden light rays effect
        const gradient = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, canvas.height)
        gradient.addColorStop(0, 'rgba(251, 146, 60, 0.05)')
        gradient.addColorStop(0.5, 'rgba(250, 204, 21, 0.03)')
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0.02)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Soft bokeh circles
        const bokehShapes = [
          { x: canvas.width * 0.3, y: canvas.height * 0.2, r: 150, color: 'rgba(251, 146, 60, 0.04)' },
          { x: canvas.width * 0.7, y: canvas.height * 0.5, r: 180, color: 'rgba(250, 204, 21, 0.03)' },
        ]

        bokehShapes.forEach((bokeh) => {
          const gradient = ctx.createRadialGradient(bokeh.x, bokeh.y, 0, bokeh.x, bokeh.y, bokeh.r)
          gradient.addColorStop(0, bokeh.color)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = gradient
          ctx.fillRect(bokeh.x - bokeh.r, bokeh.y - bokeh.r, bokeh.r * 2, bokeh.r * 2)
        })
      } else if (theme === 'sparkle') {
        const bokehShapes = [
          { x: canvas.width * 0.2, y: canvas.height * 0.3, r: 200, color: 'rgba(217, 70, 239, 0.08)' },
          { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 250, color: 'rgba(196, 181, 253, 0.06)' },
          { x: canvas.width * 0.5, y: canvas.height * 0.1, r: 180, color: 'rgba(240, 171, 252, 0.05)' },
        ]

        bokehShapes.forEach((bokeh) => {
          const gradient = ctx.createRadialGradient(bokeh.x, bokeh.y, 0, bokeh.x, bokeh.y, bokeh.r)
          gradient.addColorStop(0, bokeh.color)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = gradient
          ctx.fillRect(bokeh.x - bokeh.r, bokeh.y - bokeh.r, bokeh.r * 2, bokeh.r * 2)
        })
      }

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.cycle += 0.02

        // Wrap around edges
        particle.x = (particle.x + canvas.width) % canvas.width
        particle.y = (particle.y + canvas.height) % canvas.height

        // Add slight drift
        particle.vx *= 0.99
        particle.vy *= 0.99
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Limit velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2
          particle.vy = (particle.vy / speed) * 2
        }

        // Calculate brightness with pulsing
        const pulse = Math.sin(particle.cycle) * 0.3 + 0.7
        const brightness = Math.min(1, particle.brightness * pulse)

        // Draw particles based on theme
        if (theme === 'wave') {
          // Tiny glowing firefly particles with soft yellow-green light
          // Outer glow: soft yellow-green halo
          const glowRadius = particle.size * 12
          const glowGradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius)
          glowGradient.addColorStop(0, `rgba(132, 204, 22, ${brightness * 0.25})`)
          glowGradient.addColorStop(0.4, `rgba(163, 230, 53, ${brightness * 0.1})`)
          glowGradient.addColorStop(1, 'rgba(187, 247, 208, 0)')
          ctx.fillStyle = glowGradient
          ctx.fillRect(particle.x - glowRadius, particle.y - glowRadius, glowRadius * 2, glowRadius * 2)
          
          // Mid glow: warmer yellow tone
          const midGlowRadius = particle.size * 6
          const midGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, midGlowRadius)
          midGlow.addColorStop(0, `rgba(202, 210, 23, ${brightness * 0.4})`)
          midGlow.addColorStop(0.6, `rgba(251, 191, 36, ${brightness * 0.15})`)
          midGlow.addColorStop(1, 'rgba(253, 224, 71, 0)')
          ctx.fillStyle = midGlow
          ctx.fillRect(particle.x - midGlowRadius, particle.y - midGlowRadius, midGlowRadius * 2, midGlowRadius * 2)
          
          // Core: bright yellow-green firefly center
          ctx.fillStyle = `rgba(240, 253, 250, ${brightness * 0.95})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2)
          ctx.fill()
          
          // Inner bright core for intensity
          ctx.fillStyle = `rgba(134, 239, 172, ${brightness})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2)
          ctx.fill()
        } else if (theme === 'moon') {
          // Purple stars
          const gradientGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 6)
          gradientGlow.addColorStop(0, `rgba(196, 181, 253, ${brightness * 0.5})`)
          gradientGlow.addColorStop(0.5, `rgba(139, 92, 246, ${brightness * 0.15})`)
          gradientGlow.addColorStop(1, 'rgba(139, 92, 246, 0)')
          ctx.fillStyle = gradientGlow
          ctx.fillRect(particle.x - particle.size * 6, particle.y - particle.size * 6, particle.size * 12, particle.size * 12)

          ctx.fillStyle = `rgba(196, 181, 253, ${brightness * 0.9})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2)
          ctx.fill()
        } else if (theme === 'sun') {
          // Golden particles
          const gradientGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 4)
          gradientGlow.addColorStop(0, `rgba(251, 146, 60, ${brightness * 0.4})`)
          gradientGlow.addColorStop(0.5, `rgba(251, 191, 36, ${brightness * 0.1})`)
          gradientGlow.addColorStop(1, 'rgba(250, 204, 21, 0)')
          ctx.fillStyle = gradientGlow
          ctx.fillRect(particle.x - particle.size * 4, particle.y - particle.size * 4, particle.size * 8, particle.size * 8)

          ctx.fillStyle = `rgba(251, 191, 36, ${brightness * 0.7})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
          ctx.fill()
        } else if (theme === 'sparkle') {
          // Magenta sparkles
          const gradientGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 8)
          gradientGlow.addColorStop(0, `rgba(240, 171, 252, ${brightness * 0.7})`)
          gradientGlow.addColorStop(0.5, `rgba(217, 70, 239, ${brightness * 0.3})`)
          gradientGlow.addColorStop(1, 'rgba(217, 70, 239, 0)')
          ctx.fillStyle = gradientGlow
          ctx.fillRect(particle.x - particle.size * 8, particle.y - particle.size * 8, particle.size * 16, particle.size * 16)

          ctx.fillStyle = `rgba(240, 171, 252, ${brightness})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Inner bright core
          ctx.fillStyle = `rgba(243, 232, 255, ${brightness * 0.8})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2)
          ctx.fill()
        }
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
  }, [theme])

  // Get background gradient based on theme
  const getBackgroundGradient = () => {
    switch (theme) {
      case 'moon':
        return 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      case 'sun':
        return 'linear-gradient(135deg, #faf5f0 0%, #fff8f3 50%, #fffbf7 100%)'
      case 'sparkle':
        return 'linear-gradient(135deg, #0f0319 0%, #2d1b4e 50%, #1a0f33 100%)'
      case 'wave':
      default:
        return 'linear-gradient(135deg, #08080c 0%, #0d1117 50%, #051828 100%)'
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none transition-all duration-700"
      style={{ background: getBackgroundGradient() }}
    />
  )
}
