'use client'

import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

const Compras = ({ onClose }) => {
  const [compras, setCompras] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch('https://serverhame-tg6x.onrender.com/api/compras')
        if (!response.ok) {
          throw new Error('Error al obtener las compras')
        }
        const data = await response.json()
        setCompras(data)
      } catch (error) {
        console.error(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCompras()
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p>{error}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 bg-rojo text-white border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Ventas</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          {compras.length === 0 ? (
            <p className="text-center text-gray-500">No hay compras registradas.</p>
          ) : (
            compras.map((compra) => (
              <div key={compra._id} className="mb-6 border rounded-lg p-4 shadow">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold">
                    Compra ID: {compra._id.slice(-6)}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {format(new Date(compra.createdAt), "d 'de' MMMM 'de' yyyy 'a las' HH:mm")}
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span>{compra.userEmail}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${compra.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold mb-2">Artículos:</h4>
                    <ul className="space-y-2">
                      {compra.cartItems.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span>🛍️</span>
                          <span>{item.name} - ${item.price} x {item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Compras