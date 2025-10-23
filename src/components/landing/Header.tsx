import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 bg-card border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-primary">Fluência Rápida</h1>
        </Link>
      </div>
    </header>
  );
}
