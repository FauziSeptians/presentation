'use client';

import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-white px-6 py-12 dark:bg-zinc-900">
        <div className="max-w-md text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-red-100 p-4 dark:bg-red-900/30">
            <AlertTriangle className="size-6 text-red-600 dark:text-red-400" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>

          <button
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            <RotateCcw className="size-4" />
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
