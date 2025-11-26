
import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Features from './components/Features';
import Reciprocity from './components/Reciprocity';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Scarcity from './components/Scarcity';
import Footer from './components/Footer';
import AdminPreview from './components/AdminPreview';
import MobileApp from './components/MobileApp';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-black">
      <Background />
      
      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20">
         <div className="scanline"></div>
      </div>

      <main>
        <Hero />
        <Scarcity />
        <Features />
        <AdminPreview />
        <MobileApp />
        <Reciprocity />
        <Pricing />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
