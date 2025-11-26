
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertTriangle, Clock, PieChart, BarChart2, Shield, Droplets, Thermometer, Waves, TrendingUp, TrendingDown } from 'lucide-react';

const AdminPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'charts' | 'alerts'>('overview');

  return (
    <section className="py-16 relative bg-slate-950/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-10" />
      
      <div className="container mx-auto px-4">
        {/* Section Header - More compact */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm mb-2">
              <Shield size={16} />
              <span className="uppercase tracking-widest">Acesso Administrativo</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white leading-tight">
              CONTROLE TOTAL DA OPERAÇÃO
            </h2>
          </div>
          
          {/* Quick stats indicators */}
          <div className="flex gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1"><PieChart size={14} className="text-cyan-500" /> Tendências</div>
            <div className="flex items-center gap-1"><Clock size={14} className="text-orange-500" /> Logs</div>
            <div className="flex items-center gap-1"><BarChart2 size={14} className="text-green-500" /> Relatórios</div>
          </div>
        </div>

        {/* Dashboard Mockup - Reduced Height */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-slate-700 bg-[#0f1219] shadow-2xl overflow-hidden relative max-w-6xl mx-auto"
        >
            {/* Top Bar / Navigation */}
            <div className="bg-[#1e293b]/50 border-b border-slate-700 px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex bg-[#0f172a] p-1 rounded-lg border border-slate-700 w-full sm:w-auto">
                    <button 
                        onClick={() => setActiveTab('overview')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded text-xs font-bold transition-all ${activeTab === 'overview' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Visão Geral
                    </button>
                    <button 
                        onClick={() => setActiveTab('charts')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded text-xs font-bold transition-all ${activeTab === 'charts' ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Gráficos
                    </button>
                    <button 
                        onClick={() => setActiveTab('alerts')}
                        className={`flex-1 sm:flex-none px-4 py-1.5 rounded text-xs font-bold transition-all ${activeTab === 'alerts' ? 'bg-red-900/30 text-red-400 border border-red-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        Histórico de Alertas
                    </button>
                </div>
                
                <div className="text-[10px] text-slate-500 uppercase tracking-wider hidden sm:block">
                    Painel v.2.4.0
                </div>
            </div>

            {/* Main Content Area - Fixed reasonable height */}
            <div className="p-6 h-[420px] bg-[#0b0f19] relative overflow-hidden">
                <AnimatePresence mode="wait">
                    
                    {/* VIEW: OVERVIEW (Recreated from Screenshot) */}
                    {activeTab === 'overview' && (
                        <motion.div 
                             key="overview"
                             initial={{ opacity: 0, scale: 0.98 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.98 }}
                             className="h-full flex flex-col gap-4"
                        >
                            {/* System Status Bar */}
                            <div className="bg-[#141b2d] border border-slate-800 rounded-lg p-3 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                        <Activity size={16} className="text-green-500" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase">Status do Sistema</div>
                                        <div className="text-sm font-bold text-white leading-none">Monitoramento Ativo</div>
                                    </div>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <div className="text-[10px] text-slate-500 flex items-center justify-end gap-1"><Clock size={10}/> Última atualização</div>
                                    <div className="text-sm font-mono text-slate-300">11:06:26</div>
                                </div>
                            </div>

                            {/* 3 Metrics Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                                {/* Water Level Card */}
                                <div className="bg-[#141b2d] border border-slate-800 rounded-lg p-5 flex flex-col justify-between group hover:border-blue-500/30 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
                                            <Droplets size={20} />
                                        </div>
                                        <TrendingUp size={16} className="text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-400 text-xs font-medium mb-1">Nível Médio de Água</h4>
                                        <div className="text-3xl font-bold text-white mb-2">18.1 cm</div>
                                        <div className="text-[10px] text-slate-600">Min: 0.0 cm • Max: 38.0 cm</div>
                                    </div>
                                </div>

                                {/* Temperature Card */}
                                <div className="bg-[#141b2d] border border-slate-800 rounded-lg p-5 flex flex-col justify-between group hover:border-orange-500/30 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-500">
                                            <Activity size={20} />
                                        </div>
                                        <TrendingUp size={16} className="text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-400 text-xs font-medium mb-1">Temperatura Média</h4>
                                        <div className="text-3xl font-bold text-white mb-2">27.2°C</div>
                                        <div className="text-[10px] text-slate-600">Variação térmica monitorada</div>
                                    </div>
                                </div>

                                {/* Humidity Card */}
                                <div className="bg-[#141b2d] border border-slate-800 rounded-lg p-5 flex flex-col justify-between group hover:border-cyan-500/30 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-500">
                                            <Waves size={20} />
                                        </div>
                                        <TrendingDown size={16} className="text-cyan-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-400 text-xs font-medium mb-1">Umidade Média</h4>
                                        <div className="text-3xl font-bold text-white mb-2">71.8%</div>
                                        <div className="text-[10px] text-slate-600">Condições atmosféricas</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* VIEW: CHARTS */}
                    {activeTab === 'charts' && (
                        <motion.div 
                            key="charts"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full"
                        >
                            {/* Line Chart Card */}
                            <div className="bg-[#141b2d] border border-slate-800 rounded-lg p-4 flex flex-col h-full">
                                <h4 className="text-slate-300 font-bold text-sm mb-1">Histórico de Nível</h4>
                                <p className="text-slate-500 text-[10px] mb-2">Últimas 6 leituras por zona</p>
                                
                                <div className="flex-1 relative flex items-end pb-6 pl-6 border-l border-b border-slate-700">
                                    <div className="absolute left-0 top-0 bottom-6 -translate-x-full pr-1 flex flex-col justify-between text-[8px] text-slate-500 h-full">
                                        <span>36</span><span>18</span><span>0</span>
                                    </div>
                                    <svg className="w-full h-full overflow-visible">
                                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1e293b" strokeDasharray="4" />
                                        <path d="M0,20 Q50,10 100,20 T200,30 T300,80 T400,60" fill="none" stroke="#3b82f6" strokeWidth="2" />
                                        <path d="M0,50 Q80,55 160,70 T320,65 T400,60" fill="none" stroke="#ec4899" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Pie Chart Card */}
                            <div className="bg-[#141b2d] border border-slate-800 rounded-lg p-4 flex flex-col h-full items-center justify-center">
                                <h4 className="text-slate-300 font-bold text-sm mb-6 self-start">Distribuição</h4>
                                <div className="w-40 h-40 rounded-full relative" 
                                    style={{ background: `conic-gradient(#22c55e 0% 33%, #eab308 33% 46%, #f97316 46% 73%, #ef4444 73% 100%)` }}>
                                    <div className="absolute inset-4 bg-[#141b2d] rounded-full" />
                                </div>
                                <div className="flex gap-4 mt-6 text-[10px]">
                                    <span className="text-green-500">● Normal</span>
                                    <span className="text-orange-500">● Risco</span>
                                    <span className="text-red-500">● Crítico</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* VIEW: ALERTS HISTORY */}
                    {activeTab === 'alerts' && (
                        <motion.div 
                            key="alerts"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="h-full flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-slate-300 font-bold text-sm">Alertas Recentes</h4>
                                <span className="text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">7 registros</span>
                            </div>

                            <div className="space-y-2 overflow-y-auto pr-1 custom-scrollbar">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-[#2a120e] border-l-2 border-orange-500 p-3 rounded-r flex justify-between items-center hover:bg-[#381510] transition-colors">
                                        <div className="flex gap-3 items-center">
                                            <AlertTriangle size={16} className="text-orange-500" />
                                            <div>
                                                <h5 className="text-orange-100 font-bold text-xs">Parada Crítica #{i}02</h5>
                                                <p className="text-[10px] text-orange-200/60">Nível excedeu margem de segurança</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-orange-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">RISCO</span>
                                            <div className="text-[9px] text-slate-500 mt-1">11:06:2{i}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPreview;
