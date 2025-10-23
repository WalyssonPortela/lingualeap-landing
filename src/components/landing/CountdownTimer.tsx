'use client';

import { useState, useEffect } from 'react';

type CountdownTimerProps = {
  expirationDate: string;
};

export function CountdownTimer({ expirationDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(expirationDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{dias?: number, horas?: number, minutos?: number, segundos?: number}>({});

  useEffect(() => {
    // Initial calculation on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expirationDate]);

  const timerComponents: string[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (value !== undefined && value >= 0) {
      // Don't show if value is 0 unless it's seconds
      if (value > 0 || interval === 'segundos') {
        timerComponents.push(`${value} ${interval}`);
      }
    }
  });

  if (!timerComponents.length) {
    return <span className="font-mono">Oferta Expirada!</span>;
  }
  
  // Format to "D dias, H horas, M minutos e S segundos"
  let formattedTime = timerComponents.join(', ');
  const lastCommaIndex = formattedTime.lastIndexOf(',');
  if (lastCommaIndex !== -1) {
    formattedTime = formattedTime.substring(0, lastCommaIndex) + ' e' + formattedTime.substring(lastCommaIndex + 1);
  }

  return (
    <span className="font-mono">
      {formattedTime}
    </span>
  );
}
