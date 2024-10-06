// AboutUs.js
import React from 'react';
import heladoImage from './fondo.png';

const AboutUs = () => {
  return (
    <section  id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={heladoImage} alt="Nuestros helados" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Desde 1950, La Michoacana ha sido sinónimo de helados y paletas de alta calidad en México. Nuestras recetas tradicionales y sabores auténticos han deleitado a generaciones de familias.
            </p>
            <p className="text-gray-600 mb-4">
              Utilizamos solo los ingredientes más frescos y naturales para crear nuestros deliciosos helados y paletas, manteniendo viva la tradición de los helados artesanales mexicanos.
            </p>
            <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300">
              Conoce Nuestra Historia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
