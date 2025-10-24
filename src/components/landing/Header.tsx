import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 bg-background/80 border-b backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto flex justify-center">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <h1 className="text-2xl font-black font-headline text-primary">
            EnglishFaster
          </h1>
        </Link>
      </div>
    </header>
  );
}
