// src/Components/ProductPage.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import CategorySelector from './CategorySelector';
import OfferTimer from './OfferTimer';
import Header from '../../Header/Header';

const products = [
  { id: 1, name: "Paleta Invierno", price: 29.99, discountPrice: 24.99, category: "Invierno", image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/8991eaf/2147483647/strip/true/crop/920x920+230+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6c%2Fa9%2F8e809bcf45a9baeb438f81f64eb9%2Fpaletas-de-hielo.jpg" },
  { id: 2, name: "Paleta Primavera", price: 89.99, category: "Primavera", image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/8991eaf/2147483647/strip/true/crop/920x920+230+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6c%2Fa9%2F8e809bcf45a9baeb438f81f64eb9%2Fpaletas-de-hielo.jpg" },
  { id: 3, name: "Paleta Especial", price: 199.99, discountPrice: 149.99, category: "Otros", image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/8991eaf/2147483647/strip/true/crop/920x920+230+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6c%2Fa9%2F8e809bcf45a9baeb438f81f64eb9%2Fpaletas-de-hielo.jpg" },
  { id: 4, name: "Paleta Verano", price: 59.99, category: "Otros", image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/8991eaf/2147483647/strip/true/crop/920x920+230+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6c%2Fa9%2F8e809bcf45a9baeb438f81f64eb9%2Fpaletas-de-hielo.jpg" },
  { id: 5, name: "Paleta Otoño", price: 79.99, discountPrice: 69.99, category: "Primavera", image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/8991eaf/2147483647/strip/true/crop/920x920+230+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6c%2Fa9%2F8e809bcf45a9baeb438f81f64eb9%2Fpaletas-de-hielo.jpg" },
];

const categories = ["Todas", "Invierno", "Primavera", "Otros"];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [cartItems, setCartItems] = useState([]); // Estado del carrito

  const filteredProducts = selectedCategory === "Todas" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Función para agregar el producto al carrito
  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      console.log("El producto ya está en el carrito.");
    } else {
      setCartItems([...cartItems, product]);
      console.log("Producto agregado al carrito:", product);
    }
  };

  return (
    <div className="flex mt-20 flex-col">
      <Header cartItems={cartItems} onAddToCart={addToCart} /> {/* Pass cartItems and addToCart */}
      <CategorySelector categories={categories} onSelect={setSelectedCategory} />
      <OfferTimer />
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
}