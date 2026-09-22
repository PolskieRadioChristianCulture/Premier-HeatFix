
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 backdrop-blur-xl border-t border-blue-900/20 safe-bottom" aria-label="Mobile Bottom Navigation">
      <div className="flex justify-around items-end pb-4 pt-4 max-w-lg mx-auto px-4">
        {/* Home */}
        <a href="#" aria-label="Navigate to Home" className="flex flex-col items-center gap-2 text-blue-400/60 hover:text-white transition-colors min-w-[50px]">
          <i className="fas fa-home text-xl" aria-hidden="true"></i>
          <span className="text-[9px] font-black uppercase tracking-widest">Home</span>
        </a>
        
        {/* Services */}
        <a href="#services" aria-label="View our Services" className="flex flex-col items-center gap-2 text-blue-400/60 hover:text-white transition-colors min-w-[50px]">
          <i className="fas fa-tools text-xl" aria-hidden="true"></i>
          <span className="text-[9px] font-black uppercase tracking-widest">Services</span>
        </a>
        
        {/* Call (Center Floating Circle) */}
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          aria-label="Call Emergency Service Now"
          className="flex flex-col items-center gap-2 relative -top-3"
        >
          <div className="w-16 h-16 gold-button-gradient rounded-full flex items-center justify-center text-blue-950 shadow-[0_10px_30px_rgba(255,215,0,0.4)] border-[6px] border-[#020617] active:scale-90 transition-transform">
            <i className="fas fa-phone text-2xl" aria-hidden="true"></i>
          </div>
          <span className="text-[10px] font-black text-yellow-accent uppercase tracking-widest -mt-1">Call</span>
        </a>
        
        {/* Heart Help */}
        <a href="#about" aria-label="Learn why to choose us" className="flex flex-col items-center gap-2 text-blue-400/60 hover:text-white transition-colors min-w-[50px]">
          <i className="fas fa-star text-xl" aria-hidden="true"></i>
          <span className="text-[9px] font-black uppercase tracking-widest">Heart help</span>
        </a>
        
        {/* Contact */}
        <a href="#contact" aria-label="Contact us" className="flex flex-col items-center gap-2 text-blue-400/60 hover:text-white transition-colors min-w-[50px]">
          <i className="fas fa-envelope text-xl" aria-hidden="true"></i>
          <span className="text-[9px] font-black uppercase tracking-widest">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;