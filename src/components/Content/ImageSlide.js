// ImageSlider.js
import React, { useState, useEffect } from 'react';
import img1 from './img/i1.jpeg';
import img2 from './img/i2.jpeg';
import img3 from './img/i3.jpeg';


const images = [img1, img2, img3];

const ImageSlider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-rojo">
      <img
        src={images[currentIndex]}
        alt="Imagen deslizante"
        className="w-[800px] mx-auto rounded-lg  transition-opacity duration-1000 ease-in-out"
        key={currentIndex}
      />
    </div>
  );
};

export default ImageSlider2;
