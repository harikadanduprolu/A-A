
import { useState, useEffect } from "react";
import heroBg from '../assets/hero.jpg'; 

interface EnhancedHeroProps {
  scrollToOurWedding: () => void;
}

const EnhancedHero = ({ scrollToOurWedding }: EnhancedHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-white">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h4 className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-center mb-4 font-light">
            We're getting married
          </h4>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-center mb-6 font-light">
            Sarah & Michael
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="font-sans text-lg md:text-xl text-center mb-10 font-light">
            August 15, 2025 • New York, NY
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <button 
            onClick={scrollToOurWedding}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Explore Our Journey
          </button>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={scrollToOurWedding}
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default EnhancedHero;
