'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#tools' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function GlassmorphicNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
        isScrolled 
          ? 'backdrop-blur-md bg-background/70 border-b border-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 group-hover:shadow-[0_0_20px_rgba(0,229,208,0.5)] transition-shadow duration-300" />
            <span className="font-heading font-bold text-lg text-primary group-hover:text-primary/90 transition-colors">
              Allysa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            href="https://calendly.com/allysa-batchiller57/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-4 py-2 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-full hover:shadow-[0_0_20px_rgba(0,229,208,0.4)] transition-all duration-300 hover:scale-105"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-md">
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
              <Link
                href="https://calendly.com/allysa-batchiller57/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-3 py-2 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg transition-all duration-300 text-center"
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
