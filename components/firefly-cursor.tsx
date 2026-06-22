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

      // Add trail particles
      if (Math.random() > 0.7) {
        trailRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          life: 1,
          opacity: 0.6,
        })
      }

      // Keep trail limited
      if (trailRef.current.length > 30) {
        trailRef.current.shift()
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

      // Draw trail particles
      trailRef.current = trailRef.current.filter((particle) => particle.life > 0)
      trailRef.current.forEach((particle) => {
        particle.life -= 0.05
        particle.opacity = particle.life * 0.6

        // Draw trail glow
        const gradientTrail = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, 15)
        gradientTrail.addColorStop(0, `rgba(255, 215, 0, ${particle.opacity * 0.4})`)
        gradientTrail.addColorStop(0.5, `rgba(255, 215, 0, ${particle.opacity * 0.1})`)
        gradientTrail.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = gradientTrail
        ctx.fillRect(particle.x - 15, particle.y - 15, 30, 30)

        // Draw trail particle
        ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      if (isVisible) {
        const x = mousePos.x
        const y = mousePos.y

        wingRotationRef.current += 0.2

        // Draw outer glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, 40)
        glowGradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)')
        glowGradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.1)')
        glowGradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = glowGradient
        ctx.fillRect(x - 40, y - 40, 80, 80)

        // Draw mid glow
        const midGlow = ctx.createRadialGradient(x, y, 0, x, y, 25)
        midGlow.addColorStop(0, 'rgba(255, 215, 0, 0.5)')
        midGlow.addColorStop(0.7, 'rgba(255, 215, 0, 0.1)')
        midGlow.addColorStop(1, 'rgba(255, 215, 0, 0)')
        ctx.fillStyle = midGlow
        ctx.fillRect(x - 25, y - 25, 50, 50)

        // Draw wings
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(wingRotationRef.current)

        // Left wing
        ctx.fillStyle = 'rgba(0, 229, 208, 0.4)'
        ctx.beginPath()
        ctx.ellipse(-8, 0, 6, 12, -Math.PI / 6, 0, Math.PI * 2)
        ctx.fill()

        // Right wing
        ctx.beginPath()
        ctx.ellipse(8, 0, 6, 12, Math.PI / 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // Draw firefly body
        ctx.fillStyle = '#ffd700'
        ctx.beginPath()
        ctx.ellipse(x, y, 6, 8, 0, 0, Math.PI * 2)
        ctx.fill()

        // Draw bright core
        ctx.fillStyle = '#ffeb3b'
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw inner bright dot
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
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
