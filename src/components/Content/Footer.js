// Footer.js
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Asegúrate de que estos íconos estén disponibles

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre HAME</h3>
            <p className="text-gray-400">Ofrecemos los mejores helados y paletas</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li className="text-gray-400 hover:text-white"><a href="#hero">Inicio</a></li>
              <li className="text-gray-400 hover:text-white"><a href="#menu">Menú</a></li>
              <li className="text-gray-400 hover:text-white"><a href="#about">Sobre Nosotros</a></li>
              <li className="text-gray-400 hover:text-white"><a href="#testimonials">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p className="text-gray-400">Teléfono: (747) 123-4567</p>
            <p className="text-gray-400">Email: hame@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos en Redes Sociales</h3>
            <ul className="flex space-x-4">
              <li className="text-gray-400 hover:text-white">
                <a href="https://www.facebook.com/profile.php?id=100009327066903&mibextid=ZbWKwL">
                  <Facebook size={30} />
                </a>
              </li>
              <li className="text-gray-400 hover:text-white">
                <a href="https://instagram.com">
                  <Instagram size={30} />
                </a>
              </li>
              <li className="text-gray-400 hover:text-white">
                <a href="https://twitter.com">
                  <Twitter size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} HAME. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
