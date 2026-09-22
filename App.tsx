
import React from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <TopBar />
      <main className="no-scrollbar">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default App;
