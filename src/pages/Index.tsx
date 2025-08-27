import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSlideshow from '@/components/HeroSlideshow';
import Slogan from '@/components/Slogan';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black overflow-x-hidden">
        <Header />
        <main>
          <HeroSlideshow />
          <Slogan />
          <Services />
          <Contact />
        </main>
        <LanguageToggle />
      </div>
    </LanguageProvider>
  );
};

export default Index;
