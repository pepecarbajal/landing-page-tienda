import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/Content/HeroSection'
import AboutUs from './components/Content/AboutUs'
import './index.css'
import ImageSlider from './components/Content/ImageSlider'
import Productos from './components/Content/Productos'
import ImageSlide from './components/Content/ImageSlide'
import HameStore from './components/Content/HameStore'
import Siguenos from './components/Content/Siguenos'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Contact from './components/Content/Contact'

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [currentPage, setCurrentPage] = useState('inicio')

  const handleLoginClick = () => {
    setShowLogin(true)
    setShowRegister(false)
  }

  const handleRegisterClick = () => {
    setShowRegister(true)
    setShowLogin(false)
  }

  const handleCloseAuth = () => {
    setShowLogin(false)
    setShowRegister(false)
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
    handleCloseAuth()
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <>
            <HeroSection />
            <ImageSlider />
            <Productos />
            <ImageSlide />
            <AboutUs />
            <HameStore />
            <Siguenos />
          </>
        )
      case 'tienda':
        // Implement Tienda page content
        return <div>Tienda Content</div>
      case 'acerca':
        // Implement Acerca de page content
        return <div>Acerca de Content</div>
      case 'contacto':
        // Implement Contacto page content
        return <Contact />
      default:
        return null
    }
  }

  return (
    <>
      <Header 
        onLoginClick={handleLoginClick} 
        onRegisterClick={handleRegisterClick}
        onNavigation={handleNavigation}
      />
      {showLogin && <Login onRegisterClick={handleRegisterClick} onClose={handleCloseAuth} />}
      {showRegister && <Register onLoginClick={handleLoginClick} onClose={handleCloseAuth} />}
      {renderContent()}
    </>
  )
}