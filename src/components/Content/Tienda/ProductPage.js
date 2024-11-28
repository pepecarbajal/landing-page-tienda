// src/Components/ProductPage.js
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import ProductList from './ProductList';
import CategorySelector from './CategorySelector';
import OfferTimer from './OfferTimer';
import CartButton from './CartButton';
import products from './products';

const categories = ["Dulce Invierno", "Explosión Tropical", "Toppings"];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); // New state for showing favorites
  const carritoLimpio = () => {
    setCartItems([]); // This will clear the cart
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id || null);
      } catch (error) {
        console.error('Error decodificando el token:', error);
        setUserId(null);
      }
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchFavorites(userId);
    }
  }, [userId]);

  const fetchFavorites = async (userId) => {
    try {
      const response = await fetch(`https://serverhame.onrender.com/api/favorites/${userId}`);
      const data = await response.json();

      const favoriteProductIds = data.map(favorite => favorite.productId);
      const favoriteList = products.filter(product => favoriteProductIds.includes(product.id));
      setFavoriteProducts(favoriteList);
    } catch (error) {
      console.error('Error al obtener favoritos:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      const fetchCartItems = async () => {
        try {
          const response = await fetch(`https://serverhame.onrender.com/api/cart?userId=${userId}`);
          const data = await response.json();

          setCartItems(
            data.map(item => {
              const product = products.find(p => p.id === item.productId);
              return {
                productId: item.productId,
                quantity: item.quantity,
                name: product ? product.name : "Producto desconocido",
                totalPrice: item.quantity * (product ? product.discountPrice : 0)
              };
            })
          );
        } catch (error) {
          console.error('Error al obtener artículos del carrito:', error);
        }
      };
      fetchCartItems();
    }
  }, [userId]);

  const addToCart = async (product) => {
    const exists = cartItems.find(item => item.productId === product.id);
    const quantity = exists ? exists.quantity + 1 : 1;
    const totalPrice = quantity * product.discountPrice; // Update totalPrice calculation

    if (exists) {
        setCartItems(cartItems.map(item =>
            item.productId === product.id
                ? { ...item, quantity, totalPrice }
                : item
        ));
    } else {
        setCartItems([...cartItems, { productId: product.id, quantity, name: product.name, totalPrice }]);
    }

    try {
        await fetch('https://serverhame.onrender.com/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId: product.id, quantity })
        });
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
    }
};


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleShowFavorites = () => {
    setShowFavorites(prev => !prev);
  };

  const filteredProducts = showFavorites
    ? favoriteProducts 
    : products.filter(product => selectedCategory === "Todas" || product.category === selectedCategory); 

  return (
    <div>

      <div>
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          onToggleFavorites={toggleShowFavorites} // Pass the toggle function
          showFavorites={showFavorites} // Pass the showFavorites state
        />
        <OfferTimer />
        <CartButton cartItems={cartItems} carritoLimpio={carritoLimpio}/>
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      </div>
    </div>
  );
}

