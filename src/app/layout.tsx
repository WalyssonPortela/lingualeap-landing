import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SalesNotification } from '@/components/landing/SalesNotification';
import { Poppins, Lato } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-headline',
});

const fontBody = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'EnglishFaster',
  description: 'Desvende o Inglês em Apenas 7 Dias com as 1000 Palavras Essenciais!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={cn("font-body antialiased", fontHeadline.variable, fontBody.variable)}>
        {children}
        <Toaster />
        <SalesNotification />
      </body>
    </html>
  );
}
