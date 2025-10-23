import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 bg-card border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto flex justify-center">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <h1 className="text-2xl font-bold font-headline">
            <span style={{ color: '#00247d' }}>English</span><span style={{ color: '#cf1b2b' }}>Faster</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
