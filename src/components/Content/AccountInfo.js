import React, { useState, useRef, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import iconAccount from '../Content/img/acountIcon.png'; // Adjust the icon path if needed
import Compras from './Compras';

const AccountInfo = ({ isAuthenticated }) => {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showCompras, setShowCompras] = useState(false);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const accountInfoRef = useRef(null);

  const toggleAccountInfo = () => {
    setShowAccountInfo(!showAccountInfo);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountInfoRef.current && !accountInfoRef.current.contains(event.target)) {
        setShowAccountInfo(false);
        setShowCompras(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setEmail(decoded.email || "Email no disponible");
        setUserId(decoded.id || "ID no disponible");
      } catch (error) {
        console.error('Error decodificando el token:', error);
        setEmail(null);
        setUserId(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const openCompras = () => {
    setShowCompras(true);
  };

  const closeCompras = () => {
    setShowCompras(false);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="relative" ref={accountInfoRef}>
      <div
        className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer border-2 border-red-600 hover:border-red-700 transition-colors duration-300"
        onClick={toggleAccountInfo}
      >
        <img 
          src={iconAccount} 
          alt="Account" 
          className="h-full w-full object-cover"
        />
      </div>
      {showAccountInfo && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-80 border-t-4 border-red-600">
          <h4 className="text-2xl font-bold text-red-600 mb-4">Mi Cuenta</h4>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="text-gray-600 mr-2">📧</span>
              <span className="font-medium">{email}</span>
            </p>
            <p className="flex items-center">
              <span className="text-gray-600 mr-2">🆔</span>
              <span className="font-medium">{userId}</span>
            </p>
          </div>
          {(userId === "672174f27f6b1df4cab10502" || userId === "672d884bf72803508ccf96db") && (
            <button 
              onClick={openCompras} 
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Ver Compras
            </button>
          )}
          <button 
            onClick={handleLogout} 
            className="mt-3 w-full bg-white text-red-600 py-2 px-4 rounded-md border border-red-600 hover:bg-red-50 transition-colors duration-300"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
      {showCompras && <Compras onClose={closeCompras} />}
    </div>
  );
};

export default AccountInfo;
