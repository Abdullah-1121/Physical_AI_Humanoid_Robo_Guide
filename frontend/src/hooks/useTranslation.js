import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    // Placeholder for actual translation logic
    setLanguage((prevLang) => (prevLang === 'en' ? 'ur' : 'en'));
    alert('Translation is a placeholder. Content remains in English.');
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
