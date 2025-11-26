import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

const Scarcity: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-red-900/10 border-y border-red-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10" />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-500/20 rounded-full animate-pulse border border-red-500">
            <Timer className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Acesso Beta Limitado</h3>
            <p className="text-red-400 text-sm">As vagas para demonstração ao vivo encerram em breve.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-4xl font-bold text-white">
            <div className="bg-black/50 px-4 py-2 rounded border border-red-900 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="animate-pulse">:</span>
            <div className="bg-black/50 px-4 py-2 rounded border border-red-900 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider rounded shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all"
        >
          Garantir Minha Vaga
        </motion.button>
      </div>
    </section>
  );
};

export default Scarcity;