import React from 'react';
import { useUI } from '../context/UIContext';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({ compact = false }) => {
  const { searchQuery, setSearchQuery, setSearchOpen } = useUI();
  const navigate = useNavigate();

  const submit = (e) => {
    e?.preventDefault();
    setSearchOpen(false);
    navigate('/buscar');
  };

  return (
    <form onSubmit={submit} className={`flex items-center ${compact ? '' : 'mx-4'}`}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar..."
        className="  w-full rounded-xl py-2 px-3 text-sm placeholder-gray-500 outline-none border border-gray-100 shadow-sm"
        aria-label="Buscar"
      />
    </form>
  );
};
