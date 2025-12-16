import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Como funciona a primeira consulta</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700 -z-0"></div>

          {[
            { step: 1, title: "Contato WhatsApp", desc: "Você clica no botão e fala direto com nossa equipe." },
            { step: 2, title: "Agendamento", desc: "Escolhemos juntos o melhor horário para você." },
            { step: 3, title: "Avaliação Gratuita", desc: "Analisamos seu caso e propomos a melhor solução." },
          ].map((item, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-800 border-4 border-emerald-500 rounded-full flex items-center justify-center text-3xl font-bold text-emerald-400 mb-6 shadow-xl">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-slate-800/50 px-6 py-2 rounded-full mx-auto w-full md:w-fit border border-slate-700">
          <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">
            <i className="fas fa-gift mr-2"></i>
            Consulta 100% Gratuita e Sem Compromisso
          </span>
        </div>
      </div>
    </section>
  );
};

export default Process;