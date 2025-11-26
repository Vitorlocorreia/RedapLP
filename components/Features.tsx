import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map as MapIcon, Activity, AlertTriangle, FileText, Filter, Cpu, Download } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  { id: '1', title: 'Simulação Automática', description: 'Simulação de dados a cada 10s. Status crítico com oscilação visual.', icon: Cpu },
  { id: '2', title: 'Mapas Interativos', description: 'Marcadores de status (Normal a Crítico) com centralização inteligente.', icon: MapIcon },
  { id: '3', title: 'Gráficos Históricos', description: 'Linha do tempo de nível da água atualizada em tempo real.', icon: Activity },
  { id: '4', title: 'Alertas Visuais', description: 'Banners automáticos de situação crítica quando limites são excedidos.', icon: AlertTriangle },
  { id: '5', title: 'Exportação CSV', description: 'Download imediato de datasets históricos para análise offline.', icon: Download },
  { id: '6', title: 'Filtros Inteligentes', description: 'Segmentação instantânea por bairro ou sensor específico.', icon: Filter },
];

const Features: React.FC = () => {
  // State for internal demos
  const [simLevel, setSimLevel] = useState(15);
  const [chartPoints, setChartPoints] = useState<number[]>(new Array(10).fill(20));
  const [activeAlert, setActiveAlert] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Simulation Loop for Demos
  useEffect(() => {
    const interval = setInterval(() => {
      setSimStep(prev => prev + 1);

      // Simulate Data Level
      setSimLevel(prev => {
        const next = Math.max(5, Math.min(35, prev + (Math.random() - 0.5) * 10));
        return next;
      });

      // Update Chart
      setChartPoints(prev => {
         const newVal = Math.max(5, Math.min(45, prev[prev.length - 1] + (Math.random() - 0.5) * 15));
         return [...prev.slice(1), newVal];
      });

    }, 2000); // 2 seconds for quicker demo visual (User asked for 10s updates in real system, but demo needs to be faster to be seen)
    return () => clearInterval(interval);
  }, []);

  // Sync Alert with Level
  useEffect(() => {
      setActiveAlert(simLevel > 30);
  }, [simLevel]);

  // Helper for Chart Path
  const getPolylinePoints = () => {
    return chartPoints.map((val, i) => `${i * 10},${50 - val}`).join(' ');
  };

  return (
    <section className="py-24 relative z-10 bg-[#020617]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            ARSENAL <span className="text-cyan-400">TECNOLÓGICO</span>
          </h2>
          <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_#06b6d4]" />
          <p className="mt-4 text-slate-400">Funcionalidades de ponta para gestão de crises.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Simulação Automática */}
          <FeatureCard feature={features[0]}>
             <div className="h-24 bg-slate-900 rounded-lg border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden">
                <div className={`text-3xl font-mono font-bold transition-colors duration-500 ${simLevel > 30 ? 'text-red-500 animate-pulse' : simLevel > 20 ? 'text-yellow-500' : 'text-green-500'}`}>
                    {simLevel.toFixed(1)} cm
                </div>
                <div className="text-xs text-slate-500 mt-1">Atualizando em: {(10 - (simStep % 5) * 2)}s</div>
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-cyan-500 transition-all duration-1000 ease-linear" style={{ width: `${((simStep % 5) * 20)}%` }} />
             </div>
          </FeatureCard>

          {/* 2. Mapas Interativos */}
          <FeatureCard feature={features[1]}>
             <div className="h-24 bg-slate-900 rounded-lg border border-slate-700 relative overflow-hidden group/map cursor-pointer">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:10px_10px]" />
                {/* Simulated Map Markers */}
                <div className={`absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_lime]`} />
                <div className={`absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_yellow] animate-bounce`} style={{ animationDuration: '2s' }} />
                <div className={`absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_red] animate-ping`} />
                <div className="absolute bottom-1 right-1 bg-slate-800 text-[8px] px-1 rounded text-white opacity-0 group-hover/map:opacity-100 transition-opacity">Centralizar</div>
             </div>
          </FeatureCard>

          {/* 3. Gráficos Históricos */}
          <FeatureCard feature={features[2]}>
             <div className="h-24 bg-slate-900 rounded-lg border border-slate-700 relative overflow-hidden flex items-end p-2">
                <svg className="w-full h-full" viewBox="0 0 90 50" preserveAspectRatio="none">
                    <polyline 
                        points={getPolylinePoints()}
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        className="transition-all duration-500 ease-linear"
                    />
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                    </linearGradient>
                    <polygon 
                        points={`0,50 ${getPolylinePoints()} 90,50`}
                        fill="url(#chartFill)"
                        className="transition-all duration-500 ease-linear opacity-50"
                    />
                </svg>
             </div>
          </FeatureCard>

          {/* 4. Alertas Visuais */}
          <FeatureCard feature={features[3]}>
             <div className="h-24 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {activeAlert ? (
                        <motion.div 
                            key="alert"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="w-full bg-red-500/20 h-full flex flex-col items-center justify-center border-2 border-red-500 animate-pulse"
                        >
                            <AlertTriangle className="text-red-500 mb-1" size={24} />
                            <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Situação Crítica</span>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 text-green-500"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-xs font-mono">MONITORAMENTO NORMAL</span>
                        </motion.div>
                    )}
                </AnimatePresence>
             </div>
          </FeatureCard>

          {/* 5. Exportação CSV */}
          <FeatureCard feature={features[4]}>
             <div className="h-24 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center">
                <button className="group flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-cyan-600 border border-slate-600 hover:border-cyan-400 rounded transition-all duration-300">
                    <FileText size={16} className="text-slate-400 group-hover:text-white" />
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white">BAIXAR .CSV</span>
                    <Download size={14} className="text-slate-500 group-hover:text-white opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                </button>
             </div>
          </FeatureCard>

          {/* 6. Filtros Inteligentes */}
          <FeatureCard feature={features[5]}>
             <div className="h-24 bg-slate-900 rounded-lg border border-slate-700 p-3 flex flex-col gap-2 justify-center">
                <div className="h-6 w-full bg-slate-800 rounded border border-slate-600 flex items-center px-2 justify-between cursor-pointer hover:border-cyan-500 transition-colors">
                    <span className="text-[10px] text-slate-400">Todos os Bairros</span>
                    <Filter size={10} className="text-cyan-500" />
                </div>
                <div className="h-6 w-full bg-slate-800 rounded border border-slate-600 flex items-center px-2 justify-between cursor-pointer hover:border-cyan-500 transition-colors">
                    <span className="text-[10px] text-slate-400">Sensor #A-142</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
             </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature; children: React.ReactNode }> = ({ feature, children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/40 border border-slate-800 p-6 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500 flex flex-col gap-4"
    >
        {/* Header */}
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors border border-slate-700 group-hover:border-cyan-500/50">
                <feature.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                {feature.title}
            </h3>
        </div>

        {/* Text */}
        <p className="text-slate-400 text-sm leading-relaxed h-10">
            {feature.description}
        </p>

        {/* Demo Area (Children) */}
        <div className="mt-auto pt-4 border-t border-slate-800/50">
            {children}
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
);

export default Features;