
import React from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS, OWNER_NAME, LOGO_IMAGE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] pt-12" aria-label="Main Site Footer">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-blue-900/20 pt-24 mb-24">
          <div>
            {/* Logo using image URL from constants */}
            <div className="mb-6 w-fit">
              <img src={LOGO_IMAGE_URL} alt="Premier HeatFix Logo" className="h-16 md:h-20" />
            </div>
            <p className="text-blue-100/60 text-sm font-light leading-relaxed max-w-sm">
              Professional residential maintenance and emergency services provided by Premier HeatFix. Trusted local trade experts.
            </p>
          </div>

          <div className="flex flex-col justify-center md:items-end">
             <span className="text-[8px] font-black text-blue-400/60 uppercase tracking-widest mb-6 md:text-right">Professional certifications</span>
             <div className="flex space-x-6">
                <div className="w-12 h-12 rounded-full border border-blue-400/10 flex items-center justify-center text-yellow-accent bg-blue-900/10" aria-label="Gas Safe Registered Professional">
                  <i className="fas fa-fire" aria-hidden="true"></i>
                </div>
                <div className="w-12 h-12 rounded-full border border-blue-400/10 flex items-center justify-center text-yellow-accent bg-blue-900/10" aria-label="NICEIC Electrical Certified Professional">
                  <i className="fas fa-bolt" aria-hidden="true"></i>
                </div>
                <div className="w-12 h-12 rounded-full border border-blue-400/10 flex items-center justify-center text-yellow-accent bg-blue-900/10" aria-label="Quality Guaranteed Master Trade Award">
                  <i className="fas fa-award" aria-hidden="true"></i>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <div className="text-blue-900 text-[8px] uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} PREMIER HEATFIX. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>

      <div className="bg-black py-10 border-t border-blue-900/20 pb-40 lg:pb-14">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center text-[9px] tracking-[0.3em] text-zinc-800 uppercase font-bold">
          <span>Created by </span>
          <a 
            href="mailto:yourimiaginationstudio@gmail.com" 
            aria-label="Email the studio who developed this platform"
            rel="noopener"
            className="ml-2 text-zinc-600 hover:text-yellow-accent transition-colors"
          >
            Your Imagination Studio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
