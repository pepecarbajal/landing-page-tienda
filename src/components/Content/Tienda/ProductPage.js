// src/Components/ProductPage.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import CategorySelector from './CategorySelector';
import OfferTimer from './OfferTimer';
import Header from '../../Header/Header';
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

const products = [
 { id: 1, name: "Yogurt", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [yogurt1, yogurt2]},
 { id: 2, name: "Malvaviscos", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [bombon1, bombon2]},
 { id: 3, name: "Tamarindo", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [tamarindo1, tamarindo2]},
 { id: 4, name: "Maracuyá / Naranja", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [naranja1, naranja2]},
 { id: 5, name: "Mangos Desidratados", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [mangos1, mangos2]},
 { id: 6, name: "Jamaica / Fresa", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [jamaica1, jamaica2]},
 { id: 7, name: "Gomitas", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [gomitas1, gomitas2]},
 { id: 8, name: "Gomitas Enchiladas", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [gomitase1, gomitase2]},
 { id: 9, name: "Fresa", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [fresa_1, fresa_2]},
 { id: 10, name: "Durazno", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [durazno_1, durazno_2]},
 { id: 11, name: "Coco Rayado", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [coco_1, coco_2]},
 { id: 12, name: "Chocolate Liquido", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [chocolate_1, chocolate_2]},
 { id: 13, name: "Chispas de Chocolate", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [chispas_1, chispas_2]},
 { id: 14, name: "Chamoy", price: 79.99, discountPrice: 69.99, category: "Primavera",  images: [chamoy_1, chamoy_2]},
];

const categories = ["Todas", "Invierno", "Primavera", "Otros"];

export default function ProductPage({ onAddToCart, onNavigation }) {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [cartItems, setCartItems] = useState([]); 

  // Filtering the products based on selected category
  const filteredProducts = selectedCategory === "Todas"
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);

    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, totalPrice: product.price }]);
    }

    console.log("Producto agregado o actualizado en el carrito:", product);
  };

  return (
    <div className="flex mt-20 flex-col">
      <Header 
        cartItems={cartItems} 
        onAddToCart={addToCart} 
        onNavigation={onNavigation}
      />
     <CategorySelector 
  categories={categories} 
  selectedCategory={selectedCategory} // Pasa la categoría seleccionada
  onSelectCategory={setSelectedCategory} // Pasa la función para cambiar de categoría
/>

      <OfferTimer />
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
}