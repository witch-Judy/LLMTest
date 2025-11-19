
import React, { useEffect } from 'react';
import { ModalProps } from '../types';
import { X, Calendar, Feather, PenTool, Sparkles, UserCog } from 'lucide-react';

const MovieDetail: React.FC<ModalProps> = ({ movie, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!movie) return null;

  // Fallback to poster if banner is missing or same as poster (rare in API but possible)
  const bgImage = movie.banner || movie.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-ghibli-dark/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl bg-ghibli-cream rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300 border border-ghibli-cream/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="h-64 sm:h-96 shrink-0 relative bg-ghibli-dark">
          <img 
            src={bgImage} 
            alt={movie.title} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ghibli-cream via-ghibli-cream/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:left-10 max-w-2xl">
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-ghibli-dark drop-shadow-sm mb-2 leading-none">
              {movie.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-ghibli-dark/80 font-sans">
               <span className="text-2xl font-serif italic">{movie.japaneseTitle}</span>
               <span className="hidden sm:inline h-1 w-1 bg-ghibli-dark rounded-full" />
               <span className="flex items-center gap-1 font-bold bg-ghibli-dark/10 px-3 py-1 rounded-full"><Calendar className="w-4 h-4" /> {movie.year}</span>
               {movie.role && (
                 <span className="flex items-center gap-1 font-bold bg-ghibli-sky/20 text-ghibli-dark px-3 py-1 rounded-full border border-ghibli-sky/30">
                   <UserCog className="w-4 h-4" /> {movie.role}
                 </span>
               )}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 scrollbar-hide bg-ghibli-cream">
          
          {/* Stats Row */}
          <div className="flex flex-wrap gap-3">
            {movie.themes.map((theme, idx) => (
              <span key={idx} className="px-3 py-1 bg-ghibli-grass/10 text-ghibli-grass border border-ghibli-grass/20 rounded-full text-xs font-bold uppercase tracking-wider">
                {theme}
              </span>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Synopsis & Visuals */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-ghibli-dark mb-3 border-b border-ghibli-dark/10 pb-2">
                  <Sparkles className="w-5 h-5 text-ghibli-sky" /> Synopsis
                </h3>
                <p className="text-ghibli-slate leading-relaxed text-sm sm:text-base">
                  {movie.synopsis}
                </p>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl">
                 <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-ghibli-dark mb-3 border-b border-ghibli-dark/10 pb-2">
                  <PenTool className="w-5 h-5 text-ghibli-sky" /> Visual Style
                </h3>
                <p className="text-ghibli-slate italic font-serif text-lg">
                  "{movie.visualStyle}"
                </p>
              </div>
            </div>

            {/* Right Column: Life Context (The Core Feature) */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-ghibli-dark/5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Feather className="w-32 h-32" />
              </div>
              
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-ghibli-dark mb-6 relative z-10">
                <Feather className="w-6 h-6 text-ghibli-grass" /> Life Context & Creation
              </h3>
              
              <div className="prose prose-slate max-w-none relative z-10">
                <p className="text-lg leading-relaxed text-ghibli-dark/80 font-sans">
                  {movie.lifeContext}
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-ghibli-dark/10 flex items-center gap-4 text-sm text-ghibli-slate relative z-10">
                <div className="w-12 h-12 rounded-full bg-ghibli-dark flex items-center justify-center shrink-0 text-ghibli-cream font-serif font-bold">
                   HM
                </div>
                <p className="italic">
                  "To be born means being compelled to choose an era, a place, and a life. To exist here, now, means to lose the possibility of being countless other potential selves."
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
