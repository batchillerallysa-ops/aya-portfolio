'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  sectionColor?: 'teal' | 'green' | 'cyan' | 'blue' | 'purple'
  intensity?: number
}

export function AnimatedBackground({ sectionColor = 'teal', intensity = 1 }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Color configurations for smooth transitions
  const colorConfigs = {
    teal: {
      primary: 'rgba(0, 200, 200, 0.3)',
      secondary: 'rgba(0, 255, 150, 0.2)',
      accent: 'rgba(0, 150, 200, 0.15)',
      glow: '#00c8c8',
      particle: '#00ff96',
      background: 'linear-gradient(135deg, rgba(0, 40, 60, 0.9) 0%, rgba(0, 60, 80, 0.95) 50%, rgba(10, 30, 50, 0.9) 100%)',
    },
    green: {
      primary: 'rgba(0, 255, 100, 0.25)',
      secondary: 'rgba(100, 255, 150, 0.15)',
      accent: 'rgba(0, 200, 100, 0.1)',
      glow: '#00ff64',
      particle: '#64ff00',
      background: 'linear-gradient(135deg, rgba(10, 50, 30, 0.9) 0%, rgba(20, 60, 40, 0.95) 50%, rgba(5, 40, 25, 0.9) 100%)',
    },
    cyan: {
      primary: 'rgba(0, 255, 255, 0.3)',
      secondary: 'rgba(100, 200, 255, 0.2)',
      accent: 'rgba(0, 200, 255, 0.15)',
      glow: '#00ffff',
      particle: '#00ffff',
      background: 'linear-gradient(135deg, rgba(0, 40, 80, 0.9) 0%, rgba(0, 60, 100, 0.95) 50%, rgba(10, 30, 70, 0.9) 100%)',
    },
    blue: {
      primary: 'rgba(0, 150, 255, 0.25)',
      secondary: 'rgba(100, 180, 255, 0.15)',
      accent: 'rgba(0, 120, 255, 0.1)',
      glow: '#0096ff',
      particle: '#00d4ff',
      background: 'linear-gradient(135deg, rgba(0, 30, 80, 0.9) 0%, rgba(10, 50, 100, 0.95) 50%, rgba(5, 20, 60, 0.9) 100%)',
    },
    purple: {
      primary: 'rgba(168, 85, 247, 0.25)',
      secondary: 'rgba(196, 130, 255, 0.15)',
      accent: 'rgba(139, 92, 246, 0.1)',
      glow: '#a855f7',
      particle: '#c084fc',
      background: 'linear-gradient(135deg, rgba(40, 20, 80, 0.9) 0%, rgba(60, 30, 100, 0.95) 50%, rgba(30, 10, 60, 0.9) 100%)',
    },
  }

  const config = colorConfigs[sectionColor]

  // Floating orbs with smooth animations
  const orbs = [
    { id: 1, size: 200, duration: 20, delay: 0, x: '10%', y: '20%' },
    { id: 2, size: 150, duration: 25, delay: 2, x: '80%', y: '10%' },
    { id: 3, size: 180, duration: 28, delay: 4, x: '70%', y: '70%' },
    { id: 4, size: 120, duration: 22, delay: 1, x: '20%', y: '80%' },
  ]

  // Floating particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: config.background,
        }}
      />

      {/* Animated orbs with bokeh blur effect */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: config.primary,
            filter: 'blur(80px)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Secondary glow layers */}
      {orbs.map((orb) => (
        <motion.div
          key={`glow-${orb.id}`}
          className="absolute rounded-full"
          style={{
            width: orb.size * 0.6,
            height: orb.size * 0.6,
            left: orb.x,
            top: orb.y,
            background: config.secondary,
            filter: 'blur(60px)',
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: orb.duration * 0.8,
            delay: orb.delay + 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating particle dots */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: config.particle,
            boxShadow: `0 0 ${particle.size * 2}px ${config.glow}`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gradient light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}px ${mousePosition.y}px, ${config.accent} 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Accent glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, transparent 0%, ${config.accent} 50%, transparent 100%)`,
          opacity: 0.1,
        }}
      />

      {/* Soft overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />
    </div>
  )
}
