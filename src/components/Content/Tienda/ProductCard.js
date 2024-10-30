import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import {jwtDecode} from 'jwt-decode';

export default function ProductCard({ product, onAddToCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); 

  // Decode token and set userId on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id || null); 
      } catch (error) {
        console.error('Error decoding token:', error);
        setUserId(null); 
      }
    }
  }, []);

  // Check if the product is already a favorite on mount
  useEffect(() => {
    if (userId) {
      fetch(`http://192.168.0.2:5000/api/favorites/${userId}`)
        .then(response => response.json())
        .then(favorites => {
          const isProductFavorite = favorites.some(fav => fav.productId === product.id);
          setIsFavorite(isProductFavorite);
        })
        .catch(error => console.error('Error fetching favorites:', error));
    }
  }, [userId, product.id]);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
        setIsFading(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  // Function to toggle favorites
  const toggleFavorite = async () => {
    if (!userId) {
      console.error('User ID not found');
      return;
    }

    const endpoint = `http://192.168.0.2:5000/api/favorites`;
    const method = isFavorite ? 'DELETE' : 'POST';
    const body = JSON.stringify({ userId, productId: product.id });

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (response.ok) {
        setIsFavorite(!isFavorite); 
        console.log(`Product ${isFavorite ? 'removed from' : 'added to'} favorites:`, product.name);
      } else {
        console.error(`Error ${isFavorite ? 'removing' : 'adding'} to favorites:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error in favorites request:`, error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        />
        <button 
          onClick={toggleFavorite}
          className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white p-2"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'text-red-500' : 'text-[#ffa43a]'}`} />
          <span className="sr-only">{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline">
            {product.discountPrice ? (
              <>
                <span className="text-lg font-bold text-[#000]">${product.discountPrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-red-500 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-[#ffa43a]">${product.price.toFixed(2)}</span>
            )}
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">{product.category}</span>
        </div>
        <button 
          className="w-full font-bold bg-[#ff4427] hover:bg-[#ff2200] text-white px-4 py-2 rounded-md"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-6" /> Add to cart
        </button>
      </div>
    </div>
  );
} 
