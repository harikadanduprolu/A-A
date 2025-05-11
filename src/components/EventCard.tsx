
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapUrl: string;
  description?: string;
  isAnimated?: boolean;
  delay?: number;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  address,
  mapUrl,
  description,
  isAnimated = true,
  delay = 0,
}: EventCardProps) => {
  return (
    <div 
      className={`border border-wedding-accent/30 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300
        ${isAnimated ? 'animate-fade-in' : ''}`}
      style={isAnimated ? { animationDelay: `${delay}ms` } : {}}
    >
      <h3 className="font-serif text-2xl mb-4 text-wedding-dark-gray">{title}</h3>
      
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
        className="inline-flex items-center text-sm text-wedding-accent hover:text-wedding-accent-dark transition-colors"
      >
        View on Google Maps
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default EventCard;
