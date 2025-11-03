'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const INACTIVITY_TIMEOUT = 45000; // 45 seconds

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const showPopup = useCallback(() => {
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (!alreadyShown) {
      setIsOpen(true);
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, []);

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(showPopup, INACTIVITY_TIMEOUT);
    };

    // Events that reset the inactivity timer
    const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => window.addEventListener(event, resetTimer));
    
    // Initial timer start
    resetTimer();

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [showPopup]);
  
  if (!isOpen) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md text-center border-yellow-400 border-2">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-black font-headline text-foreground">
            Espere! Uma Oferta Especial!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-muted-foreground pt-2">
            Percebemos que você está de saída... Que tal uma última chance para destravar seu inglês por um preço que você não vai acreditar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="my-6">
            <div className="bg-primary/10 rounded-lg p-6">
                <p className="text-sm text-muted-foreground">De <span className="line-through">R$19,90</span> por apenas:</p>
                <p className="text-7xl font-black text-primary">R$12,90</p>
                <p className="text-3xl font-semibold text-primary mt-2">ou 2x de R$6,79</p>
                <p className="text-xs text-muted-foreground mt-1">Acesso vitalício. Oferta única.</p>
            </div>
        </div>

        <AlertDialogFooter className="flex-col sm:justify-center gap-2">
           <AlertDialogAction asChild className="w-full">
            <Link 
              href="https://pay.kiwify.com.br/fNsrcop"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold h-16 px-12 shadow-lg animate-pulse"
            >
              SIM! QUERO POR R$12,90!
            </Link>
          </AlertDialogAction>
          <Button variant="link" onClick={() => setIsOpen(false)} className="text-muted-foreground">
            Não, obrigado. Perdi a chance.
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
