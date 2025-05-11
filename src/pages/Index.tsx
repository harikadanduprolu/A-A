
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import GalleryGrid from "@/components/GalleryGrid";
import { useRef } from "react";

const Index = () => {
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const events = [
    {
      title: "Wedding Ceremony",
      date: "August 15, 2025",
      time: "3:00 PM - 4:00 PM",
      location: "St. Patrick's Cathedral",
      address: "5th Ave, New York, NY 10022",
      mapUrl: "https://maps.google.com/?q=St.+Patrick's+Cathedral,+5th+Ave,+New+York,+NY+10022",
      description: "Join us as we exchange vows in this beautiful historic cathedral."
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OurStory />
      
      <section ref={eventsRef} className="section-container bg-wedding-soft-beige">
        <h2 className="section-title">Wedding Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              {...event}
              delay={index * 200}
            />
          ))}
        </div>
      </section>
      
      <section ref={galleryRef} className="section-container">
        <h2 className="section-title">Gallery</h2>
        <GalleryGrid 
          images={galleryImages} 
          fullGalleryUrl="https://drive.google.com/drive/folders/example"
        />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
