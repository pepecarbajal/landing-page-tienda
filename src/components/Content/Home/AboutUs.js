import React from 'react';
import heladoImage from '../img/imgcasa.jpeg'; // Asegúrate de que esta imagen esté en la ruta correcta
import '../css/styles.css';

const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-transparent"> {/* Cambiado h-screen por min-h-screen */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Encabezado */}
          <h2 className="text-5xl text-white font-bold mb-6 text-center">Sobre HAME</h2>
          <p className="text-white mb-4 text-lg text-center">
            HAME es conocido por ofrecer helados y paletas de la más alta calidad. Nos enorgullecemos de utilizar recetas tradicionales y ofrecer sabores auténticos que deleitan a todos.
          </p>
         
          {/* Imagen redondeada */}
          <img
            src={heladoImage}
            alt="Nuestros helados"
            className="rounded-t-full shadow-lg w-full h-auto max-w-xs md:max-w-md mt-10" // Ajusta el tamaño aquí
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
