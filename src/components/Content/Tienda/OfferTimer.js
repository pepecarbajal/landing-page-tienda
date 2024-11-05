import React, { useState, useEffect } from 'react';

const OfferTimer = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 30 * 60); // 24 horas en segundos
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar expansión

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`fixed left-0 top-1/4 -translate-y-1/2 bg-rojo text-white rounded-r-lg shadow-lg z-50 transition-transform duration-300 ease-in-out cursor-pointer ${
        isExpanded ? 'translate-x-0' : '-translate-x-[calc(100%-3rem)]'
      }`}
      style={{ width: isExpanded ? 'auto' : '3.5rem' }} // Ajustar el ancho al estar colapsado
    >
      <div className="p-4">
        {isExpanded ? (
          <>
            <div className="text-2xl font-bold mb-2">¡40% Off!</div>
            <div className="text-4xl font-mono">{formatTime(timeLeft)}</div>
            <div className="text-sm mt-2">Tiempo restante</div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            {/* Texto ajustado para modo colapsado */}
            <div className="text-sm font-bold">¡40% Off!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferTimer;