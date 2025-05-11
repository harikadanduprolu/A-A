
import { useState, useEffect } from "react";

interface EnhancedNavbarProps {
  scrollToOurWedding: () => void;
  scrollToEvents: () => void;
  scrollToGallery: () => void;
}

const EnhancedNavbar = ({ 
  scrollToOurWedding, 
  scrollToEvents, 
  scrollToGallery 
}: EnhancedNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { title: "Our Wedding", action: scrollToOurWedding },
    { title: "Events", action: scrollToEvents },
    { title: "Gallery", action: scrollToGallery },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-wedding-dark-gray font-serif text-xl md:text-2xl cursor-pointer"
            >
              Sarah & Michael
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={link.action}
                  className="text-wedding-warm-gray hover:text-wedding-dark-gray text-sm uppercase tracking-widest story-link cursor-pointer"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-wedding-dark-gray hover:text-wedding-accent focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => {
                link.action();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full px-3 py-2 text-center text-wedding-warm-gray hover:text-wedding-dark-gray text-sm uppercase tracking-widest cursor-pointer"
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavbar;
