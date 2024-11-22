'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CarouselAlbum() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const images = [
    '/Anive/chad.jpg',
    '/Anive/gatosafadinho.jpg',
    '/Anive/gatomaluco.jpg',
    '/Anive/gatolindo.png',
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
          {images.map((src, index) => (
            index !== activeIndex && (
              <div key={index} className="aspect-[3/2] relative">
                <Image
                  src={src}
                  alt={`Landscape ${index + 1}`}
                  fill
                  className="object-cover rounded-md cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                />
              </div>
            )
          ))}
        </div>
        <div className="w-2/3 aspect-[3/2] relative">
          <Image
            src={images[activeIndex]}
            alt={`Large Landscape`}
            fill
            className="object-cover rounded-md"
          />
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