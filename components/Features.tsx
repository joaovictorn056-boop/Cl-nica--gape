import React from 'react';
import { WHY_TRUST_ITEMS, EXPERT_DATA } from '../constants';
import Button from './Button';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Por que confiar em mim?</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {WHY_TRUST_ITEMS.map((item, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 text-2xl shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Intermediate CTA */}
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-emerald-100">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ainda com dúvidas se é o momento certo?</h3>
          <p className="text-emerald-800 mb-8 max-w-xl mx-auto">
            Não deixe para depois a saúde e a estética que você merece. Uma conversa rápida pode esclarecer tudo.
          </p>
          <Button 
            text="Falar diretamente no WhatsApp" 
            href={EXPERT_DATA.whatsappLink}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;