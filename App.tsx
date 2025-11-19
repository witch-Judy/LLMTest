import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import Biography from './components/Biography';
import { MovieData, BioEvent } from './types';
import { fetchMiyazakiData, fetchBiography } from './services/geminiService';
import { Loader2, Info } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'movies' | 'bio'>('movies');
  
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [bioEvents, setBioEvents] = useState<BioEvent[]>([]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch both movies (merged with real images) and biography
        const [moviesData, bioData] = await Promise.all([
          fetchMiyazakiData(),
          fetchBiography()
        ]);
        setMovies(moviesData);
        setBioEvents(bioData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-ghibli-cream flex flex-col font-sans">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-grow px-6 py-12 max-w-7xl mx-auto w-full">
        
        {/* Intro Section (Dynamic based on tab) */}
        <section className="mb-12 text-center max-w-3xl mx-auto">
          {activeTab === 'movies' ? (
            <>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-ghibli-dark mb-6">
                The Art of Animation
              </h2>
              <p className="text-lg text-ghibli-slate leading-relaxed">
                Explore the filmography of Hayao Miyazaki through the lens of his life. 
                Select a film to discover the historical context, personal struggles, and 
                philosophical themes that shaped these masterpieces.
              </p>
            </>
          ) : (
            // Biography header handled inside component or here if consistent
            null
          )}
        </section>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 space-y-4 text-ghibli-dark/60">
            <Loader2 className="w-12 h-12 animate-spin text-ghibli-grass" />
            <p className="font-serif italic text-lg">Summoning spirits from the archives...</p>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            {activeTab === 'movies' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {movies.map((movie, index) => (
                  <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    index={index}
                    onClick={setSelectedMovie} 
                  />
                ))}
              </div>
            ) : (
              <Biography events={bioEvents} />
            )}
          </div>
        )}
        
        {!loading && movies.length === 0 && activeTab === 'movies' && (
           <div className="text-center py-20 text-ghibli-slate">
              <p>No archives found. The wind is still today.</p>
           </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-ghibli-dark text-ghibli-cream/60 py-12 px-6 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <div className="h-px w-20 bg-ghibli-cream/20 mb-4" />
          <p>© {new Date().getFullYear()} Miyazaki Archives. A Tribute.</p>
          <div className="flex items-center gap-2 text-xs opacity-50">
             <Info className="w-3 h-3" />
             <span>Images via Studio Ghibli API. Content via Gemini AI.</span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedMovie && (
        <MovieDetail 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default App;