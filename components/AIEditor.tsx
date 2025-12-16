import React, { useState, useRef } from 'react';
import { editImage, fileToBase64 } from '../services/geminiService';
import { LoadingState } from '../types';

const AIEditor: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setGeneratedImage(null);
      setStatus(LoadingState.IDLE);
    }
  };

  const handleGenerate = async () => {
    if (!imageFile || !prompt) return;

    setStatus(LoadingState.LOADING);
    try {
      const base64Data = await fileToBase64(imageFile);
      const result = await editImage(base64Data, prompt, imageFile.type);
      
      if (result) {
        setGeneratedImage(`data:image/png;base64,${result}`);
        setStatus(LoadingState.SUCCESS);
      } else {
        setStatus(LoadingState.ERROR);
      }
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold mb-4 border border-emerald-500/30">
            <i className="fas fa-magic mr-2"></i> IA Generativa
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simulador de Sorriso com IA</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Use nossa Inteligência Artificial para visualizar potenciais tratamentos. 
            Tire uma foto do seu sorriso e peça para a IA ajustar.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Input Section */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <label className="block text-sm font-medium text-slate-300 mb-1">
                1. Sua foto
              </label>
              <div 
                className="border-2 border-dashed border-slate-600 rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:bg-slate-700/50 transition-all group"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-full w-full object-contain rounded-lg p-2" />
                ) : (
                  <>
                    <i className="fas fa-camera text-3xl text-slate-500 group-hover:text-emerald-400 mb-2"></i>
                    <span className="text-sm text-slate-400">Clique para enviar foto</span>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              <label className="block text-sm font-medium text-slate-300 mb-1 mt-2">
                2. O que você quer mudar?
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Deixe os dentes mais brancos, alinhe o sorriso..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-24"
              />

              <button
                onClick={handleGenerate}
                disabled={!imageFile || !prompt || status === LoadingState.LOADING}
                className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
                  !imageFile || !prompt || status === LoadingState.LOADING
                    ? 'bg-slate-600 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {status === LoadingState.LOADING ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i> Processando...
                  </span>
                ) : (
                  'Gerar Simulação'
                )}
              </button>
            </div>

            {/* Result Section */}
            <div className="w-full md:w-2/3 bg-slate-900 rounded-xl flex items-center justify-center min-h-[300px] border border-slate-700 relative overflow-hidden">
              {status === LoadingState.LOADING && (
                <div className="text-center p-8">
                  <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-emerald-400 animate-pulse">A inteligência artificial está trabalhando...</p>
                </div>
              )}

              {status === LoadingState.SUCCESS && generatedImage && (
                <div className="relative w-full h-full p-2">
                  <img src={generatedImage} alt="Resultado IA" className="w-full h-full object-contain rounded-lg" />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Gerado por IA
                  </div>
                </div>
              )}

              {status === LoadingState.ERROR && (
                <div className="text-center text-red-400 p-8">
                  <i className="fas fa-exclamation-circle text-4xl mb-3"></i>
                  <p>Ocorreu um erro ao gerar a imagem. Tente novamente.</p>
                </div>
              )}

              {status === LoadingState.IDLE && !generatedImage && (
                <div className="text-center text-slate-600 p-8">
                  <i className="fas fa-image text-5xl mb-4 opacity-50"></i>
                  <p>O resultado aparecerá aqui</p>
                </div>
              )}
            </div>

          </div>
          
          <p className="text-xs text-slate-500 mt-6 text-center border-t border-slate-700 pt-4">
            * Esta é uma simulação artística gerada por Inteligência Artificial (Gemini) e não representa uma garantia de resultado clínico. Agende uma consulta para avaliação profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIEditor;