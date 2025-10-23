import Link from 'next/link';

const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="h-8 w-8 text-primary"
  >
    <defs>
      <clipPath id="clip">
        <path d="M10,0 C4.477,0 0,4.477 0,10 L0,90 C0,95.523 4.477,100 10,100 L90,100 C95.523,100 100,95.523 100,90 L100,10 C100,4.477 95.523,0 90,0 Z"></path>
      </clipPath>
    </defs>
    <g clipPath="url(#clip)">
      <rect width="50" height="100" fill="#B22234" />
      <rect x="50" width="50" height="100" fill="#00247d" />
      <path d="M50,0 V100 L100,0 V100 H50" fill="#fff" />
      <path d="M60,0 L50,20 V0 Z M70,0 L50,40 V0 Z M80,0 L50,60 V0 Z M90,0 L50,80 V0 Z M100,0 L50,100 V0 Z" stroke="#fff" strokeWidth="2" />
      <path d="M50,10 L100,10 M50,30 L100,30 M50,50 L100,50 M50,70 L100,70 M50,90 L100,90" stroke="#B22234" strokeWidth="6" />
      <path d="M 50 100 L 75 50 L 50 0 L 25 50 Z" fill="#fff" transform="translate(25, 0) scale(0.5)"/>
       <g transform="translate(0,0) scale(0.5)">
        <rect width="100" height="50" fill="#00247d"/>
        <g fill="#fff">
            <path d="M0,0 L50,25 L0,50z M100,0 L50,25 L100,50z" />
        </g>
        <g fill="#B22234">
            <path d="M0,8.3L33.3,25 L0,41.7z M100,8.3L66.7,25 L100,41.7z" />
            <path d="M8.3,0L50,16.7L91.7,0z M8.3,50L50,33.3L91.7,50z" />
        </g>
    </g>
      <path d="M45,25 L55,50 L40,50 L50,75" stroke="#FFD700" strokeWidth="5" fill="none" />
    </g>
    <path d="M42,20 L62,50 L32,50 L52,80" stroke="yellow" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);


export function Header() {
  return (
    <header className="py-4 px-4 md:px-8 bg-card border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <LogoIcon />
          <h1 className="text-2xl font-bold font-headline">
            <span className="text-blue-800">English</span><span className="text-red-600">Faster</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}