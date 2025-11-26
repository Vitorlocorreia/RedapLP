
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Check, X, Smartphone, Apple, Play } from 'lucide-react';

const MobileApp: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/30 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-500/20">
            <Smartphone size={14} />
            <span>Disponível Mobile</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            CONTROLE NA PALMA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">DA SUA MÃO</span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Receba notificações push instantâneas de áreas de risco. Acompanhe sensores e equipes de campo em tempo real pelo app nativo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors font-bold group">
              <Apple size={24} />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase text-slate-600">Baixar na</div>
                <div className="text-sm font-black">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-transparent border border-slate-600 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors group">
              <Play size={24} className="fill-white" />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase text-slate-400">Disponível no</div>
                <div className="text-sm font-black">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* 3D Phone Mockup */}
        <div className="flex-1 w-full max-w-sm flex justify-center order-1 md:order-2">
          <motion.div 
            initial={{ rotateY: -15, rotateX: 10, y: 20 }}
            whileInView={{ rotateY: -5, rotateX: 5, y: -20 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 4,
              ease: "easeInOut"
            }}
            className="relative w-[300px] h-[600px] bg-slate-900 rounded-[45px] border-[8px] border-slate-800 shadow-2xl overflow-hidden"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.15)' }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-30" />
            
            {/* Screen Content */}
            <div className="w-full h-full bg-[#0f1219] flex flex-col pt-8 text-white relative font-sans">
                
                {/* Search Bar Area */}
                <div className="px-4 py-3 space-y-3 z-20">
                    <div className="bg-[#1e293b] rounded-md flex items-center gap-2 px-3 py-3 border border-slate-700 text-slate-400 text-xs shadow-lg">
                        <Search size={16} />
                        <span>Buscar parada ou bairro...</span>
                    </div>
                    
                    <div className="bg-[#1e293b] rounded-md flex items-center justify-between px-3 py-2.5 border border-slate-700 text-slate-300 text-xs font-medium shadow-lg">
                        <span>Todos</span>
                        <ChevronDown size={14} />
                    </div>
                </div>

                {/* Map Card */}
                <div className="flex-1 px-4 pb-6 overflow-hidden flex flex-col">
                    <div className="bg-[#141b2d] rounded-xl border border-slate-800 flex-1 flex flex-col overflow-hidden relative shadow-2xl">
                        
                        {/* Map Header */}
                        <div className="px-4 py-3 border-b border-slate-800 flex justify-between items-baseline bg-[#1e293b]">
                             <span className="text-sm font-bold text-white">Mapa de Sensores</span>
                             <span className="text-[10px] text-slate-400">15 paradas</span>
                        </div>

                        {/* Map View */}
                        <div className="relative flex-1 bg-[#111] overflow-hidden">
                             {/* Map Background Pattern */}
                             <div className="absolute inset-0 opacity-40 bg-[url('https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/13/2345/3980.png')] bg-cover grayscale" />
                             
                             {/* Map Controls */}
                             <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-bold text-sm shadow cursor-pointer hover:bg-slate-200">+</div>
                                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-bold text-sm shadow cursor-pointer hover:bg-slate-200">-</div>
                             </div>

                             {/* --- MARKERS --- */}
                             
                             {/* Green Check (Normal) - Top Left */}
                             <div className="absolute top-[15%] left-[25%]">
                                <div className="w-7 h-7 rounded-full bg-green-500 border-2 border-white shadow-lg flex items-center justify-center">
                                    <Check size={14} className="text-white stroke-[4]" />
                                </div>
                             </div>

                             {/* Green Check (Normal) - Edge Left */}
                             <div className="absolute top-[40%] -left-[5%] opacity-50">
                                <div className="w-7 h-7 rounded-full bg-green-500 border-2 border-white shadow-lg flex items-center justify-center">
                                    <Check size={14} className="text-white stroke-[4]" />
                                </div>
                             </div>
                             
                             {/* Yellow Target (Alert) - Center */}
                             <div className="absolute top-[50%] left-[50%]">
                                <div className="w-7 h-7 rounded-full bg-yellow-500 border-2 border-white shadow-lg flex items-center justify-center">
                                     <div className="w-3 h-3 rounded-full border-[2.5px] border-white" />
                                </div>
                             </div>
                             
                             {/* Yellow Target (Alert) - Right */}
                             <div className="absolute top-[58%] right-[5%]">
                                <div className="w-7 h-7 rounded-full bg-yellow-500 border-2 border-white shadow-lg flex items-center justify-center">
                                     <div className="w-3 h-3 rounded-full border-[2.5px] border-white" />
                                </div>
                             </div>
                             
                             {/* Yellow Target (Alert) - Bottom Left */}
                             <div className="absolute bottom-[35%] left-[25%]">
                                <div className="w-7 h-7 rounded-full bg-yellow-500 border-2 border-white shadow-lg flex items-center justify-center">
                                     <div className="w-3 h-3 rounded-full border-[2.5px] border-white" />
                                </div>
                             </div>

                             {/* Orange Triangle (Risk) - Mid Right */}
                             <div className="absolute top-[38%] left-[60%]">
                                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                                     <path d="M12 2L22 20H2L12 2Z" fill="#f97316" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                     <path d="M12 8V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                                     <path d="M12 17V17.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                                 </svg>
                             </div>
                             
                             {/* Orange Triangle (Risk) - Center Top */}
                             <div className="absolute top-[25%] left-[45%]">
                                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                                     <path d="M12 2L22 20H2L12 2Z" fill="#f97316" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                     <path d="M12 8V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                                     <path d="M12 17V17.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                                 </svg>
                             </div>

                             {/* Red Square (Critical) - Mid Left */}
                             <div className="absolute top-[45%] left-[35%]">
                                <div className="w-7 h-7 bg-[#991b1b] rounded border-2 border-[#ef4444] shadow-[0_0_10px_red] flex items-center justify-center">
                                     <X size={16} className="text-[#ef4444] stroke-[3]" />
                                </div>
                             </div>

                             {/* Red Square (Critical) - Bottom Center */}
                             <div className="absolute bottom-[25%] left-[45%]">
                                <div className="w-7 h-7 bg-[#991b1b] rounded border-2 border-[#ef4444] shadow-[0_0_10px_red] flex items-center justify-center">
                                     <X size={16} className="text-[#ef4444] stroke-[3]" />
                                </div>
                             </div>

                             {/* Red Square (Critical) - Bottom Left */}
                             <div className="absolute bottom-[10%] left-[10%]">
                                <div className="w-7 h-7 bg-[#991b1b] rounded border-2 border-[#ef4444] shadow-[0_0_10px_red] flex items-center justify-center">
                                     <X size={16} className="text-[#ef4444] stroke-[3]" />
                                </div>
                             </div>

                             <div className="absolute bottom-1 right-1 bg-white/10 backdrop-blur px-1.5 py-0.5 rounded text-[7px] text-slate-300">Leaflet | OpenStreetMap</div>
                        </div>

                        {/* Legend Footer */}
                        <div className="px-3 py-3 bg-[#1e293b] border-t border-slate-800 flex justify-between items-center">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                <span className="text-[10px] font-medium text-slate-300">Normal</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <span className="text-[10px] font-medium text-slate-300">Alerta</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                                <span className="text-[10px] font-medium text-slate-300">Risco</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <span className="text-[10px] font-medium text-slate-300">Crítico</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MobileApp;
