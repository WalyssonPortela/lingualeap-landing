import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type HeroSectionProps = {
  expirationDate: string;
};

export function HeroSection({ expirationDate }: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'product-mockups');
  
  return (
    <section className="bg-card py-12 md:py-20 text-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="inline-block text-center bg-primary/10 border-2 border-dashed border-primary text-primary font-bold py-3 px-6 rounded-lg mb-8 max-w-3xl mx-auto text-sm sm:text-base">
          OFERTA RELÂMPAGO: Garanta seu acesso HOJE! Expira em: <CountdownTimer expirationDate={expirationDate} />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-center max-w-4xl mx-auto leading-tight">
          Desvende o Inglês em 7 Dias: Entenda, Fale e Conquiste a Fluência com as 1000 Palavras Essenciais!
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          Chega de cursos caros e anos de estudo. O método comprovado que ignora o excesso e foca no que realmente importa.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold h-16 px-10 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <Link href="#offer">
              SIM! QUERO FALAR INGLÊS AGORA!
            </Link>
          </Button>
          <p className="text-sm text-center text-muted-foreground">Mais de 500 alunos já estão aplicando e aprovando!</p>
        </div>

        <div className="mt-12 relative aspect-square max-w-lg mx-auto rounded-lg overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              priority
              className="object-contain"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
