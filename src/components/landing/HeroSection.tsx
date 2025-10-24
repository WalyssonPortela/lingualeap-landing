import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShoppingCart } from 'lucide-react';

type HeroSectionProps = {
  expirationDate: string;
};

export function HeroSection({ expirationDate }: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'product-mockups');
  
  return (
    <section className="bg-background pt-12 pb-16 md:pt-20 md:pb-24 text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-primary/10 border border-primary/20 text-primary font-bold py-2 px-4 rounded-lg mb-6 text-sm sm:text-base">
              Oferta Expira em: <CountdownTimer expirationDate={expirationDate} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black leading-tight">
              Destrave o Inglês em 7 Dias com as 1000 Palavras Essenciais
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              O método comprovado que ignora o excesso e foca no que você realmente precisa para entender e falar com confiança.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground text-lg font-bold h-16 px-10 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <Link href="https://pay.kiwify.com.br/uMyx6AE">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Compre Agora
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-8 w-full sm:w-auto">
                <Link href="#offer">
                  Ver Oferta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-center md:text-left text-muted-foreground">Mais de 500 alunos já estão aplicando e aprovando!</p>
          </div>

          <div className="relative aspect-square max-w-lg mx-auto md:mx-0 w-full">
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
      </div>
    </section>
  );
}
