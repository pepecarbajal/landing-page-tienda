import React, { useState, useEffect } from 'react';

const OfferTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 horas en segundos

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
    <div className="fixed left-0 top-1/4 -translate-y-1/2 bg-[#ff2222] text-white p-4 rounded-r-lg shadow-lg z-50">
      <div className="text-2xl font-bold mb-2">¡40% Off!</div>
      <div className="text-4xl font-mono">{formatTime(timeLeft)}</div>
      <div className="text-sm mt-2">Tiempo restante</div>
    </div>
  );
};

export default OfferTimer;
