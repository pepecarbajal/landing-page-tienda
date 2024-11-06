import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Cart from '../Cart';

export default function CartButton({ cartItems, carritoLimpio }) {
  const [isCartOpen, setIsCartOpen] = useState(false); // Controla la apertura del carrito

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {/* Botón de carrito deslizante en la derecha */}
      <div
        onClick={toggleCart}
        className={`fixed right-0 top-1/16 -translate-y-1/2 bg-rojo text-white rounded-l-lg shadow-lg z-50 transition-transform duration-300 ease-in-out cursor-pointer ${
          isCartOpen ? 'translate-x-0' : 'translate-x-[calc(100%-3.5rem)]'
        }`}
        style={{ width: isCartOpen ? 'auto' : '3.5rem' }} // Ajustar ancho según expansión
      >
        <div className="p-3 flex flex-col items-center">
          {isCartOpen ? (
            <>
              
            </>
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-white text-rojo text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mostrar Cart en el centro de la pantalla cuando isCartOpen esté en true */}
      {isCartOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50"
          onClick={() => setIsCartOpen(false)} // Cerrar carrito al hacer clic fuera del Cart
        >
          <div
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro del Cart
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
          >
            <Cart cartItems={cartItems} onClose={() => setIsCartOpen(false)} carritoLimpio={carritoLimpio}/>
          </div>
        </div>
      )}
    </>
  );
}
