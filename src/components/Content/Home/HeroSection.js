// HeroSection.js
import React from 'react';
import logo from '../img/fondo.png'; // Asegúrate de que la ruta sea correcta

const HeroSection = () => {
  return (
    <div 
      id="hero" 
      className="relative w-full h-screen flex flex-col items-center justify-center bg-rojo text-center"
    >
      <img 
        src={logo} 
        alt="Logo" 
        className="w-[800px] mx-auto mb-6"
      />
      <h1 className="text-white text-6xl font-bold">
        ¡Un sabor para cada emoción!
      </h1>
    </div>
  );
};

export default HeroSection;
