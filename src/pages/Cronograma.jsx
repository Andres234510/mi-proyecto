import React from 'react';
import { Timeline } from '../components/Timeline';
import { useUI } from '../context/UIContext';
import ImageCarousel from '../components/ImageCarousel';

const Cronograma = () => {
  const { setActiveTab } = useUI();
  React.useEffect(() => setActiveTab('cronograma'), [setActiveTab]);

  const data = [
    { title: 'Análisis', date: '01 Sep', desc: 'Revisar requisitos y prototipo.' },
    { title: 'Diseño', date: '10 Sep', desc: 'Maquetación móvil y componentes.' },
    { title: 'Implementación', date: '20 Sep', desc: 'Desarrollo de funcionalidades.' }
  ];

  return (
    <div className="pt-4 pb-32 max-w-2xl mx-auto px-4 bg-amber-100">
      <h2 className="text-lg font-semibold mb-3">Cronograma</h2>
      <Timeline items={data} />
      <ImageCarousel />
    </div>
  );
};

export default Cronograma;
