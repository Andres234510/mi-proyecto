import React from 'react';
import { useUI } from '../context/UIContext';
import { Card } from '../components/Card';

const SearchResults = () => {
  const { searchQuery } = useUI();
  const fakeResults = [
    { title: 'Resultado 1', snippet: `Coincide con "${searchQuery}"` },
    { title: 'Resultado 2', snippet: `Otro resultado para "${searchQuery}"` }
  ];

  return (
    <div className="pt-4 pb-32 max-w-md mx-auto px-4">
      <h2 className="text-lg font-semibold mb-3">Buscar</h2>
      {searchQuery ? fakeResults.map((r, i) => (
        <Card key={i} title={r.title}>{r.snippet}</Card>
      )) : <p className="text-sm text-gray-500">Escribe algo en el campo de búsqueda.</p>}
    </div>
  );
};

export default SearchResults;
