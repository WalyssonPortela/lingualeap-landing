import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProblemSolutionSection() {
  const painPoints = [
    "Cansado de gastar rios de dinheiro em cursos que não entregam resultados?",
    "Aprendeu gramática por anos e ainda não consegue se comunicar?",
    "Sente que 'decorar' regras só te afasta da fluência real?",
  ];

  const benefits = [
    "Entender filmes, músicas e conversas diárias em tempo recorde.",
    "Falar com confiança, sem travar nas frases mais simples.",
    "Aprender o que realmente é usado no dia a dia, sem enrolação.",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Frustrado com o Inglês? <br /> Nós Temos a Solução Definitiva!
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-5xl mx-auto">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <XCircle className="h-8 w-8" />
                <span className="text-2xl font-headline">Os métodos tradicionais falham...</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-destructive mr-3 mt-1 font-bold text-xl">»</span>
                    <span className="text-lg text-red-700">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-200">
             <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CheckCircle2 className="h-8 w-8" />
                <span className="text-2xl font-headline">E se você pudesse...</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-xl">✓</span>
                    <span className="text-lg text-green-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
