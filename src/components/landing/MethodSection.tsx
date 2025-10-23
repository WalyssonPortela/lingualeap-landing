import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MethodSection() {
  const methods = [
    {
      title: "O Princípio 80/20",
      description: "Em qualquer idioma, um pequeno grupo de palavras representa a maior parte das comunicações. No inglês, as 1000 palavras mais usadas compõem mais de 80% das conversas reais.",
    },
    {
      title: "Foco na Essência",
      description: "Ignoramos o 'perfume de escola de inglês' e vamos direto ao que importa. Aprenda o que nativos realmente usam, todos os dias.",
    },
    {
      title: "O Caminho Natural",
      description: "Assim como crianças aprendem, você vai dominar o essencial, construindo a confiança para expandir seu vocabulário de forma intuitiva.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto w-fit bg-accent/20 text-accent p-3 rounded-full mb-4">
            <Lightbulb className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            O Segredo para a Fluência Rápida
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A Ciência por Trás das 1000 Palavras: por que focar no essencial é a via mais rápida para a fluência?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <div key={index} className="text-center">
              <h3 className="font-headline text-2xl font-bold mb-2">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
