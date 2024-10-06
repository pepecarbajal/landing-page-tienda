// HameStore.js
import React from 'react';
import './css/styles.css'; // Asegúrate de que la ruta sea correcta
import img1 from './img/collage1.jpeg';
import img2 from './img/collage2.jpeg';
import img3 from './img/collage3.jpeg';
import img4 from './img/imgcasa.jpeg';

const HameStore = () => {
  return (
    <section className="flex mt-10 p-6 items-center justify-center h-screen bg-yellow-400">
      <div className="text-center">
        {/* Título */}
        <h1 className="text-6xl font-bold text-red-600 mb-4">HAME STORE</h1>

        {/* Subtítulo */}
        <h2 className="text-4xl font-semibold text-red-600 mb-2">Visítanos</h2>

        {/* Dirección */}
        <p className="text-black text-lg mb-8">Av. Guerrero, 37-B .Colonia Centro. Chilpancingo, Guerrero.</p>

        {/* Collage de imágenes */}
        <div className="grid grid-cols-2 gap-4">
          <img src={img4} alt="Collage 1" className="w-full h-48 object-cover rounded-md" />
          <img src={img3} alt="Collage 2" className="w-full h-48 object-cover rounded-md" />
          <img src={img2} alt="Collage 3" className="w-full h-48 object-cover rounded-md" />
          <img src={img1} alt="Collage 4" className="w-full h-48 object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default HameStore;
