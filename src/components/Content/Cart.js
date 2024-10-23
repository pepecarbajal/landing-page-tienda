// src/Components/Cart.js
import React from 'react';

export default function Cart({ cartItems, onClose }) {
  const handleBuyNow = () => {
    console.log('Proceeding to checkout...');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-md p-6 w-96 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Carrito de Compras</h2>
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
  {cartItems.map((item) => (
    <li key={item.id} className="flex justify-between items-center py-3">
      <span className="font-medium">{item.name} (x{item.quantity})</span>
      <span className="font-medium">${item.totalPrice.toFixed(2)}</span>
    </li>
  ))}
</ul>




            <button
              onClick={handleBuyNow}
              className="w-full bg-red-300 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              Comprar Ahora
            </button>
          </>
        )}
      </div>
    </div>
  );
}
