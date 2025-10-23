import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Renata Mendonça",
      location: "34 anos, Recife/PE",
      avatarId: "avatar-renata",
      rating: 5,
      quote: "Nunca imaginei que aprenderia inglês tão rápido! O áudio é perfeito para quem tem pouco tempo. Já entendo muito mais!",
    },
    {
      name: "João Silva",
      location: "29 anos, São Paulo/SP",
      avatarId: "avatar-joao",
      rating: 5,
      quote: "Finalmente um método que funciona! Em poucos dias, já consigo pegar o sentido de músicas e filmes. É incrível!",
    },
    {
      name: "Carlos Martins",
      location: "42 anos, Belo Horizonte/MG",
      avatarId: "avatar-carlos",
      rating: 5,
      quote: "Estou impressionado com a rapidez que meu vocabulário aumentou. O método é direto ao ponto e muito eficaz. Recomendo demais!",
    },
    {
      name: "Ana Pereira",
      location: "38 anos, Rio de Janeiro/RJ",
      avatarId: "avatar-ana",
      rating: 5,
      quote: "Sempre tive dificuldade com inglês, mas esse kit mudou tudo. Consigo praticar ouvindo no trânsito e já sinto uma confiança enorme para falar.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Quem Já Experimentou, Comprova: Resultados Reais!
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
            return (
              <Card key={index} className="bg-background shadow-lg border">
                <CardContent className="p-6">
                  <blockquote className="space-y-4">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                    <p className="text-lg text-foreground italic">"{testimonial.quote}"</p>
                    <footer className="flex items-center gap-4 pt-4">
                       <Avatar className="h-14 w-14">
                        {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-base">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-12 bg-primary/10 p-4 rounded-lg max-w-md mx-auto">
            <p className="text-lg font-bold text-primary">Avaliação Média: 4.9/5 estrelas</p>
            <p className="text-muted-foreground">Baseado em mais de 500 alunos satisfeitos!</p>
        </div>
      </div>
    </section>
  );
}
