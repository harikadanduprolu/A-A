
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Vacation in Italy"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Beach day last summer"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      alt: "Coffee date in Brooklyn"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">Our Gallery</h1>
            <p className="text-center text-wedding-warm-gray max-w-2xl mx-auto mb-16">
              A glimpse into our journey together and the moments that led us here.
            </p>
          </div>
          
          <GalleryGrid 
            images={galleryImages} 
            fullGalleryUrl="https://drive.google.com/drive/folders/example"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
