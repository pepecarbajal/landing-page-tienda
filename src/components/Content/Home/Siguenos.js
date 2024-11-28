// Siguenos.js
import React from 'react';
import '../css/styles.css'; // Ensure the path is correct
import instagramLogo from '../img/instagram.png'; // Ensure this image is in the correct path
import image from '../img/qr.jpeg'; // Change this to the desired image

const Siguenos = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-red-600 p-6">
      {/* Title */}
      <h1 className="text-6xl font-bold text-white mb-4">SÍGUENOS</h1>

      {/* Instagram Logo */}
      <img 
        src={instagramLogo} 
        alt="Logo de Instagram" 
        className="w-16 h-16 mb-4" 
      />

      {/* Image below the logo */}
      <img 
        src={image} 
        alt="Código QR" 
        className="w-3/4 h-auto md:w-1/4 mb-8 border-2 border-white rounded-md"  
      />

      {/* Yellow Card */}
      <div className="bg-yellow-400 p-8 rounded-md shadow-md w-full max-w-md text-center">
        <p className="text-black text-lg mb-4">
          ¡Únete a nuestra comunidad y recibe las últimas novedades!
        </p>
        <input 
          type="email" 
          placeholder="Ingresa tu correo" 
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          aria-label="Email input for subscription"
        />
        <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300">
          Suscribirse
        </button>
      </div>

      {/* Phrase below the card */}
      <p className="text-white text-2xl mt-4">Un sabor para cada emoción</p>
    </section>
  );
};

export default Siguenos;
