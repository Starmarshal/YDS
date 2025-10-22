'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'theme-light' | 'theme-dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isChecked: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('theme-light');
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      setIsChecked(savedTheme === 'theme-light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('theme-dark');
      setIsChecked(false);
    } else {
      setTheme('theme-light');
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'theme-dark') {
      setTheme('theme-light');
      setIsChecked(true);
    } else {
      setTheme('theme-dark');
      setIsChecked(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isChecked }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}