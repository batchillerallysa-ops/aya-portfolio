'use client'

import { useEffect, useRef, useState } from 'react'

interface TrailParticle {
  x: number
  y: number
  life: number
  opacity: number
}

export function FireflyCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<TrailParticle[]>([])
  const animationRef = useRef<number>()
  const wingRotationRef = useRef(0)

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

    // Mouse move listener
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Add multiple trail particles for richer effect
      if (Math.random() > 0.5) {
        const particleCount = 2 + Math.floor(Math.random() * 3)
        for (let i = 0; i < particleCount; i++) {
          trailRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 24,
            y: e.clientY + (Math.random() - 0.5) * 24,
            life: 1,
            opacity: 0.7,
          })
        }
      }

      // Keep trail limited for performance
      if (trailRef.current.length > 50) {
        trailRef.current.splice(0, trailRef.current.length - 50)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', () => setIsVisible(true))

    // Animation loop for cursor
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw trail particles with premium light scattering
      trailRef.current = trailRef.current.filter((particle) => particle.life > 0)
      trailRef.current.forEach((particle) => {
        particle.life -= 0.04
        particle.opacity = particle.life * 0.7

        // Draw outer trail glow with soft fade
        const outerGlowTrail = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, 20)
        outerGlowTrail.addColorStop(0, `rgba(255, 228, 100, ${particle.opacity * 0.2})`)
        outerGlowTrail.addColorStop(0.4, `rgba(255, 215, 0, ${particle.opacity * 0.1})`)
        outerGlowTrail.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = outerGlowTrail
        ctx.fillRect(particle.x - 20, particle.y - 20, 40, 40)

        // Draw mid-tone trail glow
        const midGlowTrail = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, 12)
        midGlowTrail.addColorStop(0, `rgba(255, 215, 0, ${particle.opacity * 0.35})`)
        midGlowTrail.addColorStop(0.6, `rgba(255, 215, 0, ${particle.opacity * 0.08})`)
        midGlowTrail.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = midGlowTrail
        ctx.fillRect(particle.x - 12, particle.y - 12, 24, 24)

        // Draw trail particle with soft glow
        ctx.fillStyle = `rgba(255, 228, 100, ${particle.opacity * 0.8})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Draw bright core of trail
        ctx.fillStyle = `rgba(255, 255, 150, ${particle.opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 0.8, 0, Math.PI * 2)
        ctx.fill()
      })

      if (isVisible) {
        const x = mousePos.x
        const y = mousePos.y

        wingRotationRef.current += 0.15
        const wingFlap = Math.sin(wingRotationRef.current) * 0.3

        // Draw premium outer glow halo
        const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, 50)
        outerGlow.addColorStop(0, 'rgba(255, 215, 0, 0.25)')
        outerGlow.addColorStop(0.3, 'rgba(255, 215, 0, 0.12)')
        outerGlow.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = outerGlow
        ctx.fillRect(x - 50, y - 50, 100, 100)

        // Draw mid glow layer
        const midGlow = ctx.createRadialGradient(x, y, 0, x, y, 32)
        midGlow.addColorStop(0, 'rgba(255, 228, 100, 0.4)')
        midGlow.addColorStop(0.5, 'rgba(255, 215, 0, 0.15)')
        midGlow.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = midGlow
        ctx.fillRect(x - 32, y - 32, 64, 64)

        // Draw inner glow
        const innerGlow = ctx.createRadialGradient(x, y, 0, x, y, 20)
        innerGlow.addColorStop(0, 'rgba(255, 255, 150, 0.6)')
        innerGlow.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = innerGlow
        ctx.fillRect(x - 20, y - 20, 40, 40)

        // Draw translucent wings with flutter animation
        ctx.save()
        ctx.translate(x, y)
        ctx.globalAlpha = 0.5

        // Left wing with flutter
        ctx.save()
        ctx.rotate(-wingFlap * 0.4)
        ctx.fillStyle = 'rgba(102, 255, 255, 0.35)'
        ctx.beginPath()
        ctx.ellipse(-10, -2, 8, 14, -Math.PI / 5, 0, Math.PI * 2)
        ctx.fill()
        // Wing highlight
        ctx.strokeStyle = 'rgba(102, 255, 255, 0.6)'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.restore()

        // Right wing with flutter
        ctx.save()
        ctx.rotate(wingFlap * 0.4)
        ctx.fillStyle = 'rgba(102, 255, 255, 0.35)'
        ctx.beginPath()
        ctx.ellipse(10, -2, 8, 14, Math.PI / 5, 0, Math.PI * 2)
        ctx.fill()
        // Wing highlight
        ctx.strokeStyle = 'rgba(102, 255, 255, 0.6)'
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.restore()

        ctx.restore()

        // Draw firefly abdomen
        ctx.fillStyle = '#ffd700'
        ctx.beginPath()
        ctx.ellipse(x, y, 5, 7, 0, 0, Math.PI * 2)
        ctx.fill()

        // Draw glowing center
        const glowCenter = ctx.createRadialGradient(x, y, 0, x, y, 6)
        glowCenter.addColorStop(0, 'rgba(255, 255, 200, 0.8)')
        glowCenter.addColorStop(0.6, 'rgba(255, 228, 100, 0.5)')
        glowCenter.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = glowCenter
        ctx.fillRect(x - 6, y - 6, 12, 12)

        // Draw bright core
        ctx.fillStyle = '#ffeb3b'
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fill()

        // Draw intense inner dot
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', () => setIsVisible(true))
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos, isVisible])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-40 pointer-events-none"
      style={{ cursor: 'none' }}
    />
  )
}
