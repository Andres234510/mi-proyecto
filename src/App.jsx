import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UIProvider } from './context/UIContext';
import { Header } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Cronograma from './pages/Cronograma';
import Conocenos from './pages/Conocenos';
import Portafolio from './pages/Portafolio';
import SearchResults from './pages/SearchResults';

const App = () => {
  return (
    <UIProvider>
      <div className="min-h-screen bg-white">
        <MobileNav />
        <Header />
        <main className="pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cronograma" element={<Cronograma />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/buscar" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
        
      </div>
    </UIProvider>
  );
};

export default App;
