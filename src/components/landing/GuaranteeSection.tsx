import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="bg-card rounded-lg shadow-xl p-8 md:p-12 text-center border">
          <div className="mx-auto w-fit bg-accent/20 text-accent p-4 rounded-full mb-6">
            <ShieldCheck className="h-16 w-16" />
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Sua Satisfação é 100% Garantida. Ou Seu Dinheiro de Volta!
          </h2>
          <div className="inline-block bg-accent text-accent-foreground font-bold text-sm px-4 py-1 rounded-full mb-6">
            GARANTIA DE 7 DIAS
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Temos tanta confiança em nosso método que oferecemos uma Garantia Incondicional de 7 Dias. Experimente, aplique as técnicas e se em 7 dias você não sentir uma melhora significativa no seu entendimento do inglês, nós devolvemos 100% do seu investimento, sem burocracia ou letras miúdas. Seu risco é ZERO!
          </p>
          <Button asChild size="lg" className="text-lg font-bold h-14 px-10 bg-gradient-to-br from-yellow-300 to-accent text-black hover:from-yellow-400 hover:to-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Link href="https://pay.kiwify.com.br/uMyx6AE">
              Sim! Quero Experimentar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
