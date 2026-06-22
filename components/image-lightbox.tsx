'use client'

import { useState, useRef, useEffect } from 'react'
import { X, ZoomIn, ZoomOut } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageLightboxProps {
  src: string
  alt: string
  className?: string
}

export function ImageLightbox({ src, alt, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 4))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 1))
  }

  const handleWheel = (e: WheelEvent) => {
    if (!isOpen) return
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 4))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    setPan({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('wheel', handleWheel as EventListener, { passive: false })
      return () => {
        window.removeEventListener('wheel', handleWheel as EventListener)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (zoom === 1) {
      setPan({ x: 0, y: 0 })
    }
  }, [zoom])

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'group relative overflow-hidden rounded-lg cursor-pointer transition-all hover:shadow-lg',
          className
        )}
        aria-label={`Open ${alt} in full view`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </button>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={handleClose}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h3 className="text-white text-sm font-medium">{alt}</h3>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors p-2 -mr-2"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Image Container */}
          <div
            ref={containerRef}
            className="flex-1 overflow-auto flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
          >
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className="max-w-full max-h-full select-none transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              }}
              draggable={false}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 p-4 border-t border-white/10 bg-black/50">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className="text-white/60 hover:text-white disabled:opacity-30 transition-colors p-2"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>

            <div className="text-white/60 text-sm w-12 text-center">
              {Math.round(zoom * 100)}%
            </div>

            <button
              onClick={handleZoomIn}
              disabled={zoom >= 4}
              className="text-white/60 hover:text-white disabled:opacity-30 transition-colors p-2"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-5 w-5" />
            </button>

            <div className="w-px h-6 bg-white/20" />

            <button
              onClick={() => {
                setZoom(1)
                setPan({ x: 0, y: 0 })
              }}
              className="text-white/60 hover:text-white transition-colors px-3 py-1 text-sm border border-white/20 rounded hover:border-white/40"
            >
              Reset
            </button>
          </div>

          {/* Mobile Info */}
          <div className="text-center text-white/50 text-xs px-4 pb-2">
            {zoom > 1 ? 'Drag to pan' : 'Scroll to zoom'}
          </div>
        </div>
      )}
    </>
  )
}
