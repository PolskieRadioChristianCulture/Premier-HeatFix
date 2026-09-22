
import React from 'react';
import { BENEFITS } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#020617] border-y border-blue-900/20 overflow-hidden">
      <div className="absolute -top-10 -right-12 w-72 h-72 opacity-[0.05] pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#FDE047" 
            d="M100,160 Q105,130 140,110 Q110,105 100,70 Q90,105 60,110 Q95,130 100,160 Z" 
          />
          <path 
            stroke="#3B82F6" 
            strokeWidth="1.5" 
            fill="none" 
            d="M100,180 C100,100 180,100 180,40 M100,180 C100,100 20,100 20,40 M100,180 L100,20" 
          />
          <circle cx="100" cy="20" r="3" fill="#FDE047" />
          <circle cx="180" cy="40" r="3" fill="#FDE047" />
          <circle cx="20" cy="40" r="3" fill="#FDE047" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-[10px] font-black text-yellow-accent uppercase tracking-[0.4em] mb-3">HEART HELP</h2>
          <h3 className="font-heading text-3xl text-white text-shadow-premium">Trusted Standards</h3>
          <div className="w-12 h-1 bg-yellow-400 mt-4" aria-hidden="true"></div>
        </div>

        <div className="space-y-10">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex gap-6 group">
              <div 
                className="w-12 h-12 shrink-0 bg-blue-900/30 border border-blue-400/20 rounded-2xl flex items-center justify-center text-lg shadow-lg group-hover:border-yellow-400/40 transition-colors text-yellow-accent"
                aria-hidden="true"
              >
                <i className={`fas ${benefit.icon}`}></i>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-white text-shadow-premium group-hover:text-yellow-accent transition-colors">{benefit.title}</h4>
                {benefit.link ? (
                  <a 
                    href={benefit.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-blue-100/90 text-sm font-medium leading-relaxed text-shadow-premium hover:text-yellow-400 transition-colors"
                  >
                    {benefit.description}
                  </a>
                ) : (
                  <p className="text-blue-100/90 text-sm font-medium leading-relaxed text-shadow-premium">{benefit.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-950/40 rounded-[40px] p-8 border border-yellow-400/20 relative overflow-hidden group active:scale-[0.98] transition-transform" aria-label="20 plus years of master experience at Premier HeatFix">
          <div className="absolute top-0 right-0 p-8 text-blue-900/20 pointer-events-none group-hover:text-yellow-400/10 transition-colors" aria-hidden="true">
            <i className="fas fa-award text-8xl opacity-10"></i>
          </div>
          <div className="relative z-10 flex items-center space-x-6">
            <div className="text-5xl font-black text-yellow-accent drop-shadow-xl">20+</div>
            <div className="text-[10px] uppercase font-black text-white tracking-[0.2em] leading-tight text-shadow-premium">
              Years of <br /> Master Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
