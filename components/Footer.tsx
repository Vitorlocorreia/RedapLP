import React from 'react';
import { Github, Twitter, Linkedin, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-cyan-500 shadow-[0_0_50px_20px_rgba(6,182,212,0.2)]" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-cyan-500" />
              <span className="text-2xl font-display font-bold text-white">REDAP</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Transformando dados hidrológicos em segurança pública através de monitoramento IoT avançado.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/zxfastxz/Redapstyle" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Plataforma</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Dashboard Ao Vivo</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Relatórios Técnicos</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API para Desenvolvedores</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Status do Sistema</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidade de Dados</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Compliance Gov</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 REDAP. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-500 text-xs font-mono uppercase">Sistemas Operacionais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;