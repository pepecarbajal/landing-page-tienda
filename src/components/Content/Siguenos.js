import React from 'react';
import './css/styles.css'; // Asegúrate de que la ruta sea correcta
import instagramLogo from './img/instagram.png'; // Asegúrate de que esta imagen esté en la ruta correcta
import image from './img/qr.jpeg'; // Cambia esto a la imagen que desees usar

const Siguenos = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-red-600 p-6"> {/* Cambiado h-screen por min-h-screen */}
      {/* Título */}
      <h1 className="text-6xl font-bold text-white mb-4">SÍGUENOS</h1>

      {/* Logo de Instagram */}
      <img src={instagramLogo} alt="Logo de Instagram" className="w-16 h-16 mb-4" />

      {/* Imagen debajo del logo */}
      <img src={image} alt="Imagen" className="w-3/4 h-auto md:w-1/2 mb-8" /> {/* Imagen más pequeña en computadora */}

      {/* Tarjeta amarilla más alta */}
      <div className="bg-yellow-400 p-8 rounded-md shadow-md w-full max-w-md text-center"> {/* Aumento del padding */}
        <p className="text-black text-lg mb-4">
          ¡Únete a nuestra comunidad y recibe las últimas novedades!
        </p>
        <input 
          type="email" 
          placeholder="Ingresa tu correo" 
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300">
          Suscribirse
        </button>
      </div>

      {/* Frase abajo de la tarjeta */}
      <p className="text-white text-2xl mt-4">Un sabor para cada emoción</p> {/* Aumento del tamaño del texto */}
    </section>
  );
};

export default Siguenos;
