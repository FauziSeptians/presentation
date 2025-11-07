'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-center dark:bg-zinc-900">
      <h1 className="text-9xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        500
      </h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Page Error
      </h2>
      <p className="mt-2 max-w-md text-gray-600 dark:text-gray-400">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
    </main>
  );
}
