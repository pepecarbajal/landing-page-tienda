// src/Components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
}
