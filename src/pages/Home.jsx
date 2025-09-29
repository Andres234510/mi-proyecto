// src/pages/Home.jsx
import React from 'react';
import { Hero } from '../components/Hero';
import { MissionVision } from '../components/MissionVision';
import { Card } from '../components/Card';
import { useUI } from '../context/UIContext';

const Home = () => {
  const { setActiveTab } = useUI();

  React.useEffect(() => {
    setActiveTab('inicio');
  }, [setActiveTab]);

  const featured = [
    { title: 'Proyecto A', desc: 'App móvil X' },
    { title: 'Proyecto B', desc: 'Landing Y' },
    { title: 'Proyecto C', desc: 'Dashboard Z' },
    { title: 'Proyecto D', desc: 'E-commerce simple' }
  ];

  return (
    <div className="pt-4 pb-32 mx-auto max-w-2xl px-14 bg-amber-100 ">
      <Hero />

      <section className="mt-4">
        <MissionVision />
      </section>


      <section className="mt-4">
        <Card title="Sobre el prototipo">
          Este diseño reproduce las pantallas entregadas en el prototipado: Inicio, Cronograma, Conócenos y Portafolio.
        </Card>
      </section>
    </div>
  );
};

export default Home;
