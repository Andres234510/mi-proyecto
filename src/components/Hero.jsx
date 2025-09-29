import React from 'react';

export const Hero = () => {
  // SVG hero embebido para no depender de assets externos
  const HeroSVG = () => (
    <svg viewBox="0 0 800 300" className="max-w-2xl h-44 object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#f6f2ff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <g transform="translate(40,40)">
        <rect x="0" y="0" width="720" height="220" rx="18" fill="#fff" stroke="#eee"/>
        <text x="50" y="100" fill="#5b21b6" fontSize="28" fontFamily="Arial">Historia del Festival Camino del Quindío</text>
      </g>
    </svg>
  );

  return (
    <div className="rounded-2xl overflow-hidden shadow-md-purple card-shadow">
      <HeroSVG />
      <div className="p-4 bg-white">
        <h2 className="text-lg font-bold text-gray-800">Bienvenido</h2>
        <p className="text-sm text-gray-600 mt-1">
          El Festival Camino del Quindío, celebrado en Filandia, nació en 2010 como 
          iniciativa del Comité Pro-Camino del Quindío durante la conmemoración del 
          Bicentenario de la Independencia. Su propósito es rescatar la memoria del 
          antiguo Camino del Quindío, ruta histórica que unió el centro y el occidente 
          del país entre los siglos XVIII y XIX, vital para el tránsito de viajeros, 
          mercancías y colonizadores.
          <br /><br />
          Este evento busca preservar la identidad cultural, promover el turismo y 
          fortalecer la economía local a través de desfiles históricos, música, danza, 
          gastronomía, artesanías, recorridos patrimoniales y actividades ambientales.
          <br /><br />
          Con el tiempo, el festival se ha consolidado como una de las celebraciones 
          más importantes del Quindío, proyectando a Filandia como epicentro de tradición, 
          historia y cultura dentro del Paisaje Cultural Cafetero, declarado Patrimonio Mundial.
          </p>
      </div>
    </div>
  );
};
