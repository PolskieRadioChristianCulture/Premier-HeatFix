import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-[9px] font-black text-yellow-accent uppercase tracking-[0.5em] mb-4">Core Services</h2>
          <h3 className="font-heading text-3xl md:text-5xl text-white italic text-shadow-premium">Professional Solutions</h3>
          <div className="w-16 h-1 yellow-gradient mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="relative overflow-hidden aspect-[4/5] rounded-[40px] border border-blue-900/30 bg-blue-950/20 group transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(253,224,71,0.2)]"
            >
              <div className="bg-scene-container">
                <div 
                  className="bg-scene-image animate-scene opacity-60 scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3]"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                ></div>
                <div className="pronounced-center-overlay bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 light-overlay"></div>
              </div>
              
              <div className="relative z-20 h-full p-10 flex flex-col justify-end">
                <div className="relative mb-8 flex items-center justify-center w-fit">
                  {/* Internal Glows */}
                  <div className="blue-focal-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-[1.5]"></div>
                  <div className="blue-focal-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 scale-75"></div>
                  
                  <div 
                    className="relative w-16 h-16 yellow-gradient rounded-2xl flex items-center justify-center text-blue-950 text-2xl shadow-[0_10px_25px_rgba(253,224,71,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10"
                  >
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-yellow-accent mb-4 text-shadow-premium tracking-widest">{service.title}</h4>
                <div className="space-y-4 relative z-50">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start text-white text-sm font-bold tracking-wider text-shadow-premium leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-3 mt-1.5 shadow-[0_0_12px_rgba(250,204,21,1)] shrink-0 z-50"></div>
                      <span className="relative z-50">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 border border-yellow-400/0 group-hover:border-yellow-400/20 rounded-[40px] transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;