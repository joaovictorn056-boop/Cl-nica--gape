import React from 'react';
import { EXPERT_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-6">
           <h4 className="text-2xl font-serif font-bold text-slate-800 mb-1">{EXPERT_DATA.name}</h4>
           <p className="text-emerald-600 font-medium">{EXPERT_DATA.role}</p>
        </div>

        <div className="text-slate-500 mb-8 space-y-2">
            <p><i className="fas fa-map-marker-alt mr-2"></i>{EXPERT_DATA.location}</p>
        </div>

        <div className="flex space-x-6 mb-8">
            <a href={EXPERT_DATA.instagramLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-emerald-500 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href={EXPERT_DATA.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-green-500 hover:text-white transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
            </a>
        </div>

        <div className="text-xs text-slate-400 border-t border-slate-200 pt-6 w-full max-w-md">
          <p>&copy; {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;