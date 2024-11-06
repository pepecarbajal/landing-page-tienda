import React, { useState } from 'react';
import CreditCardForm from './CreditCardForm'; // Ensure the path is correct

export default function Cart({ cartItems, onClose, clearCart }) {
  const [isCheckout, setIsCheckout] = useState(false); // State to control checkout view

  const handleBuyNow = () => {
    setIsCheckout(true); // Switch to checkout view
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-md p-6 w-96 max-h-[70vh] flex flex-col">
        {/* Static Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Mi Carrito</h2>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto">
          {isCheckout ? (
            <CreditCardForm
              totalAmount={totalAmount}
              onClose={onClose}
              cartItems={cartItems}
              clearCart={clearCart}
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

        {/* Buttons positioned at the bottom */}
        <div className="flex space-x-2 mt-4">
          <button
            className="flex-1 text-red-500 hover:text-red-700 transition-colors duration-200"
            onClick={onClose}
          >
            Cerrar
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}
