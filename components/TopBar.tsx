
import React from 'react';
import { OWNER_NAME, LOGO_IMAGE_URL } from '../constants';

const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/40 backdrop-blur-lg px-4 py-4" aria-label="Main Site Header">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo using image URL from constants */}
        <div>
          <img src={LOGO_IMAGE_URL} alt="Premier HeatFix Logo" className="h-16 md:h-20" />
        </div>

        <a 
          href="https://cclite.pl/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-blue-700/80 hover:bg-blue-600 border border-white/10 rounded-full px-5 py-2 shadow-lg shadow-blue-900/40 transition-all hover:scale-105 active:scale-95" 
          role="button" 
          aria-label="Listen to Global Radio"
        >
          <span className="text-[10px] font-black text-white tracking-widest mr-2">Global Radio</span>
          <i className="fas fa-radio text-[10px] text-yellow-300" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
};

export default TopBar;
