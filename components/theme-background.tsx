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
      
      if (theme === 'moon') particleCount = 250 // Hundreds of star particles
      if (theme === 'sun') particleCount = 150 // Subtle floating dust particles
      if (theme === 'wave') particleCount = 300 // Firefly particles
      if (theme === 'sparkle') particleCount = 280 // Glowing sparkle particles
      
      for (let i = 0; i < particleCount; i++) {
        let velocity = 0.8
        if (theme === 'moon') velocity = 0.25 // Very slow drift for stars
        if (theme === 'sun') velocity = 0.2 // Slow drift for dust
        if (theme === 'wave') velocity = 0.4 // Moderate drift for fireflies
        if (theme === 'sparkle') velocity = 0.35 // Slow drift for sparkles
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * velocity,
          vy: (Math.random() - 0.5) * velocity,
          brightness: Math.random(),
          size: theme === 'moon' ? Math.random() * 1.2 + 0.4 : 
                theme === 'sun' ? Math.random() * 1.8 + 0.6 :
                theme === 'wave' ? Math.random() * 1.5 + 0.5 :
                Math.random() * 1.6 + 0.5,
          cycle: Math.random() * Math.PI * 2,
          depth: Math.random(),
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
        // Large blurred soft-white and pale blue bokeh circles at different depths
        const bokehShapes: BokehCircle[] = [
          // Background layer (deeper, more blurred)
          { x: canvas.width * 0.15, y: canvas.height * 0.2, r: 320, color: 'rgba(203, 213, 225, 0.03)', blurRadius: 45, depth: 0.2 },
          { x: canvas.width * 0.85, y: canvas.height * 0.75, r: 300, color: 'rgba(139, 92, 246, 0.04)', blurRadius: 42, depth: 0.25 },
          
          // Mid layer
          { x: canvas.width * 0.5, y: canvas.height * 0.15, r: 280, color: 'rgba(168, 162, 255, 0.05)', blurRadius: 38, depth: 0.4 },
          { x: canvas.width * 0.1, y: canvas.height * 0.85, r: 290, color: 'rgba(196, 181, 253, 0.04)', blurRadius: 40, depth: 0.35 },
          { x: canvas.width * 0.9, y: canvas.height * 0.25, r: 270, color: 'rgba(203, 213, 225, 0.04)', blurRadius: 38, depth: 0.3 },
          
          // Foreground layer (sharper, more visible)
          { x: canvas.width * 0.35, y: canvas.height * 0.55, r: 260, color: 'rgba(226, 232, 240, 0.06)', blurRadius: 35, depth: 0.6 },
          { x: canvas.width * 0.7, y: canvas.height * 0.4, r: 240, color: 'rgba(168, 162, 255, 0.05)', blurRadius: 36, depth: 0.55 },
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
      } else if (theme === 'sun') {
        // Soft sunbeam/light-ray streaks
        const rayGradient = ctx.createLinearGradient(canvas.width * 0.3, -canvas.height * 0.2, canvas.width * 0.7, canvas.height * 1.2)
        rayGradient.addColorStop(0, 'rgba(251, 191, 36, 0.06)')
        rayGradient.addColorStop(0.3, 'rgba(251, 146, 60, 0.04)')
        rayGradient.addColorStop(0.7, 'rgba(250, 204, 21, 0.03)')
        rayGradient.addColorStop(1, 'rgba(252, 211, 77, 0.02)')
        ctx.fillStyle = rayGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        // Additional subtle horizontal light rays
        const horizontalRay = ctx.createLinearGradient(0, canvas.height * 0.25, canvas.width, canvas.height * 0.25)
        horizontalRay.addColorStop(0, 'rgba(252, 211, 77, 0)')
        horizontalRay.addColorStop(0.3, 'rgba(251, 191, 36, 0.03)')
        horizontalRay.addColorStop(0.5, 'rgba(250, 204, 21, 0.04)')
        horizontalRay.addColorStop(0.7, 'rgba(251, 146, 60, 0.03)')
        horizontalRay.addColorStop(1, 'rgba(252, 211, 77, 0)')
        ctx.fillStyle = horizontalRay
        ctx.fillRect(0, canvas.height * 0.15, canvas.width, canvas.height * 0.2)

        // Large blurred peach and golden-yellow bokeh circles
        const bokehShapes: BokehCircle[] = [
          // Background layer
          { x: canvas.width * 0.2, y: canvas.height * 0.15, r: 300, color: 'rgba(251, 191, 36, 0.05)', blurRadius: 42, depth: 0.25 },
          { x: canvas.width * 0.8, y: canvas.height * 0.8, r: 320, color: 'rgba(251, 146, 60, 0.04)', blurRadius: 45, depth: 0.2 },
          
          // Mid layer
          { x: canvas.width * 0.5, y: canvas.height * 0.25, r: 280, color: 'rgba(250, 204, 21, 0.06)', blurRadius: 38, depth: 0.45 },
          { x: canvas.width * 0.15, y: canvas.height * 0.7, r: 270, color: 'rgba(251, 146, 60, 0.05)', blurRadius: 40, depth: 0.35 },
          { x: canvas.width * 0.85, y: canvas.height * 0.3, r: 290, color: 'rgba(252, 211, 77, 0.04)', blurRadius: 39, depth: 0.3 },
          
          // Foreground layer
          { x: canvas.width * 0.4, y: canvas.height * 0.6, r: 260, color: 'rgba(251, 191, 36, 0.07)', blurRadius: 35, depth: 0.6 },
          { x: canvas.width * 0.65, y: canvas.height * 0.45, r: 250, color: 'rgba(250, 204, 21, 0.06)', blurRadius: 36, depth: 0.55 },
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
      } else if (theme === 'sparkle') {
        // Large blurred lavender and pink bokeh circles at different depths
        const bokehShapes: BokehCircle[] = [
          // Background layer (deeper, more blurred)
          { x: canvas.width * 0.15, y: canvas.height * 0.25, r: 310, color: 'rgba(196, 181, 253, 0.04)', blurRadius: 44, depth: 0.25 },
          { x: canvas.width * 0.85, y: canvas.height * 0.75, r: 330, color: 'rgba(217, 70, 239, 0.05)', blurRadius: 46, depth: 0.2 },
          
          // Mid layer
          { x: canvas.width * 0.5, y: canvas.height * 0.2, r: 290, color: 'rgba(240, 171, 252, 0.06)', blurRadius: 39, depth: 0.45 },
          { x: canvas.width * 0.1, y: canvas.height * 0.8, r: 300, color: 'rgba(196, 181, 253, 0.04)', blurRadius: 41, depth: 0.35 },
          { x: canvas.width * 0.9, y: canvas.height * 0.3, r: 280, color: 'rgba(217, 70, 239, 0.05)', blurRadius: 39, depth: 0.3 },
          
          // Foreground layer (sharper, more visible)
          { x: canvas.width * 0.35, y: canvas.height * 0.55, r: 270, color: 'rgba(240, 171, 252, 0.07)', blurRadius: 36, depth: 0.6 },
          { x: canvas.width * 0.7, y: canvas.height * 0.42, r: 260, color: 'rgba(196, 181, 253, 0.06)', blurRadius: 37, depth: 0.55 },
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
          // Twinkling white-blue star particles with gentle glow
          // Outer glow: soft blue-white halo
          const glowRadius = particle.size * 10
          const glowGradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius)
          glowGradient.addColorStop(0, `rgba(203, 213, 225, ${brightness * 0.15})`)
          glowGradient.addColorStop(0.4, `rgba(148, 163, 184, ${brightness * 0.06})`)
          glowGradient.addColorStop(1, 'rgba(148, 163, 184, 0)')
          ctx.fillStyle = glowGradient
          ctx.fillRect(particle.x - glowRadius, particle.y - glowRadius, glowRadius * 2, glowRadius * 2)
          
          // Mid glow: pale blue tone
          const midGlowRadius = particle.size * 5
          const midGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, midGlowRadius)
          midGlow.addColorStop(0, `rgba(168, 162, 255, ${brightness * 0.3})`)
          midGlow.addColorStop(0.6, `rgba(139, 92, 246, ${brightness * 0.1})`)
          midGlow.addColorStop(1, 'rgba(139, 92, 246, 0)')
          ctx.fillStyle = midGlow
          ctx.fillRect(particle.x - midGlowRadius, particle.y - midGlowRadius, midGlowRadius * 2, midGlowRadius * 2)
          
          // Core: bright star center
          ctx.fillStyle = `rgba(240, 248, 255, ${brightness * 0.95})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2)
          ctx.fill()
          
          // Inner bright point
          ctx.fillStyle = `rgba(196, 181, 253, ${brightness})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2)
          ctx.fill()
        } else if (theme === 'sun') {
          // Floating light particles like dust catching sunlight with warm glow
          // Outer glow: warm golden halo
          const glowRadius = particle.size * 9
          const glowGradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius)
          glowGradient.addColorStop(0, `rgba(251, 191, 36, ${brightness * 0.2})`)
          glowGradient.addColorStop(0.4, `rgba(252, 211, 77, ${brightness * 0.08})`)
          glowGradient.addColorStop(1, 'rgba(250, 204, 21, 0)')
          ctx.fillStyle = glowGradient
          ctx.fillRect(particle.x - glowRadius, particle.y - glowRadius, glowRadius * 2, glowRadius * 2)
          
          // Mid glow: warmer peach tone
          const midGlowRadius = particle.size * 5
          const midGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, midGlowRadius)
          midGlow.addColorStop(0, `rgba(251, 146, 60, ${brightness * 0.35})`)
          midGlow.addColorStop(0.6, `rgba(251, 191, 36, ${brightness * 0.12})`)
          midGlow.addColorStop(1, 'rgba(251, 146, 60, 0)')
          ctx.fillStyle = midGlow
          ctx.fillRect(particle.x - midGlowRadius, particle.y - midGlowRadius, midGlowRadius * 2, midGlowRadius * 2)
          
          // Core: soft glowing dust particle
          ctx.fillStyle = `rgba(254, 243, 224, ${brightness * 0.85})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2)
          ctx.fill()
          
          // Inner warm point
          ctx.fillStyle = `rgba(251, 191, 36, ${brightness * 0.7})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2)
          ctx.fill()
        } else if (theme === 'sparkle') {
          // Glowing sparkle/glitter particles with pink-purple shimmer
          // Outer glow: soft pink-purple shimmer halo
          const glowRadius = particle.size * 11
          const glowGradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowRadius)
          glowGradient.addColorStop(0, `rgba(240, 171, 252, ${brightness * 0.2})`)
          glowGradient.addColorStop(0.4, `rgba(217, 70, 239, ${brightness * 0.08})`)
          glowGradient.addColorStop(1, 'rgba(196, 181, 253, 0)')
          ctx.fillStyle = glowGradient
          ctx.fillRect(particle.x - glowRadius, particle.y - glowRadius, glowRadius * 2, glowRadius * 2)
          
          // Mid glow: vibrant magenta tone
          const midGlowRadius = particle.size * 6
          const midGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, midGlowRadius)
          midGlow.addColorStop(0, `rgba(217, 70, 239, ${brightness * 0.4})`)
          midGlow.addColorStop(0.6, `rgba(240, 171, 252, ${brightness * 0.15})`)
          midGlow.addColorStop(1, 'rgba(217, 70, 239, 0)')
          ctx.fillStyle = midGlow
          ctx.fillRect(particle.x - midGlowRadius, particle.y - midGlowRadius, midGlowRadius * 2, midGlowRadius * 2)
          
          // Core: bright glowing sparkle center
          ctx.fillStyle = `rgba(243, 232, 255, ${brightness * 0.95})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.7, 0, Math.PI * 2)
          ctx.fill()
          
          // Inner bright core with intense shimmer
          ctx.fillStyle = `rgba(240, 171, 252, ${brightness})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2)
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
        // Deep navy-to-black with indigo and violet undertones
        return 'linear-gradient(135deg, #0a0a14 0%, #0d0f2d 25%, #1a1a3e 50%, #1a0f33 75%, #0f0a1a 100%)'
      case 'sun':
        // Soft cream-to-warm-white with pale gold undertones
        return 'linear-gradient(135deg, #fffaf2 0%, #fef8f0 25%, #fefbf7 50%, #fffbf0 75%, #faf5f0 100%)'
      case 'sparkle':
        // Rich violet-to-magenta with deep purple undertones
        return 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 25%, #3d1e5c 50%, #2d1b4e 75%, #16051a 100%)'
      case 'wave':
      default:
        // Dark emerald-to-teal gradient
        return 'linear-gradient(135deg, #0a4d3d 0%, #0d5f52 25%, #0a6b61 50%, #086e6e 75%, #0a5d68 100%)'
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
