
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { useEffect, useState } from "react";

const Events = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const events = [
    {
      title: "Welcome Dinner",
      date: "August 14, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Il Mulino",
      address: "86 W 3rd St, New York, NY 10012",
      mapUrl: "https://maps.google.com/?q=Il+Mulino+86+W+3rd+St+New+York+NY+10012",
      description: "A casual evening dinner to welcome all our out-of-town guests."
    },
    {
      title: "Wedding Ceremony",
      date: "August 15, 2025",
      time: "3:00 PM - 4:00 PM",
      location: "St. Patrick's Cathedral",
      address: "5th Ave, New York, NY 10022",
      mapUrl: "https://maps.google.com/?q=St.+Patrick's+Cathedral,+5th+Ave,+New+York,+NY+10022",
      description: "Join us as we exchange vows in this beautiful historic cathedral. Please arrive by 2:30 PM to be seated."
    },
    {
      title: "Cocktail Hour",
      date: "August 15, 2025",
      time: "4:30 PM - 6:00 PM",
      location: "The Plaza Hotel - Terrace Room",
      address: "768 5th Ave, New York, NY 10019",
      mapUrl: "https://maps.google.com/?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019",
      description: "Enjoy drinks and hors d'oeuvres while we take photos."
    },
    {
      title: "Reception & Dinner",
      date: "August 15, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "The Plaza Hotel - Grand Ballroom",
      address: "768 5th Ave, New York, NY 10019",
      mapUrl: "https://maps.google.com/?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019",
      description: "Dinner, dancing, and celebration!"
    },
    {
      title: "Farewell Brunch",
      date: "August 16, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "The Plaza Hotel - Palm Court",
      address: "768 5th Ave, New York, NY 10019",
      mapUrl: "https://maps.google.com/?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019",
      description: "Join us for a farewell brunch before you depart."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">Wedding Events</h1>
            <p className="text-center text-wedding-warm-gray max-w-2xl mx-auto mb-16">
              We've planned several events to celebrate our special weekend. Please see the details below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <EventCard 
                  {...event}
                  isAnimated={false}
                />
              </div>
            ))}
          </div>
          
          <div className={`mt-16 text-center transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-wedding-accent/30 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl mb-4">Accommodations</h3>
              <p className="text-wedding-warm-gray mb-6">
                We have reserved a block of rooms at The Plaza Hotel for our wedding guests 
                at a special rate. Please mention "Sarah & Michael's Wedding" when booking.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="https://www.theplazany.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-wedding-accent hover:bg-wedding-accent-dark text-white px-6 py-2 rounded-md transition-colors"
                >
                  Book Accommodation
                </a>
                
                <a 
                  href="tel:+12127593000" 
                  className="text-wedding-accent hover:text-wedding-accent-dark transition-colors"
                >
                  +1 (212) 759-3000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
