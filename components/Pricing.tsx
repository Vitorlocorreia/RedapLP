import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow for anchoring */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">PLANO DE <span className="text-cyan-400">OPERAÇÃO</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Escolha o nível de inteligência que sua operação necessita. Soluções escaláveis para municípios e estados.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          
          {/* ANCHOR - High Price (Pro) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-slate-900/80 border border-slate-700 rounded-2xl p-8 blur-[0.5px] hover:blur-0 transition-all duration-300 opacity-60 hover:opacity-100 scale-95 hover:scale-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white">REDAP ENTERPRISE</h3>
              <p className="text-slate-500 text-sm">Para monitoramento estadual ou metropolitano.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-slate-300">R$ Consultar</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-400">
              <li className="flex items-center gap-2"><Check size={18} /> Sensores Ilimitados</li>
              <li className="flex items-center gap-2"><Check size={18} /> Previsão IA de 48h</li>
              <li className="flex items-center gap-2"><Check size={18} /> Suporte Dedicado 24/7</li>
              <li className="flex items-center gap-2"><Check size={18} /> Integração API Governamental</li>
            </ul>
            <button className="w-full py-4 border border-slate-600 text-slate-300 font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors">
              Falar com Consultor
            </button>
          </motion.div>

          {/* FREE / ACADEMIC - The Hero (Reciprocity/Low Friction) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-gradient-to-b from-slate-900 to-black border-2 border-cyan-500 rounded-2xl p-8 relative shadow-[0_0_50px_rgba(6,182,212,0.15)] z-10 transform lg:scale-110"
          >
            <div className="absolute top-0 right-0 bg-cyan-500 text-black font-bold text-xs px-3 py-1 uppercase rounded-bl-lg">
              Recomendado para Início
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold text-white">REDAP ACADEMIC</h3>
              <p className="text-cyan-400/80 text-sm">Uso educacional e pequenas simulações.</p>
            </div>
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-6xl font-black text-white">GRÁTIS</span>
              <span className="text-slate-500 line-through">R$ 997</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li className="flex items-center gap-2 text-white font-semibold"><Check size={18} className="text-cyan-400" /> Acesso ao Dashboard Lite</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-cyan-400" /> Dados Históricos (5 anos)</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-cyan-400" /> Relatórios em PDF</li>
              <li className="flex items-center gap-2 text-slate-500"><X size={18} /> Sem integração de hardware</li>
            </ul>
            <button className="w-full py-4 bg-cyan-500 text-black font-black uppercase tracking-wider hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all animate-pulse-slow">
              Começar Agora
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">Não requer cartão de crédito.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;