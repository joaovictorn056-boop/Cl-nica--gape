import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Take a subset for the main gallery, keeping others for "More Proof" if needed
  const displayImages = GALLERY_IMAGES.slice(0, 8); 

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Resultados Reais</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja algumas das transformações que realizamos. Cada sorriso conta uma história de superação e autoestima recuperada.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayImages.map((src, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md aspect-square bg-white"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white opacity-0 group-hover:opacity-100 text-3xl transition-all duration-300 transform scale-50 group-hover:scale-100"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-slate-400 italic">
            * Os resultados podem variar de pessoa para pessoa. Imagens meramente ilustrativas de casos clínicos.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-emerald-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Zoom" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;