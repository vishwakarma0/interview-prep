'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 bg-accent text-accent-foreground shadow-md rounded-lg max-w-md w-full">
        <svg
          className="mx-auto h-16 w-16 text-primary mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="mb-8">{error.message || 'An unexpected error occurred'}</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={reset}
            className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded transition duration-300"
          >
            Try again
          </button>
          <Link href="/" className="text-primary hover:underline transition duration-300">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}