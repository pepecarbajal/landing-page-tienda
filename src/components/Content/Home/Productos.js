// Productos.js
import React, { useState } from 'react';
import tropical from '../img/tropical.jpeg';
import invierno from '../img/invierno.jpeg';
import hamebox from '../img/hamebox.jpeg';
import arrowLeft from '../img/flecha.png';
import arrowRight from '../img/flecha.png';

const products = [
  { id: 1, name: 'Hame Box', price: '$10.00', image: hamebox },
  { id: 2, name: 'Explosión Tropical', price: '$20.00', image: tropical },
  { id: 3, name: 'Dulce Invierno', price: '$20.00', image: invierno },
];

const Productos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };


  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-naranja text-center">
      <div className="md:hidden">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-[320px] text-center border-2 border-gray-300">
          <img 
            src={products[currentIndex].image} 
            alt={products[currentIndex].name} 
            className="w-full h-[420px] object-cover mb-6 rounded-xl" 
          />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{products[currentIndex].name}</h2>
          
        </div>

        {/* Contenedor para los botones centrados */}
        <div className="flex justify-center mt-6 space-x-6">
          <button 
            onClick={handlePrevProduct} 
            className="flex items-center justify-center bg-gray-300 rounded-full p-3 hover:bg-gray-400 transition duration-300"
          >
            <img src={arrowLeft} alt="Anterior" className="w-8 h-8 transform rotate-180" />
          </button>
          <button 
            onClick={handleNextProduct} 
            className="flex items-center justify-center bg-gray-300 rounded-full p-3 hover:bg-gray-400 transition duration-300"
          >
            <img src={arrowRight} alt="Siguiente" className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl shadow-2xl p-8 w-[350px] text-center border-2 border-gray-300">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[500px] object-cover mb-6 rounded-xl" 
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
