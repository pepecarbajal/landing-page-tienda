import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './clogo.png';
import AccountInfo from '../Content/AccountInfo';

export default function Header({ onLoginClick, onNavigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHover, setHeaderHover] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Menu items for navigation, including "Tienda"
  const menuItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Acerca de', id: 'acerca' },
    { name: 'Contacto', id: 'contacto' },
    { name: 'Tienda', id: 'tienda' }, // Added "Tienda" as a menu item
  ];

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  // Handle navigation click
  const handleNavClick = (id) => {
    onNavigation(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-700 ${
        headerHover || menuOpen ? 'bg-transparent' : 'bg-transparent'
      }`}
      onMouseEnter={() => setHeaderHover(true)}
      onMouseLeave={() => {
        if (!menuOpen) {
          setHeaderHover(false);
        }
      }}
    >
      <div className="flex items-center justify-between mx-4">
        <img src={logo} alt="Logo" className="h-16 w-auto ml-5" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mr-8 items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-white hover:text-black text-2xl"
            >
              {item.name}
            </button>
          ))}

          <AccountInfo isAuthenticated={isAuthenticated} />

          {!isAuthenticated && (
            <button
              onClick={onLoginClick}
              className="text-white hover:text-gray-600 text-2xl ml-4"
            >
              Iniciar Sesión
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-gray-700 flex items-center relative"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 h-screen bg-yellow-400 flex flex-col items-center justify-center py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-900 hover:text-gray-600 text-5xl mb-6"
            >
              {item.name}
            </button>
          ))}

          <AccountInfo isAuthenticated={isAuthenticated} />

          {!isAuthenticated && (
            <button
              onClick={() => {
                onLoginClick();
                setMenuOpen(false);
              }}
              className="text-white-900 hover:text-gray-600 text-5xl mb-6"
            >
              Iniciar Sesión
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
