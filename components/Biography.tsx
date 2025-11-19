
import React from 'react';
import { BioEvent } from '../types';
import { Plane, PenTool, History, Star, Feather } from 'lucide-react';

interface BiographyProps {
  events: BioEvent[];
}

const Biography: React.FC<BiographyProps> = ({ events }) => {
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'career': return <PenTool className="w-5 h-5 text-ghibli-cream" />;
      case 'historical': return <History className="w-5 h-5 text-ghibli-cream" />;
      case 'personal': return <Plane className="w-5 h-5 text-ghibli-cream" />;
      default: return <Star className="w-5 h-5 text-ghibli-cream" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ghibli-dark mb-6">The Life of a Master</h2>
        <p className="text-ghibli-slate italic text-lg max-w-2xl mx-auto leading-relaxed">
          "I would like to make a film to tell children 'it's good to be alive'."
        </p>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ghibli-dark/20 before:to-transparent">
        {events.map((event, idx) => (
          <BioCard key={idx} event={event} icon={getIcon(event.type)} />
        ))}
      </div>
      
      <div className="text-center mt-24 opacity-40 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-ghibli-dark" />
        <span className="font-serif text-sm tracking-widest uppercase">Fin</span>
      </div>
    </div>
  );
};

const BioCard: React.FC<{ event: BioEvent, icon: React.ReactNode }> = ({ event, icon }) => {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      
      {/* Timeline Icon */}
      <div className="absolute left-0 md:left-1/2 -translate-x-[3px] md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-ghibli-dark border-4 border-ghibli-cream shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Content Card */}
      <div className="w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-ghibli-dark/5 hover:shadow-md transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
          
          {/* Decorative Background Icon */}
          <div className="absolute -right-4 -bottom-4 opacity-5 text-ghibli-dark transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <Feather className="w-24 h-24" />
          </div>

          {/* Header: Year & Type */}
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <span className="bg-ghibli-sky/20 text-ghibli-dark text-xs font-bold px-3 py-1 rounded-full border border-ghibli-sky/10">
              {event.year}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-ghibli-slate/60 font-bold">
              {event.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-2xl text-ghibli-dark mb-4 leading-tight relative z-10 group-hover:text-ghibli-sky transition-colors duration-300">
            {event.event}
          </h3>

          {/* Description */}
          <p className="text-ghibli-slate text-base leading-relaxed font-sans relative z-10">
            {event.description}
          </p>

        </div>
      </div>

    </div>
  );
};

export default Biography;
