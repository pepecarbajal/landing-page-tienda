import React, { useState } from 'react';
import CreditCardForm from './CreditCardForm'; // Asegúrate de que la ruta sea correcta

export default function Cart({ cartItems, onClose }) {
  const [isCheckout, setIsCheckout] = useState(false); // Estado para controlar la vista de checkout


  const handleBuyNow = () => {
    setIsCheckout(true); // Cambiar a la vista de checkout
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-md p-6 w-96 max-h-[90vh] overflow-y-auto">
        {isCheckout ? (
          <CreditCardForm
            totalAmount={totalAmount}
            onClose={onClose}
            cartItems={cartItems}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Mi Carrito</h2>
              <button
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
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
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-red-300 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  Comprar Ahora
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
