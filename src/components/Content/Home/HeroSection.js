// HeroSection.js
import React from 'react';
import logo from '../img/fondo.webp'; // Ensure the path is correct

const HeroSection = () => {
  return (
    <div 
      id="hero" 
      className="relative flex flex-col items-center justify-center w-full h-screen bg-rojo text-center"
    >
      <img 
        src={logo} 
        alt="Logo" 
        className="w-full max-w-[800px] mx-auto mb-6" // Make it responsive
        loading="lazy" // Optimize loading
      />
      <h1 className="text-6xl font-bold text-white md:text-7xl lg:text-8xl">
        ¡Un sabor para cada emoción!
      </h1>
    </div>
  );
};

export default HeroSection;
