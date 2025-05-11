
import { useRef } from "react";
import Footer from "@/components/Footer";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedNavbar from "@/components/EnhancedNavbar";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import EnhancedEventCard from "@/components/EnhancedEventCard";
import GalleryGrid from "@/components/GalleryGrid";

const SinglePageApp = () => {
  const ourWeddingRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const events = [
    {
      title: "Welcome Dinner",
      date: "August 14, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Il Mulino",
      address: "86 W 3rd St, New York, NY 10012",
      mapUrl: "https://maps.google.com/?q=Il+Mulino+86+W+3rd+St+New+York+NY+10012",
      description: "A casual evening dinner to welcome all our out-of-town guests.",
      image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    },
    {
      title: "Wedding Ceremony",
      date: "August 15, 2025",
      time: "3:00 PM - 4:00 PM",
      location: "St. Patrick's Cathedral",
      address: "5th Ave, New York, NY 10022",
      mapUrl: "https://maps.google.com/?q=St.+Patrick's+Cathedral,+5th+Ave,+New+York,+NY+10022",
      description: "Join us as we exchange vows in this beautiful historic cathedral.",
      image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    },
    {
      title: "Cocktail Hour",
      date: "August 15, 2025",
      time: "4:30 PM - 6:00 PM",
      location: "The Plaza Hotel - Terrace Room",
      address: "768 5th Ave, New York, NY 10019",
      mapUrl: "https://maps.google.com/?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019",
      description: "Enjoy drinks and hors d'oeuvres while we take photos.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    },
    {
      title: "Reception & Dinner",
      date: "August 15, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "The Plaza Hotel - Grand Ballroom",
      address: "768 5th Ave, New York, NY 10019",
      mapUrl: "https://maps.google.com/?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019",
      description: "Dinner, dancing, and celebration!",
      image: "https://images.unsplash.com/photo-1508808707771-44951eaabdb6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    },
    {
      title: "Farewell Brunch",
      date: "August 16, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "The Plaza Hotel - Palm Court",
      address: "768 5th Ave, New York, NY 10019",
      mapUrl: "https://maps.google.com/?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019",
      description: "Join us for a farewell brunch before you depart.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Sarah and Michael walking in the park"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Sarah and Michael engagement photo"
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Night sky at our favorite spot"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Our first apartment living room"
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Weekend trip to the mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "First dance practice"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-soft-beige to-white">
      <EnhancedNavbar 
        scrollToOurWedding={() => scrollToSection(ourWeddingRef)} 
        scrollToEvents={() => scrollToSection(eventsRef)} 
        scrollToGallery={() => scrollToSection(galleryRef)}
      />
      
      <EnhancedHero scrollToOurWedding={() => scrollToSection(ourWeddingRef)} />
      
      <div ref={ourWeddingRef} className="section-container pt-24">
        <h2 className="section-title text-wedding-dark-gray">Our Wedding</h2>
        <div className="max-w-4xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-lg">
          <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Our Wedding Journey" />
        </div>
      </div>
      
      <div ref={eventsRef} className="section-container bg-wedding-soft-beige/50 py-24">
        <h2 className="section-title text-wedding-dark-gray">Wedding Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EnhancedEventCard 
              key={index}
              {...event}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
      
      <div ref={galleryRef} className="section-container py-24">
        <h2 className="section-title text-wedding-dark-gray">Gallery</h2>
        <GalleryGrid 
          images={galleryImages} 
          fullGalleryUrl="https://drive.google.com/drive/folders/example"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default SinglePageApp;
