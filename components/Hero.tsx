
import React from 'react';
import { PHONE_NUMBER } from '../constants';

// High-visibility direct link format for Google Drive hosted image
const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/d/1zCtvh0VOqgw008okj29oyHWljGo8uwmN";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-24 pb-20">
      <div className="bg-scene-container">
        <div 
          className="bg-scene-image animate-hero-dynamic"
          style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        ></div>
        <div className="pronounced-center-overlay"></div>
        {/* Blue focal glow behind hero content for cinematic depth */}
        <div className="blue-focal-glow scale-[2.5] opacity-30"></div>
        <div className="absolute inset-0 light-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="relative mb-16 flex flex-col items-center justify-center">
          <h1 className="font-heading text-5xl md:text-8xl text-white italic leading-[1.1] hero-title-shadow mb-2">
            Handy Help Team
          </h1>
          <span className="font-heading text-3xl md:text-5xl text-white italic leading-tight hero-title-shadow opacity-90 mb-2">
            for
          </span>
          <span className="font-heading text-5xl md:text-8xl text-white italic leading-[1.1] hero-title-shadow">
            ALL HEARTS
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href={`tel:${PHONE_NUMBER}`} 
            className="gold-button-gradient h-[64px] min-w-[260px] px-8 flex items-center justify-center rounded-2xl font-black text-xl shadow-[0_15px_40px_-10px_rgba(255,215,0,0.4)] hover:scale-105 transition-all active:scale-95"
          >
            <span className="text-white">Call {PHONE_NUMBER}</span>
          </a>
          <a 
            href="#contact" 
            className="gold-button-gradient h-[64px] min-w-[260px] px-8 flex items-center justify-center rounded-2xl font-black text-xl shadow-[0_15px_40px_-10px_rgba(255,215,0,0.4)] hover:scale-105 transition-all active:scale-95 tracking-wide"
          >
            <span className="text-white">Free quote</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;