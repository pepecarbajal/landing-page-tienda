'use client'

import React, { useState, useEffect } from 'react'

// Asumimos que las imágenes se importan correctamente
import img1 from '../img/img1.jpeg'
import img2 from '../img/img2.jpeg'

const images = [
  { src: img1, alt: 'Descripción de la imagen 1' },
  { src: img2, alt: 'Descripción de la imagen 2' },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  )
}