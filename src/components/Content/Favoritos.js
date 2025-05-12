'use client'

import React, { useState, useEffect } from 'react'
import products from './Tienda/products'
import { jwtDecode } from 'jwt-decode'

export default function Favoritos() {
  const [favorites, setFavorites] = useState([])
  const [userId, setUserId] = useState(null)

  // Obtener userId del token
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

  // Obtener favoritos desde el servidor
  useEffect(() => {
    if (userId) {
      fetch(`http://187.200.138.0:3000/api/favorites/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // Filtrar los productos locales con los IDs de los favoritos
          const favoriteProducts = products.filter(product =>
            data.some(fav => fav.productId === product.id)
          )
          setFavorites(favoriteProducts)
        })
        .catch((error) => console.error('Error fetching favorites:', error))
    }
  }, [userId])

  if (!userId) {
    return (
      <div className="p-4 text-center">
        <p className="text-lg font-bold text-gray-700">
          Por favor, inicia sesión para ver tus favoritos.
        </p>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-lg font-bold text-gray-700">
          No tienes productos favoritos.
        </p>
      </div>
    )
  }

  return (
    <div className="p-4 mt-20 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto"
          >
            <div className="relative aspect-square p-3">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover rounded-lg w-full h-full transition-opacity duration-500"
              />
              
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
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
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
