// src/Components/Cart.js
import React from 'react';

export default function Cart({ cartItems, onClose }) {
  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 z-50">
      <button className="mb-2 text-red-500" onClick={onClose}>Cerrar</button>
      <h2 className="text-lg font-semibold mb-2">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
