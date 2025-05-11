
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-6 py-16 md:py-24">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">404</h1>
          <p className="text-wedding-warm-gray text-xl mb-8">
            Oops! We couldn't find that page.
          </p>
          <Link 
            to="/" 
            className="bg-wedding-accent hover:bg-wedding-accent-dark text-white px-6 py-3 rounded-md transition-colors hover:shadow-md"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
