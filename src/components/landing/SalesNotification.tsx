'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { names, locations } from '@/lib/sales-data';
import { cn } from '@/lib/utils';

type Notification = {
  name: string;
  location: string;
};

export function SalesNotification() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const showRandomNotification = () => {
    const randomName = getRandomItem(names);
    const randomLocation = getRandomItem(locations);
    setNotification({ name: randomName, location: randomLocation });
    setIsVisible(true);

    // Hide notification after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  };

  useEffect(() => {
    // Initial delay of 8 seconds
    const initialTimeout = setTimeout(() => {
      showRandomNotification();
      
      // Set up recurring notifications
      const scheduleNext = () => {
        const randomInterval = Math.floor(Math.random() * (30000 - 12000 + 1)) + 12000;
        setTimeout(() => {
          showRandomNotification();
          scheduleNext();
        }, randomInterval);
      };
      scheduleNext();

    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 left-5 z-50 w-auto max-w-sm rounded-lg bg-white shadow-lg p-4 flex items-center gap-4 transition-all duration-500",
        "md:max-w-md",
        isVisible
          ? "animate-slide-in-fade-in"
          : "animate-fade-out opacity-0 pointer-events-none"
      )}
    >
      <div className="flex-shrink-0 bg-primary/10 text-primary p-2 rounded-full">
        <ShoppingCart className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-foreground">
          <span className="font-bold">{notification?.name}</span> de {notification?.location}, acabou de adquirir o kit!
        </p>
      </div>
    </div>
  );
}
