
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreditCardForm({ totalAmount, onClose }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      onClose();
    }, 3000); // Close after 3 seconds
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = value;

    if (value.length > 2) {
      formattedValue = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    setExpiryDate(formattedValue);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        >
          {!showThankYou ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Pagar ${totalAmount.toFixed(2)}</h2>

              <div className="mb-6 bg-gradient-to-r from-[#ff7222] to-[#ff4325] p-4 rounded-lg shadow-lg text-white h-[13em]">
                <div className="mb-4">
                  <div className="text-xl mt-5 font-mono">{cardNumber || '•••• •••• •••• ••••'}</div>
                </div>
                <div className="flex mt-9 justify-between">
                  <div>
                    <div className="text-xs uppercase">Titular de la Tarjeta</div>
                    <div>{cardName || 'NOMBRE AQUÍ'}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase">Expira</div>
                    <div>{expiryDate || 'MM/AA'}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block mb-1">Número de Tarjeta</label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                    maxLength={19}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="cardName" className="block mb-1">Nombre en la Tarjeta</label>
                  <input
                    id="cardName"
                    type="text"
                    placeholder="Hazel Nose Que"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="expiryDate" className="block mb-1">Fecha de Expiración</label>
                    <input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/AA"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      maxLength={7}
                      required
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvv" className="block mb-1">CVV</label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={3}
                      required
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button type="button" onClick={onClose} className="border border-gray-300 text-gray-700 p-2 rounded hover:bg-gray-200">
                    Cancelar
                  </button>
                  <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Pagar
                  </button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-10"
            >
              <h2 className="text-3xl font-bold text-red-600 mb-4">¡Gracias por comprar en HAME!</h2>
              <p className="text-lg text-gray-600">Su pago ha sido procesado con éxito.</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}