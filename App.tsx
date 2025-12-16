import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Process from './components/Process';
import Footer from './components/Footer';
import AIEditor from './components/AIEditor';
import Button from './components/Button';
import { EXPERT_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Gallery />
        <AIEditor />
        <Features />
        <Process />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-emerald-700 text-white text-center px-4">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para transformar seu sorriso?</h2>
             <p className="text-emerald-100 text-lg mb-10">
               Agende agora sua avaliação gratuita. É rápido, fácil e pode mudar sua vida.
             </p>
             <Button 
               text="Quero agendar minha consulta agora" 
               href={EXPERT_DATA.whatsappLink}
               variant="secondary"
               className="text-lg px-8 py-5"
             />
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;