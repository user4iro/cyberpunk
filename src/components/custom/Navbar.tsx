import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./Icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-neon-magenta border-b border-pink-500/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 glow-magenta">
              Cyber
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 glow-blue">
              Clean
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#servicios" className="text-sm uppercase tracking-wider hover:text-pink-500 transition-colors">
            Servicios
          </a>
          <a href="#proceso" className="text-sm uppercase tracking-wider hover:text-blue-500 transition-colors">
            Proceso
          </a>
          <a href="#testimonios" className="text-sm uppercase tracking-wider hover:text-green-400 transition-colors">
            Testimonios
          </a>
          <a 
            href="https://wa.me/3145287412"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 
                     text-white px-4 py-2 rounded-md transition-all duration-300 shadow-neon-magenta"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Contactar</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-pink-500/30 pb-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#servicios" 
              className="text-sm uppercase tracking-wider hover:text-pink-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#proceso" 
              className="text-sm uppercase tracking-wider hover:text-blue-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proceso
            </a>
            <a 
              href="#testimonios" 
              className="text-sm uppercase tracking-wider hover:text-green-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="https://wa.me/3145287412"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-blue-600 
                       text-white px-4 py-2 rounded-md shadow-neon-magenta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Contactar</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;