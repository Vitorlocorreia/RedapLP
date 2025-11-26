import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Carlos Mendes",
    role: "Diretor de Defesa Civil",
    avatar: "https://picsum.photos/100/100?random=1",
    text: "O REDAP reduziu nosso tempo de resposta em 40%. Não é apenas um software, é uma questão de segurança pública.",
    rating: 5
  },
  {
    id: 2,
    name: "Eng. Amanda Torres",
    role: "Gestora de Hidrologia",
    avatar: "https://picsum.photos/100/100?random=2",
    text: "A precisão dos dados em tempo real é assustadora. Pela primeira vez, nos sentimos um passo à frente da tempestade.",
    rating: 5
  },
  {
    id: 3,
    name: "Prefeitura de São José",
    role: "Setor de Infraestrutura",
    avatar: "https://picsum.photos/100/100?random=3",
    text: "Implementação rápida e dashboard intuitivo. A equipe de suporte é excepcional.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative">
       <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-2">QUEM JÁ ESTÁ <span className="text-cyan-400">PROTEGIDO</span></h2>
          <p className="text-slate-400">Junte-se às instituições que modernizaram sua segurança.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl relative group"
            >
              <div className="absolute top-4 right-4 text-slate-700 group-hover:text-cyan-500/30 transition-colors">
                <ShieldCheck size={48} />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-6 relative z-10">"{t.text}"</p>

              <div className="flex items-center gap-4 border-t border-slate-700/50 pt-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-cyan-500/50" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-cyan-400 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;