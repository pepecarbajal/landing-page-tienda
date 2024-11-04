import React, { useState, useEffect } from 'react'
import bombon1 from './products/bombon_1.jpeg'
import bombon2 from './products/bombon_2.jpeg'
import yogurt1 from './products/yogurt_1.jpeg'
import yogurt2 from './products/yogurt_2.jpeg'
import tamarindo1 from './products/tamarindo_1.jpeg'
import tamarindo2 from './products/tamarindo_2.jpeg'
import naranja1 from './products/naranja_1.jpeg'
import naranja2 from './products/naranja_2.jpeg'
import mangos1 from './products/mangos_1.jpeg'
import mangos2 from './products/mangos_2.jpeg'
import jamaica1 from './products/jamaica_1.jpeg'
import jamaica2 from './products/jamaica_2.jpeg'
import gomitas1 from './products/gomitas_1.jpeg'
import gomitas2 from './products/gomitas_2.jpeg'
import gomitase1 from './products/gomitasEnchiladas_1.jpeg'
import gomitase2 from './products/gomitasEnchiladas_2.jpeg'
import fresa_1 from './products/fresa_1.jpeg'
import fresa_2 from './products/fresa_2.jpeg'
import durazno_1 from './products/durazno_1.jpeg'
import durazno_2 from './products/durazno_2.jpeg'
import coco_1 from './products/coco_1.jpeg'
import coco_2 from './products/coco_2.jpeg'
import chocolate_1 from './products/chocolate_1.jpeg'
import chocolate_2 from './products/chocolate_2.jpeg'
import chispas_1 from './products/chispas_1.jpeg'
import chispas_2 from './products/chispas_2.jpeg'
import chamoy_1 from './products/chamoy_1.jpeg'
import chamoy_2 from './products/chamoy_2.jpeg'
import { jwt_decode } from 'jwt-decode'

export default function Favoritos() {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  const products = [
    { id: 1, name: "Yogurt", price: 79.99, discountPrice: 69.99, category: "Dulce Invierno", images: [yogurt1, yogurt2] },
    { id: 2, name: "Malvaviscos", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [bombon1, bombon2] },
    { id: 3, name: "Tamarindo", price: 79.99, discountPrice: 69.99, category: "Explosión Tropical", images: [tamarindo1, tamarindo2] },
    { id: 4, name: "Maracuyá / Naranja", price: 79.99, discountPrice: 69.99, category: "Explosión Tropical", images: [naranja1, naranja2] },
    { id: 5, name: "Mangos Desidratados", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [mangos1, mangos2] },
    { id: 6, name: "Jamaica / Fresa", price: 79.99, discountPrice: 69.99, category: "Explosión Tropical", images: [jamaica1, jamaica2] },
    { id: 7, name: "Gomitas", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [gomitas1, gomitas2] },
    { id: 8, name: "Gomitas Enchiladas", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [gomitase1, gomitase2] },
    { id: 9, name: "Fresa", price: 79.99, discountPrice: 69.99, category: "Dulce Invierno", images: [fresa_1, fresa_2] },
    { id: 10, name: "Durazno", price: 79.99, discountPrice: 69.99, category: "Dulce Invierno", images: [durazno_1, durazno_2] },
    { id: 11, name: "Coco Rayado", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [coco_1, coco_2] },
    { id: 12, name: "Chocolate Liquido", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [chocolate_1, chocolate_2] },
    { id: 13, name: "Chispas de Chocolate", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [chispas_1, chispas_2] },
    { id: 14, name: "Chamoy", price: 79.99, discountPrice: 69.99, category: "Toppings", images: [chamoy_1, chamoy_2] },
  ]

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('Token not found')

      // Decodifica el token para obtener el userId
      const decodedToken = jwt_decode(token)
      const userId = decodedToken.userId

      const response = await fetch(`http://192.168.0.2:5000/api/favorites/${userId}`)
      if (!response.ok) throw new Error('Failed to fetch favorites')

      const data = await response.json()
      setFavorites(data)
    } catch (error) {
      console.error('Error fetching favorites:', error)
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = async (productId) => {
    try {
      const token = localStorage.getItem('token')
      const decodedToken = jwt_decode(token)
      const userId = decodedToken.userId

      const response = await fetch(`http://192.168.0.2:5000/api/favorites/${userId}/${productId}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to remove favorite')

      setFavorites(favorites.filter(fav => fav.id !== productId))
    } catch (error) {
      console.error('Error removing favorite:', error)
    }
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando favoritos...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mis Favoritos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div key={product.id} className="relative overflow-hidden">
            <button
              className="absolute top-2 right-2 z-10 p-2"
              onClick={() => removeFavorite(product.id)}
              aria-label={`Remove ${product.name} from favorites`}
            >
              <Heart className="h-6 w-6 text-red-500 fill-red-500" />
            </button>
            <div className="p-0">
              <div className="aspect-square relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-col items-start gap-2 p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">${product.discountPrice}</span>
                <span className="text-sm text-muted-foreground line-through">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
