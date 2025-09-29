import React from 'react';
import { useUI } from '../context/UIContext';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const { setActiveTab, setSearchOpen } = useUI();
  const navigate = useNavigate();

  const goHome = () => {
    setActiveTab('inicio');
    navigate('/');
  };

  return (
    <header className="h-14 mx-auto max-w-2xl bg-orange-400 border-b flex items-center">
      <div className="flex items-center justify-between max-w-md mx-auto">

        <div className="bg-amber-400 flex items-center gap-2  rounded-lg " >
          <div className="w-40">
            <SearchBar compact />
          </div>
          <button
            aria-label="abrir búsqueda"
            onClick={() => setSearchOpen((s) => !s)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className=" text-gray-600">
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
