'use client';

import { useState, useEffect } from 'react';

const COUNTDOWN_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function CountdownTimer() {
  const getInitialExpiration = () => {
    if (typeof window !== 'undefined') {
      const storedExpiration = localStorage.getItem('promoExpiration');
      if (storedExpiration && new Date(storedExpiration).getTime() > Date.now()) {
        return new Date(storedExpiration).getTime();
      }
    }
    return Date.now() + COUNTDOWN_DURATION;
  };
  
  const [expirationTime, setExpirationTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<{dias: number, horas: number, minutos: number, segundos: number}>({dias: 0, horas: 0, minutos: 0, segundos: 0});

  useEffect(() => {
    const initialTime = getInitialExpiration();
    setExpirationTime(initialTime);
    localStorage.setItem('promoExpiration', new Date(initialTime).toISOString());
  }, []);

  useEffect(() => {
    if (!expirationTime) return;

    const calculateTimeLeft = () => {
      const difference = expirationTime - Date.now();
      
      if (difference <= 0) {
        // Reset timer
        const newExpirationTime = Date.now() + COUNTDOWN_DURATION;
        setExpirationTime(newExpirationTime);
        localStorage.setItem('promoExpiration', new Date(newExpirationTime).toISOString());
        return {
          dias: 0,
          horas: 23,
          minutos: 59,
          segundos: 59,
        };
      }

      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expirationTime]);

  if (!expirationTime) {
    return <span className="font-mono">Calculando...</span>;
  }

  const timerComponents: string[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (value !== undefined && value >= 0) {
      if (value > 0 || interval === 'segundos' || (timeLeft.dias === 0 && timeLeft.horas === 0 && timeLeft.minutos === 0)) {
        const pluralInterval = value !== 1 ? interval : interval.slice(0, -1);
        timerComponents.push(`${value.toString().padStart(2, '0')} ${pluralInterval}`);
      }
    }
  });
  
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
