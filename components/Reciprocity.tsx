import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

const Reciprocity: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-1 overflow-hidden"
        >
          {/* animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-[shimmer_2s_infinite] -skew-x-12 translate-x-[-100%]" />
          
          <div className="bg-[#0b1121] rounded-[22px] p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Material Gratuito
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Relatório Técnico: O Futuro da Gestão de Enchentes
              </h3>
              <p className="text-slate-400 mb-6">
                Uma análise profunda de 50 páginas sobre como IoT e IA estão mitigando desastres urbanos. Inclui estudos de caso e previsões para a próxima década.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><FileText size={16} /> PDF 12MB</span>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>Leitura: 15 min</span>
              </div>
            </div>

            <div className="flex-shrink-0">
               <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black font-bold rounded hover:bg-cyan-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                 <span>BAIXAR AGORA</span>
                 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reciprocity;