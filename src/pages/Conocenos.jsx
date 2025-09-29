import React from 'react';
import { Card } from '../components/Card';
import { useUI } from '../context/UIContext';
import { MissionVision } from '../components/MissionVision';

const Conocenos = () => {
  const { setActiveTab } = useUI();
  React.useEffect(() => setActiveTab('conocenos'), [setActiveTab]);

  return (
    <div className="pt-4 pb-32 mx-auto max-w-2xl flex flex-col items-center  bg-amber-100">
      <h2 className="text-lg font-semibold mb-3">Conócenos</h2>

      <Card title="Quiénes somos" subtitle="Equipo">
        Somos un equipo enfocado en entregar prototipos móviles fieles al diseño.
      </Card>

      <MissionVision />
    </div>
  );
};

export default Conocenos;
