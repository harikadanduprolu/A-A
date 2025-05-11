
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Image } from "lucide-react";

interface GalleryGridProps {
  images: { src: string; alt: string }[];
  fullGalleryUrl: string;
}

const GalleryGrid = ({ images, fullGalleryUrl }: GalleryGridProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`overflow-hidden rounded-lg shadow-md hover-scale 
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-72 object-cover"
            />
          </div>
        ))}
      </div>

      <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
        <a
          href={fullGalleryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-wedding-accent hover:bg-wedding-accent-dark text-white px-6 py-3 rounded-md transition-colors hover:shadow-md"
        >
          <Image className="w-5 h-5 mr-2" />
          View Full Gallery
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default GalleryGrid;
