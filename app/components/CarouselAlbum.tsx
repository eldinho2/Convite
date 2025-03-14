'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function CarouselAlbum() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.jpg',
    '/12.jpg',
    '/13.jpg',
    '/14.jpg',
    '/15.jpg',
    '/16.jpg',
    '/17.jpg',
    '/18.jpg',
    '/19.jpg',
    '/20.jpg',
    '/21.jpg',
    '/22.jpg',
    '/23.jpg',
    '/24.jpg',
    '/25.jpg',
    '/26.jpg',
    '/27.jpg',
    '/28.jpg',
    '/29.jpg',
    '/30.jpg',
    '/31.jpg',
    '/32.jpg',
    '/33.jpg',
    '/34.jpg',
    '/35.jpg',
    '/36.jpg',
    '/37.jpg',
    '/38.jpg',
    '/39.jpg',
    '/40.jpg',
    '/41.jpg',
    '/42.jpg',
    '/43.jpg',
  ]

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length, isPaused])

  const handlePrevious = () => {
    setIsPaused(true)
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIsPaused(true)
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handleMouseUp = () => {
    setIsPaused(false)
  }

  const getVisibleImages = () => {
    const visibleIndexes = []
    const start = Math.max(0, activeIndex - 2)
    const end = Math.min(images.length - 1, activeIndex + 2)
    
    for (let i = start; i <= end; i++) {
      if (i !== activeIndex) {
        visibleIndexes.push(i)
      }
    }
    return visibleIndexes
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="flex">
        <button
          onClick={handlePrevious}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          ←
        </button>
        <div className="w-1/3 space-y-2 pr-2">
          {getVisibleImages().map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-[3/2] relative"
            >
              <Image
                src={images[index]}
                alt={`Landscape ${index + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 300px"
                className="object-cover rounded-md cursor-pointer"
                onClick={() => setActiveIndex(index)}
              />
            </motion.div>
          ))}
        </div>
        <div className="w-2/3 aspect-[3/2] relative">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ 
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="w-full h-full absolute"
            >
              <Image
                src={images[activeIndex]}
                alt={`Large Landscape`}
                fill
                sizes="(max-width: 768px) 66vw, 800px"
                priority
                className="object-cover rounded-md"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          →
        </button>
      </div>
      <div className="absolute -top-12 right-3 rotate-12">
        <Image
          className="sm:hidden"
          src="/Anive/cherrie.webp"
          alt="Cherries"
          width={150}
          height={150}
        />
      </div>
      <div className="absolute bottom-1 -left-20 -rotate-12">
        <Image
          className="sm:hidden"
          src="/Anive/gatinhoLaco.webp"
          alt="Kitten"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center mt-4 text-lg font-semibold">
        Algumas memórias
      </div>
    </div>
  )
}