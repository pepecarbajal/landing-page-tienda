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
        <div className="mt-2 text-center">
          <button
            onClick={openModal}
            className="text-gray-500 hover:underline"
          >
            Ver Política de Privacidad
          </button>
        </div>


      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
            <p className="text-sm text-gray-700 mb-4">
              Ullamco culpa eu labore occaecat enim. Ipsum nostrud qui duis qui elit irure. Irure pariatur anim anim velit nulla exercitation nulla anim anim eu proident enim ipsum deserunt.

Amet cillum esse ullamco consequat aute nisi occaecat. Commodo id sint ipsum qui exercitation culpa reprehenderit cupidatat minim ad Lorem qui. Elit nulla est aliqua occaecat fugiat dolore proident occaecat.

Nisi tempor sunt duis adipisicing. Ad fugiat aliqua commodo Lorem do enim enim velit. Voluptate do incididunt in nulla irure adipisicing dolore nisi amet irure ad. Deserunt pariatur enim officia sit sit elit Lorem. Velit proident ipsum reprehenderit nulla culpa nisi deserunt velit consequat Lorem est. Ut culpa nostrud deserunt cillum sit aliquip.

Eiusmod amet in proident commodo esse anim deserunt commodo minim cupidatat. Commodo sunt culpa veniam duis do. Sint irure sunt in occaecat adipisicing cupidatat ea. Anim exercitation eu labore tempor ad nostrud.
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}


    </div>

  );
}
