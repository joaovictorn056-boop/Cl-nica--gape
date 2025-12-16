import React from 'react';
import { EXPERT_DATA, HERO_IMAGES } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 lg:pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block px-3 py-1 mb-4 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide">
              Simão Dias - Sergipe
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Eu sou a equipe da <span className="text-emerald-600">{EXPERT_DATA.name}</span>
            </h1>
            <h2 className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              Transformamos sorrisos e recuperamos a sua autoestima com tratamentos modernos, seguros e humanizados. O sorriso dos seus sonhos está a um clique de distância.
            </h2>
            
            <div className="flex flex-col items-center lg:items-start space-y-3">
              <Button 
                text="Agendar primeira consulta gratuita" 
                href={EXPERT_DATA.whatsappLink}
                className="w-full sm:w-auto text-lg"
              />
              <span className="text-xs text-slate-500 font-medium flex items-center">
                <i className="fas fa-bolt text-yellow-400 mr-1"></i> Resposta rápida • Sem compromisso
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            <div className="absolute inset-0 bg-emerald-200 rounded-full filter blur-3xl opacity-20 transform translate-x-4 translate-y-4"></div>
            <img 
              src={HERO_IMAGES[0]} 
              alt="Especialista Clínica Ágape" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-4 border-white object-cover object-top"
            />
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-500 overflow-hidden">
                       <img src={`https://picsum.photos/32/32?random=${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-800">
                  +500 Sorrisos<br/>
                  <span className="text-emerald-500 text-xs font-normal">Transformados</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;