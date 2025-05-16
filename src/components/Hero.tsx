
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from '../assets/hero.jpg'; 

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen bg-gray-100 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
         >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-white">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <h4 className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-center mb-4">
            We're getting married
          </h4>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-center mb-4">
            Sa
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <p className="font-sans text-lg md:text-xl text-center mb-8">
            August 15, 2025 • New York, NY
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <Link 
            to="/events" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-md transition-all duration-300 inline-block hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href="#story" 
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="" 
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
        </a>
      </div>
    </section>
  );
};

export default Hero;
