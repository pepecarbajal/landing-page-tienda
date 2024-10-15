import React, { useState } from 'react';
import { X } from 'lucide-react';

const Login = ({ onRegisterClick, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Realizar la solicitud de inicio de sesión
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Agrega un log para revisar los datos recibidos
      console.log('Datos recibidos del servidor:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      // Asegurarse de que el token exista antes de guardarlo
      if (data.token) {
        localStorage.setItem('token', data.token); // Guarda el token en localStorage
        window.location.reload()
      } else {
        console.error('Token indefinido:', data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-gray-200 p-8 rounded-lg max-w-sm w-full">
        {/* Botón de cierre (X) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Te damos la bienvenida a HAME</h2>

        {/* Mostrar error si existe */}
        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 hover:underline">
            ¿Olvidaste la contraseña?
          </p>
        </div>
        <div className="mt-4 text-center">
          <button onClick={onRegisterClick} className="text-sm text-gray-600 hover:underline">
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
