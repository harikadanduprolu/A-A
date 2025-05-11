
import { useEffect, useRef, useState } from "react";

const OurStory = () => {
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
    <section id="story" ref={sectionRef} className="section-container">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-title">Our Story</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Sarah and Michael"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <div className="absolute inset-0 border-2 border-wedding-accent rounded-md -translate-x-4 -translate-y-4 -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-wedding-warm-gray mb-6">
              We met on a rainy Sunday afternoon at a local coffee shop in Brooklyn. 
              Michael was working on his novel, and Sarah was sketching in her notebook. 
              A spilled coffee led to a conversation, which led to a walk in the rain, 
              which led to dinner the next evening.
            </p>
            
            <p className="text-wedding-warm-gray mb-6">
              Three years later, during a weekend trip to the mountains where we had our 
              first vacation together, Michael proposed at sunset overlooking the valley.
            </p>
            
            <p className="text-wedding-warm-gray">
              Now, we're excited to begin the next chapter of our lives together and 
              we want you to be part of our special day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
