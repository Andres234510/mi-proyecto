import React from 'react';

export const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 border border-gray-100 card-shadow">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-purplebrand-500 text-white flex items-center justify-center">M</div>
          <div>
            <div className="font-semibold text-gray-800">Misión</div>
            <div className="text-sm text-gray-600 mt-1">
              El Festival Camino del Quindío tiene como misión preservar, 
              recuperar y difundir la memoria histórica y cultural ligada 
              al antiguo Camino del Quindío, una de las rutas más emblemáticas 
              del país. A través de actividades artísticas, patrimoniales y 
              ambientales, el festival busca fortalecer la identidad de los 
              habitantes de Filandia y del departamento, integrando generaciones 
              en torno a la historia, la tradición y el sentido de pertenencia. <br /><br />
              De igual forma, promueve la participación activa de la comunidad, 
              visitantes e instituciones en un espacio de encuentro que resalta 
              la riqueza cultural, natural y social de la región. El festival 
              fomenta el turismo cultural y sostenible, impulsa la economía local 
              mediante la visibilización de artesanos, artistas y emprendedores, 
              y se proyecta como un escenario que une la memoria colectiva con 
              nuevas formas de creación y convivencia.
              </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 border-gray-100 card-shadow">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-purplebrand-700 text-white flex items-center justify-center">V</div>
          <div>
            <div className="font-semibold text-gray-800">Visión</div>
            <div className="text-sm text-gray-600 mt-1">
              El Festival Camino del Quindío se proyecta como un referente 
              cultural y patrimonial del Eje Cafetero y de toda Colombia, 
              reconocido por su capacidad de unir historia, arte, naturaleza 
              y comunidad en un solo escenario. Busca consolidarse como un 
              evento de gran alcance que trascienda las fronteras regionales, 
              atrayendo visitantes nacionales e internacionales interesados 
              en vivir la experiencia del Paisaje Cultural Cafetero.
              <br /><br />
              En el futuro, el festival aspira a convertirse en un motor de 
              desarrollo cultural y turístico que aporte a la conservación del 
              Camino del Quindío como patrimonio histórico y ambiental, al 
              mismo tiempo que fortalece la identidad local y promueve valores 
              de inclusión, respeto y sostenibilidad. De esta manera, se 
              mantendrá vivo el legado del Camino para las generaciones 
              presentes y venideras, posicionando a Filandia como un epicentro 
              de tradición, memoria y cultura viva.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
