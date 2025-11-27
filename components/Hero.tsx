import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Play, Search, ChevronDown, Plus, Minus, Maximize2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "MONITORAMENTO_INTELIGENTE_ATIVADO...";
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typing Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 lg:pt-0">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-cyan-400 font-mono tracking-widest text-sm">{typedText}<span className="animate-blink">|</span></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500 leading-tight neon-text"
          >
            REDAP: <br />
            PAINEL DE MONITORAMENTO <br />
            DE ALAGAMENTOS
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-lg border-l-2 border-cyan-500/50 pl-4"
          >
            O sistema definitivo de resposta a desastres hidrológicos.
            Dados em tempo real. Decisões que salvam vidas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="group relative px-8 py-4 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-bold uppercase tracking-wider overflow-hidden hover:bg-cyan-500 hover:text-black transition-all duration-300 neon-border clip-path-polygon">
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" /> Comece Agora
              </span>
              <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="group px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" /> Baixar PDF Técnico
            </button>
          </motion.div>
        </motion.div>

        {/* System Dashboard Mockup */}
        <motion.div 
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.8 }}
          animate={{ opacity: 1, rotateX: 5, rotateY: -5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative hidden lg:block perspective-1000 group"
        >
          {/* Main Dashboard Container */}
          <div className="relative w-full bg-[#0f1219] rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
            
            {/* Top Bar Filters */}
            <div className="p-4 border-b border-slate-800 grid grid-cols-2 gap-4">
               <div className="bg-[#1e293b] rounded flex items-center justify-between px-3 py-2 border border-slate-700 text-slate-400 text-xs">
                  <span>Todas as Zonas</span>
                  <ChevronDown size={14} />
               </div>
               <div className="bg-[#1e293b] rounded flex items-center justify-between px-3 py-2 border border-slate-700 text-slate-400 text-xs">
                  <span>Todos os Bairros</span>
                  <ChevronDown size={14} />
               </div>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-2">
               <div className="bg-[#1e293b] rounded flex items-center gap-2 px-3 py-2 border border-slate-700 text-slate-400 text-xs">
                  <Search size={14} />
                  <span>Buscar parada ou bairro...</span>
               </div>
            </div>

            {/* Main Content Grid */}
            <div className="p-4 grid grid-cols-3 gap-4">
               
               {/* Left Column: Map */}
               <div className="col-span-2 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                     <span>Mapa de Sensores</span>
                     <span>15 paradas</span>
                  </div>
                  
                  {/* Map Visual */}
                  <div className="h-64 bg-[#111] rounded-lg border border-slate-800 relative overflow-hidden group/map">
                     {/* Map Image/Pattern Placeholder */}
                     <div className="absolute inset-0 opacity-20 bg-[url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/13/2345/3980.png')] bg-cover grayscale" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-50" />
                     
                     {/* Map Controls */}
                     <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black cursor-pointer hover:bg-slate-200"><Plus size={14} /></div>
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black cursor-pointer hover:bg-slate-200"><Minus size={14} /></div>
                     </div>

                     {/* RECIFE Label */}
                     <div className="absolute top-1/2 left-1/3 text-slate-500 text-2xl font-black opacity-20 tracking-widest pointer-events-none">RECIFE</div>

                     {/* Pins */}
                     <div className="absolute top-[40%] left-[45%]">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red] animate-pulse" />
                     </div>
                     <div className="absolute top-[60%] left-[55%]">
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_lime]" />
                     </div>
                     <div className="absolute top-[30%] left-[60%]">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_10px_yellow]" />
                     </div>
                     
                     <div className="absolute bottom-1 right-1 bg-white/10 backdrop-blur px-2 py-0.5 rounded text-[8px] text-slate-300">Leaflet | OpenStreetMap</div>
                  </div>
               </div>

               {/* Right Column: Stats */}
               <div className="col-span-1 space-y-3">
                  <span className="text-xs text-slate-400">Indicadores Globais</span>
                  
                  <div className="space-y-2">
                     {/* Normal */}
                     <div className="bg-[#0f281e] border border-green-900/50 rounded p-2 flex justify-between items-center group/card hover:border-green-500/50 transition-colors">
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] text-white font-bold">Normal</span>
                              <span className="text-[8px] text-slate-400">33% do total</span>
                           </div>
                        </div>
                        <span className="text-green-500 font-mono text-sm">5</span>
                     </div>

                     {/* Alerta */}
                     <div className="bg-[#2a1c0a] border border-yellow-900/50 rounded p-2 flex justify-between items-center group/card hover:border-yellow-500/50 transition-colors">
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-4 rounded-full border border-yellow-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] text-white font-bold">Alerta</span>
                              <span className="text-[8px] text-slate-400">13% do total</span>
                           </div>
                        </div>
                        <span className="text-yellow-500 font-mono text-sm">2</span>
                     </div>

                     {/* Risco */}
                     <div className="bg-[#2c150b] border border-orange-900/50 rounded p-2 flex justify-between items-center group/card hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-4 rounded-full border border-orange-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] text-white font-bold">Risco</span>
                              <span className="text-[8px] text-slate-400">33% do total</span>
                           </div>
                        </div>
                        <span className="text-orange-500 font-mono text-sm">5</span>
                     </div>

                     {/* Crítico */}
                     <div className="bg-[#290f14] border border-red-900/50 rounded p-2 flex justify-between items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
                        <div className="flex items-center gap-2 relative z-10">
                           <div className="w-4 h-4 rounded-full border border-red-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] text-white font-bold">Crítico</span>
                              <span className="text-[8px] text-slate-400">20% do total</span>
                           </div>
                        </div>
                        <span className="text-red-500 font-mono text-sm relative z-10">3</span>
                     </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center border-t border-slate-800">
                     <span className="text-[10px] text-slate-500">Total de Sensores</span>
                     <span className="text-sm font-bold text-white">15</span>
                  </div>
               </div>
            </div>

            {/* Bottom Status Legend */}
            <div className="bg-[#1e293b]/50 p-3 mx-4 mb-4 rounded-lg flex items-center justify-between gap-2 overflow-x-auto">
               <div className="flex items-center gap-2 min-w-fit">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                     <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-white">Normal</span>
                     <span className="text-[8px] text-slate-400">&lt; 10 cm</span>
                  </div>
               </div>
               
               <div className="flex items-center gap-2 min-w-fit">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center">
                     <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-white">Alerta</span>
                     <span className="text-[8px] text-slate-400">10-20 cm</span>
                  </div>
               </div>

               <div className="flex items-center gap-2 min-w-fit">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center">
                     <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-white">Risco</span>
                     <span className="text-[8px] text-slate-400">20-30 cm</span>
                  </div>
               </div>

               <div className="flex items-center gap-2 min-w-fit">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                     <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-white">Crítico</span>
                     <span className="text-[8px] text-slate-400">&gt;= 30 cm</span>
                  </div>
               </div>
            </div>

          </div>

          {/* Reflection/Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent pointer-events-none rounded-xl" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-20" />
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cyan-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;