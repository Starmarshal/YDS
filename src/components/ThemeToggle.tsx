'use client';

import { useTheme } from '@/src/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, isChecked } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={isChecked}
      />
      <span className="slider round"></span>
    </label>
  );
}