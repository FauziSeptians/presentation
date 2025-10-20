'use client';

import { useTheme } from '../providers/ThemeProvider';

export default function MarqueeText({ title }: { title: string }) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative text-5xl font-bold text-transparent uppercase md:text-8xl"
        style={{
          WebkitTextStroke: `1px ${theme === 'dark' ? 'white' : 'black'}`,
        }}
      >
        {title}
      </div>
    </div>
  );
}
