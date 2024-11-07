'use client'

import React, { useState, useEffect } from 'react'
import { ShoppingCart, Heart } from 'lucide-react'
import { jwtDecode } from 'jwt-decode'

export default function ProductCard({ product, onAddToCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [userId, setUserId] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decoded = jwtDecode(token)
        setUserId(decoded.id || null)
      } catch (error) {
        console.error('Error decoding token:', error)
        setUserId(null)
      }
    }
  }, [])

  useEffect(() => {
    if (userId) {
      fetch(`https://serverhame.onrender.com/api/favorites/${userId}`)
        .then(response => response.json())
        .then(favorites => {
          const isProductFavorite = favorites.some(fav => fav.productId === product.id)
          setIsFavorite(isProductFavorite)
        })
        .catch(error => console.error('Error fetching favorites:', error))
    }
  }, [userId, product.id])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length)
        setIsFading(false)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [product.images.length])

  const toggleFavorite = async () => {
    if (!userId) {
      console.error('User ID not found')
      return
    }

    const endpoint = `https://serverhame.onrender.com/api/favorites`
    const method = isFavorite ? 'DELETE' : 'POST'
    const body = JSON.stringify({ userId, productId: product.id })

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })

      if (response.ok) {
        setIsFavorite(!isFavorite)
        console.log(`Product ${isFavorite ? 'removed from' : 'added to'} favorites:`, product.name)
      } else {
        console.error(`Error ${isFavorite ? 'removing' : 'adding'} to favorites:`, response.statusText)
      }
    } catch (error) {
      console.error(`Error in favorites request:`, error)
    }
  }

  const token = localStorage.getItem('token') // Check if token exists

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto m-2"> {/* Adjust margin here */}
      <div className="relative aspect-square p-3">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className={`object-cover rounded w-full h-full transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        />
        <button
          className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200"
          onClick={toggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500' : 'text-[#ffa43a]'}`} fill={isFavorite ? 'currentColor' : 'none'} />
          <span className="sr-only">{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline">
            {product.discountPrice ? (
              <>
                <span className="text-lg font-bold text-[#000]">${product.discountPrice.toFixed(2)}</span>
                <span className="ml-2 text-xs text-red-500 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-[#ffa43a]">${product.price.toFixed(2)}</span>
            )}
          </div>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{product.category}</span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button 
          className={`w-full  font-bold ${token ? 'bg-rojo hover:bg-naranja text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed text-sm'} py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center`}
          onClick={token ? () => onAddToCart(product) : null} // Only call onAddToCart if token exists
          disabled={!token} 
        >
          <ShoppingCart className="mr-2 h-3 w-3" /> 
          {token ? 'Agregar al Carrito' : 'Iniciar sesión primero'}
        </button>
      </div>
    </div>
  )
}
