
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { useEffect, useState } from "react";

const OurWedding = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">Our Wedding</h1>
            <p className="text-center text-wedding-warm-gray max-w-2xl mx-auto mb-16">
              We are excited to share our special day with you. Here's a glimpse of what to expect on our wedding day.
            </p>
          </div>
          
          <div className="mb-16">
            <YouTubeEmbed 
              videoId="dQw4w9WgXcQ" 
              title="Our Wedding Announcement"
            />
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl mb-6">Wedding Details</h2>
                <p className="text-wedding-warm-gray mb-4">
                  Our wedding will be held at the beautiful St. Patrick's Cathedral in New York City, 
                  followed by a reception at The Plaza Hotel.
                </p>
                <p className="text-wedding-warm-gray mb-4">
                  The ceremony will begin at 3:00 PM sharp on August 15, 2025. 
                  We kindly ask guests to arrive by 2:30 PM to be seated.
                </p>
                <p className="text-wedding-warm-gray">
                  Following the ceremony, cocktail hour will begin at 4:30 PM at The Plaza Hotel, 
                  with dinner and dancing from 6:00 PM until 11:00 PM.
                </p>
              </div>
              
              <div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" 
                    alt="Wedding venue" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 border-2 border-wedding-accent rounded-lg translate-x-4 translate-y-4 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-wedding-soft-beige">
        <div className="section-container">
          <div className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl font-serif text-center mb-12">Wedding Party</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl text-center mb-6">Bride's Side</h3>
                <ul className="space-y-4">
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Maid of Honor:</span> Emma Johnson
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Bridesmaids:</span> Olivia Smith, Sophia Williams, Isabella Brown
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Flower Girl:</span> Lily Davis
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl text-center mb-6">Groom's Side</h3>
                <ul className="space-y-4">
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Best Man:</span> James Wilson
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Groomsmen:</span> Daniel Anderson, Matthew Thomas, David Martinez
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium">Ring Bearer:</span> Noah Taylor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurWedding;
