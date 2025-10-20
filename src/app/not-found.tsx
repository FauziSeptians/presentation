'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-center dark:bg-zinc-900">
      <h1 className="text-9xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-gray-600 dark:text-gray-400">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>
    </div>
  );
}
