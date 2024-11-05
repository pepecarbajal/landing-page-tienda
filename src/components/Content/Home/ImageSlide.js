// ImageSlider.js
import React, { useState, useEffect } from 'react';
import img1 from '../img/i1.jpeg';
import img2 from '../img/i2.jpeg';
import img3 from '../img/i3.jpeg';

const images = [img1, img2, img3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-rojo">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full m-4 max-w-[800px] mx-auto rounded-lg transition-opacity duration-1000 ease-in-out border-t-4 border-b-4 border-white"
      />
      {/* Image Indicators */}
      <div className="absolute bottom-8 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={currentIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
