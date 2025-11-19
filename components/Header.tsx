import React from 'react';
import { Wind, Film, User } from 'lucide-react';

interface HeaderProps {
  activeTab: 'movies' | 'bio';
  onTabChange: (tab: 'movies' | 'bio') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-ghibli-cream/90 backdrop-blur-md border-b border-ghibli-dark/10 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-ghibli-dark cursor-pointer" onClick={() => onTabChange('movies')}>
          <Wind className="w-8 h-8 animate-pulse text-ghibli-sky" />
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-wide leading-none">MIYAZAKI ARCHIVES</h1>
            <p className="text-xs font-sans tracking-widest uppercase text-ghibli-slate opacity-80">Life & Works Gallery</p>
          </div>
        </div>
        
        <nav className="flex bg-ghibli-dark/5 p-1 rounded-full">
          <button 
            onClick={() => onTabChange('movies')}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === 'movies' 
              ? 'bg-ghibli-dark text-ghibli-cream shadow-md' 
              : 'text-ghibli-dark/60 hover:text-ghibli-dark hover:bg-ghibli-dark/5'
            }`}
          >
            <Film className="w-4 h-4" />
            <span className="hidden sm:inline">Works</span>
          </button>
          <button 
            onClick={() => onTabChange('bio')}
             className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === 'bio' 
              ? 'bg-ghibli-dark text-ghibli-cream shadow-md' 
              : 'text-ghibli-dark/60 hover:text-ghibli-dark hover:bg-ghibli-dark/5'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Biography</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;