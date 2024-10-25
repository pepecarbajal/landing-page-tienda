import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react'; // Importa los íconos
import logo from './clogo.png';
import AccountInfo from '../Content/AccountInfo';
import Cart from '../Content/Cart'; // Importa el componente de carrito

export default function Header({ onLoginClick, onNavigation, cartItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHover, setHeaderHover] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // Estado para el carrito

  const menuItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Tienda', id: 'tienda' },
    { name: 'Acerca de', id: 'acerca' },
    { name: 'Contacto', id: 'contacto' },
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleNavClick = (id) => {
    onNavigation(id);
    setMenuOpen(false); // Cierra el menú después de hacer clic
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen); // Cambia el estado del carrito
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

        {/* Navegación en pantallas grandes */}
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

          {/* Botón de cuenta (solo para pantallas grandes) */}
          <AccountInfo isAuthenticated={isAuthenticated} />

          {/* Botón del carrito */}
          <div className="relative ml-4">
            <button onClick={toggleCart} className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-gray-900" />
              {/* Muestra el número de artículos en el carrito */}
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Botón para el menú móvil */}
        <div className="flex items-center md:hidden">
          {/* Botón del carrito para pantallas móviles */}
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

          {/* Menú hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-900 flex items-center relative"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
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

          {/* Muestra el botón de sesión en el menú móvil */}
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

      {cartOpen && <Cart cartItems={cartItems} onClose={() => setCartOpen(false)} />}
    </header>
  );
}
