import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark/light theme
 * @returns {Object} { isDark: boolean, toggleTheme: function }
 */
export const useTheme = () => {
  // Check localStorage or default to light mode
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    // Apply theme to document root
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};
