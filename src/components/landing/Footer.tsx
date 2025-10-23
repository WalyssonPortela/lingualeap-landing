import Link from 'next/link';

const LogoIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <LogoIcon />
          <span className="text-xl font-bold font-headline">
             <span className="text-primary">Lingua</span><span className="text-accent">Leap</span>
          </span>
        </div>
        <div className="flex justify-center flex-wrap gap-4 text-sm mb-4">
          <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
          <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {currentYear} LinguaLeap. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
