'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center gap-2 rounded border px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800"
    >
      {theme === 'light' ? (
        <>
          <Moon className="size-5" />
          <span className="text-sm">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="size-5" />
          <span className="text-sm">Light Mode</span>
        </>
      )}
    </button>
  );
}
