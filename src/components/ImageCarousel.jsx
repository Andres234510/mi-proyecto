import React, { useState } from 'react';

const cardData = [
  {id: 1, src: '/carrucel/IMG_6974.JPG', alt: ''}, 
  {id: 2, src: '/carrucel/IMG_6975.JPG', alt: ''}, 
  {id: 3, src: '/carrucel/IMG_6976.JPG', alt: ''},
  {id: 4, src: '/carrucel/IMG_6977.JPG', alt: ''},
  {id: 5, src: '/carrucel/IMG_6978.JPG', alt: ''},
  {id: 6, src: '/carrucel/IMG_6979.JPG', alt: ''},
  {id: 7, src: '/carrucel/IMG_6980.JPG', alt: ''}
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Empezamos en la tarjeta naranja (índice 1)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="carousel-container">
      {/* Flecha Izquierda */}
      <button className="carousel-arrow left-arrow" onClick={handlePrev}>
        {/* Usar un SVG o un carácter como '◀' o '&#x25C0;' */}
        ◀
      </button>

      {/* Contenedor de las Tarjetas */}
      <div className="carousel-cards-wrapper">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`carousel-card ${index === activeIndex ? 'active' : ''}`}
            // ❌ ELIMINA: style={{ backgroundColor: card.color, zIndex: ... }}
            style={{ zIndex: cardData.length - Math.abs(activeIndex - index) }}
            // Ahora, el color será definido por el CSS o por la imagen misma
          >
            {/* ✅ AGREGAR: El elemento de la imagen */}
            <img 
              src={card.src} 
              alt={card.alt} 
              className="card-image"
            />
          </div>
        ))}
      </div>

      {/* Flecha Derecha */}
      <button className="carousel-arrow right-arrow" onClick={handleNext}>
        {/* Usar un SVG o un carácter como '▶' o '&#x25B6;' */}
        ▶
      </button>

      {/* Paginación (1/7) */}
      <div className="carousel-pagination">
        {activeIndex + 1} / {cardData.length}
      </div>
    </div>
  );
};

export default ImageCarousel;