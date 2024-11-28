import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header/Header';

import HeroSection from './components/Content/Home/HeroSection';
import AboutUs from './components/Content/Home/AboutUs';
import Productos from './components/Content/Home/Productos';
import ImageSlider from './components/Content/Home/ImageSlider';
import ImageSlide from './components/Content/Home/ImageSlide';
import HameStore from './components/Content/Home/HameStore';
import Siguenos from './components/Content/Home/Siguenos';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Contact from './components/Content/Contact/Contact';
import ProductPage from './components/Content/Tienda/ProductPage';
import Favoritos from './components/Content/Favoritos';
import Acerca from './components/Content/Acerca/Acerca';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio');
  const [cartItems, setCartItems] = useState([]); // Estado para los artículos del carrito

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleCloseAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    handleCloseAuth();
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // Update the quantity and recalculate the price for the existing product
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
          : item
      ));
    } else {
      // Add the product with quantity 1 and initial total price calculation
      setCartItems([...cartItems, { ...product, quantity: 1, totalPrice: product.price }]);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <HeroSection />
            <ImageSlider />
            <Productos onAddToCart={handleAddToCart} /> {/* Pasar función al componente Productos */}
            <ImageSlide />
            <AboutUs />
            <HameStore />
            <Siguenos />
          </>
        );
      case 'tienda':
        return <ProductPage onAddToCart={handleAddToCart} />;
      case 'contacto':
        return <Contact />;
      case 'favoritos':
        return <Favoritos />;
      case 'acerca':
        return <Acerca />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header
        cartItems={cartItems} // Pasar cartItems al Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onNavigation={handleNavigation}
      />
      {showLogin && <Login onRegisterClick={handleRegisterClick} onClose={handleCloseAuth} />}
      {showRegister && <Register onLoginClick={handleLoginClick} onClose={handleCloseAuth} />}
      {renderContent()}
    </>
  );
}
