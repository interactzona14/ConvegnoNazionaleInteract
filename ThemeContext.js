import React, { createContext, useContext, useState, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => ({
    colors: {
      primary: '#003DA5',
      accent: '#FFD700',
      background: darkMode ? '#1F2937' : '#F8FAFC',
      card: darkMode ? '#374151' : '#FFFFFF',
      textPrimary: darkMode ? '#F9FAFB' : '#1F2937',
      textSecondary: darkMode ? '#D1D5DB' : '#6B7280',
      border: darkMode ? '#4B5563' : '#E5E7EB',
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B'
    }
  }), [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);