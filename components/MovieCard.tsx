
import React, { useState } from 'react';
import { MovieData } from '../types';
import { Eye, Clapperboard } from 'lucide-react';

interface MovieCardProps {
  movie: MovieData;
  index: number;
  onClick: (movie: MovieData) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index, onClick }) => {
  const [imageError, setImageError] = useState(false);

  // Automatically hide the card if the image is broken/empty to satisfy "remove those without pictures"
  if (imageError) return null;

  return (
    <div 
      className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 bg-white h-full flex flex-col"
      onClick={() => onClick(movie)}
    >
      {/* Image Container */}
      <div className="aspect-[2/3] w-full overflow-hidden relative bg-ghibli-dark/10">
        <img 
          src={movie.image} 
          alt={movie.title}
          loading="lazy"
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ghibli-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Role Badge */}
        {movie.role && movie.role !== 'Director' && (
          <div className="absolute top-3 right-3 bg-ghibli-cream/90 backdrop-blur text-ghibli-dark text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
            {movie.role}
          </div>
        )}

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 p-6 w-full text-ghibli-cream transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-2">
             <span className="text-xs font-bold tracking-wider border border-ghibli-cream/30 px-2 py-1 rounded-full backdrop-blur-sm shadow-sm">
              {movie.year}
            </span>
            {movie.role === 'Director' && (
               <span className="text-[10px] opacity-60 uppercase tracking-widest flex items-center gap-1">
                 <Clapperboard className="w-3 h-3" /> Dir.
               </span>
            )}
          </div>
         
          <h3 className="font-serif text-xl font-bold leading-tight mb-1 drop-shadow-lg">{movie.title}</h3>
          <p className="font-serif text-sm opacity-70 italic truncate">{movie.japaneseTitle}</p>
          
          <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex items-center gap-2 text-sm font-bold text-ghibli-sky">
              <span>View Context</span>
              <Eye className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;