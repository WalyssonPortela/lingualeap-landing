import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    {
      name: "Lucas Ferreira",
      location: "25 anos, Porto Alegre/RS",
      avatarId: "avatar-lucas",
      rating: 5,
      quote: "O material é muito bem organizado. A combinação do ebook com o audiobook faz toda a diferença para fixar o conteúdo. Valeu cada centavo!",
    },
    {
      name: "Mariana Costa",
      location: "31 anos, Salvador/BA",
      avatarId: "avatar-mariana",
      rating: 5,
      quote: "O melhor investimento que fiz para minha carreira. Entender as 1000 palavras mais comuns me abriu portas em reuniões e e-mails.",
    },
    {
      name: "Sabrina",
      location: "27 anos, Curitiba/PR",
      avatarId: "avatar-sabrina",
      rating: 5,
      quote: "Estou amando! O método é super prático e eu já consigo formar frases que antes pareciam impossíveis. Recomendo muito!",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Quem Já Experimentou, Comprova: Resultados Reais!
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                   <div className="p-2 h-full">
                    <Card className="bg-card shadow-lg h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                          <div className="flex mb-4">
                            {Array(5).fill(0).map((_, i) => (
                              <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-current' : 'text-muted-foreground/30'}`} />
                            ))}
                          </div>
                          <blockquote className="space-y-4 flex flex-col flex-grow">
                          <p className="text-base text-foreground italic flex-grow">"{testimonial.quote}"</p>
                          <footer className="flex items-center gap-4 pt-4 border-t">
                            <Avatar className="h-14 w-14 border-2 border-primary/50">
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
                   </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-[-1rem] md:ml-[-2.5rem]" />
          <CarouselNext className="mr-[-1rem] md:mr-[-2.5rem]" />
        </Carousel>
        <div className="text-center mt-12 bg-primary/10 p-4 rounded-lg max-w-md mx-auto border border-primary/20">
            <p className="text-lg font-bold text-primary">Avaliação Média: 4.9/5 estrelas</p>
            <p className="text-muted-foreground">Baseado em mais de 500 alunos satisfeitos!</p>
        </div>
      </div>
    </section>
  );
}
