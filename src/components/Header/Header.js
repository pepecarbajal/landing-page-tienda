import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './clogo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHover, setHeaderHover] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-700 ${headerHover || menuOpen ? 'bg-transparent' : 'bg-transparent'}`} 
      onMouseEnter={() => setHeaderHover(true)} 
      onMouseLeave={() => {
        if (!menuOpen) {
          setHeaderHover(false);
        }
      }}  
    >
      <div className="flex items-center justify-between mx-4">
        <img src={logo} alt="Logo" className="h-16 ml-5" />
        
        <nav className="hidden md:flex items-center justify-center space-x-8">
          <button className="text-gray-900 hover:text-gray-1500 text-lg">Contáctame</button>
          <button className="text-gray-900 hover:text-gray-1500 text-lg">Sobre mí</button>
          <button className="text-gray-900 hover:text-gray-1500 text-lg">Productos</button>
        </nav>

        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-gray-600 hover:text-gray-900"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 h-screen bg-white shadow-lg z-50 flex flex-col items-center py-4">
          <button className="text-gray-600 hover:text-gray-900 text-lg mb-2">Contáctame</button>
          <button className="text-gray-600 hover:text-gray-900 text-lg mb-2">Sobre mí</button>
          <button className="text-gray-600 hover:text-gray-900 text-lg mb-2">Productos</button>
          {/* Si no hay más botones, puedes agregar un espacio vacío para ocupar el resto de la altura */}
          <div className="flex-grow"></div>
        </nav>
      )}
    </header>
  );
};

export default Header;
