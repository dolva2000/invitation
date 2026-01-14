
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { WEDDING_DATE } from '../constants';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-4xl font-cursive text-[#acc6aa] py-10 animate-pulse">
        C'est le grand jour !
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8">
      <TimeUnit value={timeLeft.days} label="Jours" />
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center bg-white shadow-sm border border-gray-100 rounded-lg p-4 min-w-[80px] md:min-w-[100px] transform hover:scale-105 transition-transform duration-300">
    <span className="text-3xl md:text-4xl font-bold text-[#acc6aa]">{value.toString().padStart(2, '0')}</span>
    <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 font-semibold">{label}</span>
  </div>
);
