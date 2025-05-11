
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface EnhancedEventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapUrl: string;
  description?: string;
  image: string;
  delay?: number;
}

const EnhancedEventCard = ({
  title,
  date,
  time,
  location,
  address,
  mapUrl,
  description,
  image,
  delay = 0,
}: EnhancedEventCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white font-serif text-2xl p-4">{title}</h3>
        </div>
      </div>
      
      <div className="bg-white p-4">
        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 mr-3 text-wedding-accent flex-shrink-0 mt-0.5" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-3 text-wedding-accent flex-shrink-0 mt-0.5" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3 text-wedding-accent flex-shrink-0 mt-0.5" />
            <div>
              <div>{location}</div>
              <div className="text-wedding-warm-gray text-sm">{address}</div>
            </div>
          </div>
        </div>
        
        {description && (
          <p className="text-wedding-warm-gray text-sm mb-4">{description}</p>
        )}
        
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-wedding-accent hover:text-wedding-accent-dark transition-colors group"
        >
          <span className="border-b border-transparent group-hover:border-wedding-accent-dark">View on Google Maps</span>
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default EnhancedEventCard;
