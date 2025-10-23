import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSolutionSection } from '@/components/landing/ProblemSolutionSection';
import { MethodSection } from '@/components/landing/MethodSection';
import { KitSection } from '@/components/landing/KitSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { Footer } from '@/components/landing/Footer';
import { ScrollReveal } from '@/components/landing/ScrollReveal';

export default function Home() {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);

  return (
    <div className="flex flex-col min-h-screen bg-background font-body text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection expirationDate={expirationDate.toISOString()} />
        <div className="space-y-4">
          <ScrollReveal><ProblemSolutionSection /></ScrollReveal>
          <ScrollReveal><MethodSection /></ScrollReveal>
          <ScrollReveal><KitSection /></ScrollReveal>
          <ScrollReveal><TestimonialsSection /></ScrollReveal>
          <ScrollReveal><GuaranteeSection /></ScrollReveal>
          <ScrollReveal><OfferSection /></ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
