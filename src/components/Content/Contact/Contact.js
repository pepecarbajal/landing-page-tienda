import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    mensaje: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://serverhame.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Formulario enviado correctamente');
        setFormData({ nombre: '', apellidos: '', correo: '', mensaje: '' }); // Reinicia el formulario
      } else {
        setErrorMessage('Hubo un error al enviar el formulario');
      }
    } catch (error) {
      setErrorMessage('Error al conectarse con el servidor');
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-[150px]">
      {/* Contenedor de contenido que excluye el header */}
      <div className="flex-1 overflow-auto bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Acerca de Nosotros</h2>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Ponte en contacto con nosotros.</h3>
            <p className="mb-2">hame131102@gmail.com</p>
            <p className="mb-2">(747) 1 928168</p>
            <p>Av. Guerrero, 37-B<br />Chilpancingo, Gro 39000</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  requiredz
                  value={formData.nombre}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="apellidos" className="block text-gray-700 text-sm font-bold mb-2">
                  Apellidos <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  required
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gray-200 text-red-500 font-bold py-2 px-8 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
              >
                ENVIAR
              </button>
            </div>
          </form>

          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
