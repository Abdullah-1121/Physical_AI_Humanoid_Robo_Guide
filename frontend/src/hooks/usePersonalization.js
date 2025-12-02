import React, { createContext, useContext, useState } from 'react';

const PersonalizationContext = createContext();

export function PersonalizationProvider({ children }) {
  const [personalizationSettings, setPersonalizationSettings] = useState({
    // Default settings
    fontSize: 'medium',
    theme: 'light',
  });

  const updatePersonalizationSettings = (newSettings) => {
    setPersonalizationSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

  return (
    <PersonalizationContext.Provider value={{ personalizationSettings, updatePersonalizationSettings }}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  return useContext(PersonalizationContext);
}
