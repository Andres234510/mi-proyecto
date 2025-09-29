// VideoCard.jsx (Ajustado para videos de Google Drive)

import React from 'react';

const VideoCard = ({ title, description, driveFileId }) => {
  // NOTA IMPORTANTE:
  // 1. El prop 'videoUrl' ha sido reemplazado por 'driveFileId'.
  // 2. 'driveFileId' debe ser el ID único del archivo de video en Google Drive.
  // 3. El archivo en Google Drive debe tener permisos de "Cualquier persona con el enlace".
  
  // URL de incrustación de Google Drive: 
  // 'https://drive.google.com/file/d/{driveFileId}/preview'
  // Esto genera una URL de incrustación que funciona bien en un iframe.
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  return (
    <div className="service-card video-card"> 
      <div className="card-image-container video-container">
        {/* Usamos un <iframe> para incrustar el reproductor de Google Drive */}
        <iframe 
          title={`Video: ${title}`} // Título para accesibilidad
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0" // Elimina el borde predeterminado
          allow="autoplay; fullscreen; picture-in-picture" // Permite fullscreen y otras opciones
          allowFullScreen // Permite la visualización en pantalla completa
          className="card-video-iframe"
          // NOTA: Los videos de Drive ya tienen controles de reproducción.
        >
        </iframe>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;