
const Footer = () => {
  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-wedding-dark-gray text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl mb-3">Sarah & Michael</h2>
            <p className="text-wedding-soft-beige/80 italic max-w-xl mx-auto">
              "And suddenly all the love songs were about you."
            </p>
          </div>

          <div className="w-full max-w-sm mb-8">
            <div className="h-px bg-white/20 w-full" />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-wedding-soft-beige/70">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-wedding-soft-beige transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('our-wedding')}
              className="hover:text-wedding-soft-beige transition-colors cursor-pointer"
            >
              Our Wedding
            </button>
            <button 
              onClick={() => handleNavigation('events')}
              className="hover:text-wedding-soft-beige transition-colors cursor-pointer"
            >
              Events
            </button>
            <button 
              onClick={() => handleNavigation('gallery')}
              className="hover:text-wedding-soft-beige transition-colors cursor-pointer"
            >
              Gallery
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-wedding-soft-beige/50">
            <p>© 2025 Sarah & Michael's Wedding</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
