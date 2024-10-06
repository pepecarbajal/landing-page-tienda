import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from './clogo.png'

export default function Header({ onLoginClick, onRegisterClick, onNavigation }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHover, setHeaderHover] = useState(false)

  const menuItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Tienda', id: 'tienda' },
    { name: 'Acerca de', id: 'acerca' },
    { name: 'Contacto', id: 'contacto' },
  ]

  const handleNavClick = (id) => {
    onNavigation(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-700 ${
        headerHover || menuOpen ? 'bg-transparent' : 'bg-transparent'
      }`}
      onMouseEnter={() => setHeaderHover(true)}
      onMouseLeave={() => {
        if (!menuOpen) {
          setHeaderHover(false)
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
          <button onClick={onLoginClick} className="text-gray-900 hover:text-gray-600 text-2xl">
            Iniciar Sesión
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-gray-900"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 h-screen bg-yellow-400 flex flex-col items-center justify-center py-4 md:hidden">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-900 hover:text-gray-600 text-5xl mb-6"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onLoginClick()
              setMenuOpen(false)
            }} 
            className="text-gray-900 hover:text-gray-600 text-5xl mb-6"
          >
            Iniciar Sesión
          </button>
        </nav>
      )}
    </header>
  )
}