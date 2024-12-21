import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 bg-accent text-accent-foreground shadow-md rounded-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! Page not found.</p>
        <Link href="/" className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded transition duration-300">
          Go Home
        </Link>
      </div>
    </div>
  );
}