import { Book, Headphones, Download, Infinity, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function KitSection() {
  const items = [
    {
      icon: Book,
      title: "Ebook Interativo",
      description: "Ebook 'As 1000 Palavras Mais Usadas em Inglês' (PDF): Tradução, exemplos práticos e pronúncia fonética para cada palavra.",
    },
    {
      icon: Headphones,
      title: "Audiobook Profissional",
      description: "Audiobook '1000 Frases Mais Usadas' (MP3): Ouça a pronúncia nativa, repita e aprenda em qualquer lugar – no carro, na academia, em casa!",
    },
    {
      icon: Download,
      title: "Acesso Imediato & Vitalício",
      description: "Acesso Instantâneo e Para Sempre: Baixe o material e estude no seu tempo, sem prazos ou mensalidades.",
      extraIcon: Infinity,
    },
    {
      icon: Star,
      title: "Bônus Exclusivo",
      description: "Guia Rápido de Phrasal Verbs Essenciais para acelerar ainda mais sua comunicação.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Seu Kit Completo Para a Fluência Imediata
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para dominar o inglês essencial, em um pacote completo e fácil de usar.
            </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="text-center flex flex-col items-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card">
              <CardHeader className="items-center">
                <div className="flex items-center justify-center text-primary bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <item.icon className="h-8 w-8" />
                  {item.extraIcon && <item.extraIcon className="h-6 w-6 ml-1 opacity-80" />}
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
