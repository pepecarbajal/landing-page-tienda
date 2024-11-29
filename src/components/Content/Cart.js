import React, { useState, useEffect } from 'react';
import CreditCardForm from './CreditCardForm';

export default function Cart({ cartItems, onClose, carritoLimpio }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleBuyNow = () => {
    setIsCheckout(true);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const isBuyNowDisabled = !isLoggedIn || cartItems.length === 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-md p-6 w-96 max-h-[70vh] flex flex-col">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Mi Carrito</h2>
        </div>

        <div className="flex-grow overflow-y-auto">
          {isCheckout ? (
            <CreditCardForm
              totalAmount={totalAmount}
              onClose={onClose}
              cartItems={cartItems}
              carritoLimpio={carritoLimpio}
            />
          ) : (
            <>
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 py-4">No hay productos en el carrito.</p>
              ) : (
                <>
                  <ul className="mb-4 divide-y divide-gray-200">
                    {cartItems.map((item, index) => (
                      <li key={`${item.id}-${index}`} className="flex justify-between items-center py-3">
                        <span className="font-medium">{item.name} (x{item.quantity})</span>
                        <span className="font-medium">${item.totalPrice.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="font-semibold text-lg mb-4 text-right">
                    Total: ${totalAmount.toFixed(2)}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="flex space-x-2 mt-4">
          <button
            className="flex-1 text-red-500 hover:text-red-700 transition-colors duration-200"
            onClick={onClose}
          >
            Cerrar
          </button>
          <button
            onClick={isBuyNowDisabled ? null : handleBuyNow}
            disabled={isBuyNowDisabled}
            className={`flex-1 ${isBuyNowDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
              } text-white font-semibold py-2 rounded-md transition-colors duration-200`}
          >
            {isBuyNowDisabled ? 'Agrega productos para comprar' : 'Comprar Ahora'}
          </button>

        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <button
            onClick={openModal}
            className="text-gray-500 hover:underline"
          >
            Código de Ética
          </button>

          <a
            href="/contrato.pdf"
            download="Contrato HAME.pdf"
            className="text-gray-500 hover:underline"
          >
            Descargar Contrato
          </a>
        </div>




      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-lg sm:w-96 max-h-[70vh] overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
              Código de Ética de HAME
            </h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed text-justify">
              En HAME, nos comprometemos a mantener los más altos estándares éticos en todas nuestras operaciones y relaciones comerciales. Nuestro código de ética refleja nuestros valores fundamentales y nuestro compromiso con la integridad, la transparencia y la responsabilidad social. Todos los empleados y colaboradores de HAME están obligados a cumplir con los siguientes principios:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-700 mb-4 space-y-2 text-justify">
              <li>
                <strong>Calidad y Excelencia:</strong> Nos comprometemos a ofrecer productos de la más alta calidad, elaborados con ingredientes frescos y naturales, siguiendo los más altos estándares de higiene y seguridad alimentaria.
              </li>
              <li>
                <strong>Transparencia y Honestidad:</strong> Nos comprometemos a ser transparentes y honestos en todas nuestras comunicaciones y transacciones comerciales. No toleramos el fraude, la corrupción ni ningún tipo de comportamiento deshonesto.
              </li>
              <li>
                <strong>Sostenibilidad y Responsabilidad Ambiental:</strong> Nos comprometemos a minimizar nuestro impacto ambiental y a promover prácticas comerciales sostenibles. Buscamos reducir el desperdicio de recursos, reciclar siempre que sea posible y apoyar iniciativas que contribuyan a la protección del medio ambiente.
              </li>
              <li>
                <strong>Servicio al Cliente:</strong> Nos comprometemos a brindar un servicio al cliente excepcional, basado en la cortesía, la amabilidad y la atención personalizada. Nos esforzamos por superar las expectativas de nuestros clientes en cada interacción.
              </li>
              <li>
                <strong>Comunidad y Compromiso Social:</strong> Nos comprometemos a ser buenos ciudadanos corporativos y a contribuir positivamente al bienestar de las comunidades donde operamos. Apoyamos iniciativas sociales y comunitarias que promuevan la equidad, la inclusión y el desarrollo sostenible.
              </li>
              <li>
                <strong>Ética en la Competencia:</strong> Nos comprometemos a competir de manera justa y ética en el mercado, respetando las leyes y regulaciones vigentes. No participamos en prácticas comerciales desleales ni en actividades que puedan dañar la reputación de nuestra empresa o de la industria en general.
              </li>
            </ol>
            <p className="text-sm text-gray-700 mb-4 text-justify">
              Todos los empleados y colaboradores de HAME son responsables de conocer y cumplir con este código de ética en todo momento. Cualquier violación de estos principios será tratada con seriedad y puede dar lugar a medidas disciplinarias, incluida la terminación del empleo o la relación comercial.
            </p>
            <p className="text-sm text-gray-500 text-center">
              Fecha de Entrada en Vigencia: 12/05/2024
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-rojo text-white rounded-md hover:bg-red-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}






    </div>

  );
}
