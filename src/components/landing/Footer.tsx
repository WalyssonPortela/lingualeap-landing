import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl font-bold font-headline">
             <span style={{ color: '#00247d' }}>English</span><span style={{ color: '#cf1b2b' }}>Faster</span>
          </span>
        </div>
        <div className="flex justify-center flex-wrap gap-4 text-sm mb-4">
          <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <Link href="#" className="hover:text-primary transition-colors">Contato</Link>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {currentYear} EnglishFaster. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
