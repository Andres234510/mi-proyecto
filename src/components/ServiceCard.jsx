// ServiceCard.jsx

import React, { useState } from 'react';
const ServiceCard = ({ title, description, imageUrl, imageAlt }) => {
  const [isZoomed, setIsZoomed] = useState(false); // Nuevo estado para controlar el zoom

  const handleImageClick = () => {
    setIsZoomed(!isZoomed); // Alternar el estado de zoom
  };

  return (
    <div className="service-card">
      <div 
        className={`card-image-container ${isZoomed ? 'zoomed-container' : ''}`} // Clase condicional
        onClick={handleImageClick} // Manejador de clic
      >
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className={`card-image ${isZoomed ? 'zoomed-image' : ''}`} // Clase condicional
        />
        {/* Opcional: Icono o texto para indicar que se puede hacer clic */}
        {!isZoomed && <div className="click-to-zoom-overlay">Haz clic para ampliar</div>}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;