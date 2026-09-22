
import React, { useState } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS, SERVICES } from '../constants';

const ContactForm: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry: ${formData.service} - ${formData.name}`;
    const body = `Full Name: ${formData.name}\nMobile Number: ${formData.phone}\nRequested Service: ${formData.service}\n\nMessage/Issue Description:\n${formData.message}\n\n---\nSent via Premier HeatFix Web App`;
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', phone: '', service: SERVICES[0].title, message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#020617] pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[10px] font-black text-yellow-accent uppercase tracking-[0.4em] mb-3">Contact</h2>
          <h3 className="font-heading text-3xl text-white">Secure Your Quote</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              aria-label={`Call Mariusz at ${PHONE_NUMBER}`}
              rel="noopener"
              className="flex items-center p-5 bg-blue-950/20 rounded-2xl border border-blue-400/10 active:bg-blue-900/30 transition-colors"
            >
              <div className="w-10 h-10 bg-yellow-400/10 text-yellow-accent rounded-xl flex items-center justify-center mr-4" aria-hidden="true">
                <i className="fas fa-phone"></i>
              </div>
              <span className="font-bold text-white">{PHONE_NUMBER}</span>
            </a>
            <a 
              href={`mailto:${EMAIL_ADDRESS}`} 
              aria-label={`Email us at ${EMAIL_ADDRESS}`}
              rel="noopener"
              className="flex items-center p-5 bg-blue-950/20 rounded-2xl border border-blue-400/10 active:bg-blue-900/30 transition-colors"
            >
              <div className="w-10 h-10 bg-yellow-400/10 text-yellow-accent rounded-xl flex items-center justify-center mr-4" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="font-bold text-white truncate text-sm">{EMAIL_ADDRESS}</span>
            </a>
          </div>

          <div className="bg-blue-950/20 p-6 rounded-[32px] border border-blue-400/10">
            {isSent ? (
              <div className="py-12 text-center" role="alert" aria-live="polite">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" aria-hidden="true">
                  <i className="fas fa-check"></i>
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Prepared</h4>
                <p className="text-blue-100/70 text-sm mt-2">Opening your email app. Mariusz will call you shortly after receiving the request.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Quote Inquiry Form">
                <input 
                  type="text" 
                  name="name"
                  aria-label="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full h-[56px] bg-blue-950/40 border border-blue-400/20 rounded-2xl px-5 text-white placeholder-blue-300/50 focus:border-yellow-400 outline-none"
                  placeholder="Full name"
                />
                <input 
                  type="tel" 
                  name="phone"
                  aria-label="Your Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="w-full h-[56px] bg-blue-950/40 border border-blue-400/20 rounded-2xl px-5 text-white placeholder-blue-300/50 focus:border-yellow-400 outline-none"
                  placeholder="Mobile number"
                />
                <div className="relative">
                  <select 
                    name="service"
                    aria-label="Select Desired Service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-[56px] bg-blue-950/40 border border-blue-400/20 rounded-2xl px-5 text-white focus:border-yellow-400 outline-none appearance-none cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#020617]">{s.title}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400" aria-hidden="true">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
                <textarea 
                  name="message"
                  aria-label="Detailed Message or Issue Description"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} 
                  className="w-full bg-blue-950/40 border border-blue-400/20 rounded-2xl px-5 py-4 text-white placeholder-blue-300/50 focus:border-yellow-400 outline-none"
                  placeholder="Describe your issue..."
                ></textarea>
                <button 
                  type="submit" 
                  aria-label="Request a call back for a free quote"
                  className="w-full gold-button-gradient text-white h-[56px] flex items-center justify-center rounded-2xl font-black tracking-wide shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Call me back
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;