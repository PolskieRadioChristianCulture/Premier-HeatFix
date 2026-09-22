
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER, LOGO_IMAGE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-lg py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo using image URL from constants */}
        <div>
          <img src={LOGO_IMAGE_URL} alt="Premier HeatFix Logo" className="h-16 md:h-20" />
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
          <a href="#services" className="text-white hover:text-[#d4af37] transition-colors">Services</a>
          <a href="#about" className="text-white hover:text-[#d4af37] transition-colors">Why Us</a>
          <a href="#contact" className="text-white hover:text-[#d4af37] transition-colors">Contact</a>
        </div>

        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide shadow-lg transition-transform hover:scale-105 flex items-center"
        >
          <i className="fas fa-phone-volume mr-2"></i>
          Emergency
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
