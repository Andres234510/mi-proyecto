// ServicesSection.jsx

import React from 'react';
import ServiceCard from './ServiceCard';
import VideoCard from './VideoCard'; 

  const driveIdVideo1 = "1efkjBTCHY5dyJH_F1Fep1w5kQFwzAvvp"; // EJEMPLO: 1S0ME_ABC...
  const driveIdVideo2 = "1qqiZU3MnKT4DAoO8PmSsh170MgH0ceWj"; // EJEMPLO: 1Yv_XYZ...

const ServicesSection = () => {
  return (
    <div className="services-section-container">
      <h2>Nuestro Portafolio</h2>
      <div className="card-grid">
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          // ¡Ruta corregida! La imagen se busca en la raíz del servidor.
          imageUrl="/images/IMG_6442.JPG" 
          imageAlt="Icono de desarrollo web"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="/images/IMG_6467.JPG"
          imageAlt="Icono de diseño UX"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="/images/IMG_6495.JPG"
          imageAlt="Icono de consultoría"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="/images/IMG_6504.JPG"
          imageAlt="Icono de marketing digital"
        />
        <ServiceCard
          title="Desarrollado por:"
          description="..."
          imageUrl="/images/IMG_6596.JPG"
          imageAlt="Icono de marketing digital"
        />

        <VideoCard
          title="Video Demostrativo 1"
          description="Una descripción breve del contenido del video 1."
          driveFileId={driveIdVideo1} // <-- ¡Propiedad actualizada!
        />
        
        <VideoCard
          title="Video Explicativo 2"
          description="Una descripción breve del contenido del video 2."
          driveFileId={driveIdVideo2} // <-- ¡Propiedad actualizada!
        />
      </div>
    </div>
  );
};

export default ServicesSection;