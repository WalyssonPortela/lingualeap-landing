import Link from 'next/link';

const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8 text-primary"
  >
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);


export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 bg-card border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <LogoIcon />
          <h1 className="text-2xl font-bold font-headline">
            <span className="text-primary">Lingua</span><span className="text-accent">Leap</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
