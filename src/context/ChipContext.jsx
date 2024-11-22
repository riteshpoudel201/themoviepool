/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const ChipContext = createContext();

export const ChipProvider = ({ children }) => {
  const [selectedChip, setSelectedChip] = useState(null);

  return (
    <ChipContext.Provider value={{ selectedChip, setSelectedChip }}>
      {children}
    </ChipContext.Provider>
  );
};

export const useChip = () => {
  const context = useContext(ChipContext);
  if (!context) {
    throw new Error('useChip must be used within a ChipProvider');
  }
  return context;
};