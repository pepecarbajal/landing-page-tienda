import React, { useState, useRef, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Asegúrate de que está importado correctamente
import iconAccount from '../Content/img/acountIcon.png';

const AccountInfo = ({ isAuthenticated }) => {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [email, setEmail] = useState(null); // Estado para almacenar el correo
  const [userId, setUserId] = useState(null); // Estado para almacenar el ID del usuario
  const accountInfoRef = useRef(null);

  const toggleAccountInfo = () => {
    setShowAccountInfo(!showAccountInfo);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountInfoRef.current && !accountInfoRef.current.contains(event.target)) {
        setShowAccountInfo(false);
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
        setEmail(decoded.email || "Email no disponible"); // Proporciona un valor por defecto
        setUserId(decoded.id || "ID no disponible"); // Extrae el ID del usuario
      } catch (error) {
        console.error('Error decodificando el token:', error);
        setEmail(null); // O maneja el estado de error
        setUserId(null); // O maneja el estado de error
      }
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token del localStorage
    window.location.reload(); // Recarga la página
  };

  if (!isAuthenticated) return null; // No renderiza nada si no está autenticado

  return (
    <div className="relative" ref={accountInfoRef}>
      <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center cursor-pointer border border-gray-300" onClick={toggleAccountInfo}>
        <img src={iconAccount} alt="Account" className="h-full w-full object-cover" />
      </div>
      {showAccountInfo && (
        <div className="absolute top-full right-0 bg-white shadow-md rounded-md p-4 mt-2">
          <h4 className="text-lg font-bold">Cuenta</h4>
          <p>Email: {email}</p> {/* Mostrar el correo aquí */}
          <p>ID de Usuario: {userId}</p> {/* Mostrar el ID del usuario aquí */}
          <button onClick={handleLogout} className="mt-2 text-red-500">
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
