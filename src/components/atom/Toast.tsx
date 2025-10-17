'use client';

import { useEffect, useState } from 'react';
import { useToastStore } from '@/stores/useToastStore';

export default function Toast() {
  const { message, visible } = useToastStore();
  const [shouldRender, setShouldRender] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      setFadeOut(false);
      const audio = new Audio('/sounds/notify.mp3');
      audio.play().catch(() => {});
    } else if (shouldRender) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200); // match fade-out duration
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed top-16 left-1/2 z-50 -translate-x-1/2 rounded-md bg-white px-4 py-2 text-black shadow-lg transition-all duration-300 ${
        fadeOut ? 'animate-fade-out' : 'animate-slide-up'
      }`}
    >
      {message}
    </div>
  );
}
