import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from './clogo.png';
import AccountInfo from '../Content/AccountInfo';
import Cart from '../Content/Cart';

export default function Header({ onLoginClick, onNavigation, cartItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHover, setHeaderHover] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Acerca de', id: 'acerca' },
    { name: 'Contacto', id: 'contacto' },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleNavClick = (id) => {
    onNavigation(id);
    setMenuOpen(false);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

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
        <img src={logo} alt="Logo" className="h-16 w-auto ml-5" />

        <nav className="hidden md:flex mr-8 items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-900 hover:text-gray-600 text-2xl"
            >
              {item.name}
            </button>
          ))}

          {isAuthenticated && (
            <button
              onClick={() => handleNavClick('tienda')}
              className="text-gray-900 hover:text-gray-600 text-2xl"
            >
              Tienda
            </button>
          )}

          <AccountInfo isAuthenticated={isAuthenticated} />

          {!isAuthenticated && (
            <button
              onClick={onLoginClick}
              className="text-gray-900 hover:text-gray-600 text-2xl ml-4"
            >
              Iniciar Sesión
            </button>
          )}

          {isAuthenticated && (
            <div className="relative ml-4">
              <button onClick={toggleCart} className="flex items-center">
                <ShoppingCart className="h-6 w-6 text-gray-900" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          )}
        </nav>

        <div className="flex items-center md:hidden">
          {isAuthenticated && (
            <div className="relative mr-4">
              <button onClick={toggleCart} className="flex items-center">
                <ShoppingCart className="h-6 w-6 text-gray-900" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-900 flex items-center relative"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

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

          {isAuthenticated && (
            <button
              onClick={() => handleNavClick('tienda')}
              className="text-gray-900 hover:text-gray-600 text-5xl mb-6"
            >
              Tienda
            </button>
          )}

          <AccountInfo isAuthenticated={isAuthenticated} />

          {!isAuthenticated && (
            <button
              onClick={() => {
                onLoginClick();
                setMenuOpen(false);
              }}
              className="text-gray-900 hover:text-gray-600 text-5xl mb-6"
            >
              Iniciar Sesión
            </button>
          )}
        </nav>
      )}

      {isAuthenticated && cartOpen && <Cart cartItems={cartItems} onClose={() => setCartOpen(false)} />}
    </header>
  );
}
