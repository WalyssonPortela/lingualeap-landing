import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="max-w-4xl mx-auto text-center shadow-2xl overflow-hidden">
          <CardContent className="p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 -mt-8 -ml-8 w-24 h-24 bg-primary/10 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 -mb-8 -mr-8 w-32 h-32 bg-accent/20 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <div className="mx-auto w-fit bg-primary/10 text-primary p-4 rounded-full mb-6 shadow-md">
                <ShieldCheck className="h-12 w-12" />
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-foreground">
                Sua Satisfação é 100% Garantida ou Seu Dinheiro de Volta!
              </h2>
              <div className="inline-block bg-accent text-accent-foreground font-bold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
                GARANTIA INCONDICIONAL DE 7 DIAS
              </div>
              <p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
                Temos tanta confiança em nosso método que oferecemos uma Garantia Incondicional de 7 Dias. Experimente, aplique as técnicas e se em 7 dias você não sentir uma melhora significativa no seu entendimento do inglês, nós devolvemos 100% do seu investimento, sem burocracia ou letras miúdas. Seu risco é ZERO!
              </p>
              <Button asChild size="lg" className="text-lg font-bold h-16 px-12 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Link href="https://pay.kiwify.com.br/uMyx6AE">
                  Sim! Quero Experimentar
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
