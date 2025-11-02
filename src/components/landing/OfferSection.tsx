import { Check, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function OfferSection() {
  const benefits = [
    "Ebook Completo: 1000 Palavras Essenciais",
    "Audiobook de 1000 Frases: Pronúncia Simples",
    "Tradução e Pronúncia Lado a Lado",
    "Download Imediato e Acesso Vitalício",
    "Guia Bônus de Phrasal Verbs",
    "Garantia Incondicional de 7 Dias"
  ];

  return (
    <section id="offer" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <Card className="text-center shadow-2xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <CardTitle className="text-3xl md:text-4xl font-headline font-black">
              Aproveite a Última Chamada!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-6">Sua chance de transformar o Inglês por um preço inacreditável.</p>
            
            <div className="bg-background/50 rounded-lg p-6 mb-8 border">
              <div className="flex flex-col items-center justify-center mb-2">
                <span className="text-2xl md:text-3xl text-muted-foreground line-through">De R$199,99</span>
                <span className="text-4xl md:text-5xl font-black text-primary">por apenas R$19,90</span>
                <span className="text-lg md:text-xl font-bold text-primary mt-1">ou 2x de R$10,48</span>
              </div>
              <p className="text-sm text-muted-foreground">Pagamento único, acesso vitalício.</p>
            </div>

            <div className="bg-background rounded-lg p-6 mb-8 text-left max-w-md mx-auto border">
              <h3 className="font-bold text-lg mb-4 text-center">O que você recebe:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold h-16 px-12 shadow-lg w-full max-w-md animate-pulse">
              <Link href="https://pay.kiwify.com.br/uMyx6AE">
                Compre Agora e Destrave
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
              <Lock className="h-4 w-4" />
              <span>Pagamento 100% Seguro (SSL e Proteção de Dados)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
