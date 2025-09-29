import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('inicio');
  const [searchOpen, setSearchOpen] = useState(false);

  const value = {
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    searchOpen,
    setSearchOpen
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
