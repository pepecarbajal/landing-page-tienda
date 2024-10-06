// HeroSection.js
import React from 'react';
import logo from './fondo.png'; // Asegúrate de que la ruta sea correcta

const HeroSection = () => {
  return (
    <div id="hero" className="relative w-full h-screen z-10 flex items-center justify-center">
      <img 
        src={logo} 
        alt="Logo" 
        className="w-[500px] mx-auto"
      />
    </div>
  );
};

export default HeroSection;
