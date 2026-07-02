'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sparkles, Sun, Waves } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#tools' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const THEMES = [
  { id: 'wave', label: 'Wave (Teal/Ocean)', Icon: Waves },
  { id: 'sparkle', label: 'Sparkle (Special)', Icon: Sparkles },
  { id: 'sun', label: 'Sun (Light)', Icon: Sun },
  { id: 'moon', label: 'Moon (Dark)', Icon: Moon },
] as const

type ThemeId = (typeof THEMES)[number]['id']

const STORAGE_KEY = 'theme-preference'

export function GlassmorphicNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<ThemeId>('wave')
  const [mounted, setMounted] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeId | null
    const initialTheme = savedTheme || 'wave'
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const applyTheme = (newTheme: ThemeId) => {
    if (newTheme === 'wave') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  }

  const handleThemeChange = (newTheme: ThemeId) => {
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem(STORAGE_KEY, newTheme)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'glassmorphic' : 'bg-transparent'
      }`}
    >
      {/* Animated transitioning color bar */}
      <div className="top-gradient-bar h-[3px] w-full" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/#top" className="flex items-center gap-3 group" aria-label="Allysa Batchiller — home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-mono text-base font-bold text-primary-foreground shadow-[0_0_20px_-2px] shadow-primary/50 transition-shadow duration-300 group-hover:shadow-[0_0_28px_0] group-hover:shadow-primary/60">
              {'>_'}
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
                Allysa Batchiller
              </span>
              <span className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                VA &amp; Automation Specialist
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme switcher pill */}
            {mounted && (
              <div className="hidden sm:flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-sm">
                {THEMES.map(({ id, label, Icon }) => {
                  const active = theme === id
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handleThemeChange(id)}
                      aria-label={label}
                      aria-pressed={active}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                        active
                          ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[0_0_16px_-2px] shadow-primary/60'
                          : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  )
                })}
              </div>
            )}

            {/* CTA Button */}
            <Link
              href="https://calendly.com/allysa-batchiller57/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_24px_-4px] shadow-primary/60 hover:shadow-[0_0_32px_0] hover:shadow-primary/70 transition-all duration-300 hover:scale-105"
            >
              Book a call
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Theme switcher (mobile) */}
              {mounted && (
                <div className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 w-max">
                  {THEMES.map(({ id, label, Icon }) => {
                    const active = theme === id
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          handleThemeChange(id)
                          setIsOpen(false)
                        }}
                        aria-label={label}
                        aria-pressed={active}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                          active
                            ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    )
                  })}
                </div>
              )}

              <Link
                href="https://calendly.com/allysa-batchiller57/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-3 py-2.5 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg transition-all duration-300 text-center"
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
