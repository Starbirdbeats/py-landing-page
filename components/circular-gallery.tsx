"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Item {
  icon: React.ReactNode
  title: string
  description: string
}

interface CircularGalleryProps {
  items: Item[]
}

export function CircularGallery({ items }: CircularGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoplay, items.length])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  const getPosition = (index: number) => {
    const totalItems = items.length
    const angleStep = (2 * Math.PI) / totalItems
    const radius = 150 // Adjust radius as needed

    const angle = angleStep * ((index - activeIndex + totalItems) % totalItems)

    return {
      x: radius * Math.sin(angle),
      y: -radius * Math.cos(angle),
      scale: index === activeIndex ? 1 : 0.7,
      zIndex: index === activeIndex ? 10 : 0,
    }
  }

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center">
      {/* Center content - active item */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-md z-20"
        >
          <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">{items[activeIndex].icon}</div>
          <h3 className="text-2xl font-bold mb-2">{items[activeIndex].title}</h3>
          <p className="text-gray-500">{items[activeIndex].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Circular items */}
      <div className="relative w-full h-full">
        {items.map((item, index) => {
          const { x, y, scale, zIndex } = getPosition(index)
          return (
            <motion.div
              key={index}
              animate={{
                x: `calc(50% + ${x}px)`,
                y: `calc(50% + ${y}px)`,
                scale,
                zIndex,
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer"
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: scale * 1.1 }}
            >
              {item.icon}
            </motion.div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

