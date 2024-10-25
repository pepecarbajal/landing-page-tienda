import React, { useState } from 'react';
import { X } from 'lucide-react';

const Register = ({ onLoginClick, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // Realizar la solicitud de registro
      const response = await fetch('http://192.168.0.2:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar');
      }

      setSuccess('Registro exitoso. Ahora puedes iniciar sesión.');
      // Opcionalmente, puedes cerrar el modal o redirigir al usuario.

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

        <h2 className="text-2xl font-bold mb-4 text-center">Crear una cuenta en HAME</h2>

        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

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
          <div>
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={onLoginClick} className="text-sm text-gray-600 hover:underline">
            ¿Ya tienes una cuenta? Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
