// components/ui/AnimatedThemeToggler.tsx
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';

import { cn } from '@/lib/utils';

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ✅ Gunakan resolvedTheme untuk actual theme (bukan 'system')
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    // ✅ Check browser support untuk View Transition API
    if (!document.startViewTransition) {
      // Fallback untuk browser yang tidak support
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? 'light' : 'dark');
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }, [isDark, setTheme, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        'hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md p-2 transition-colors',
        'cursor-pointer',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      {...props}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
