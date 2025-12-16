import React from 'react';
import { EXPERT_DATA, HERO_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-500 rounded-lg -z-0"></div>
                <img 
                  src={HERO_IMAGES[0]} 
                  alt="Consultório Ágape" 
                  className="relative z-10 w-full rounded-lg shadow-xl object-cover object-top aspect-[4/5] bg-slate-50"
                />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-2">Quem Somos</h3>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Paixão por devolver a alegria de sorrir</h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Olá! Nós somos a equipe da <strong>{EXPERT_DATA.name}</strong>. Nossa missão vai além de tratar dentes; nós cuidamos de pessoas.
              </p>
              <p>
                Entendemos que ir ao dentista pode gerar ansiedade em muita gente. Por isso, desenvolvemos um método de atendimento focado no seu conforto, segurança e, claro, em resultados estéticos e funcionais incríveis.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Especialistas em implantes e estética",
                "Tecnologia de ponta para diagnósticos precisos",
                "Ambiente acolhedor e familiar",
                "Localização privilegiada em Simão Dias"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check text-emerald-500 mt-1 mr-3"></i>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;