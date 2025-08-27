import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Slogan: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section className="pt-8 pb-8 bg-surface flex items-center justify-center min-h-[40vh]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Subtle divider */}
          <div className="w-24 h-px bg-divider/15 mx-auto" />
          
          <div className="space-y-6 text-center">
            {language === 'en' ? (
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight tracking-wide slide-up">
                WE ACHIEVE YOUR VISION<br />
                WITH ARCHITECTURAL CREATIVITY
              </h1>
            ) : (
              <h1 className="font-display-ar text-4xl md:text-6xl text-white leading-relaxed slide-up">
                نحقق رؤيتك بالإبداع المعماري
              </h1>
            )}
          </div>
          
          {/* Subtle divider */}
          <div className="w-24 h-px bg-divider/15 mx-auto slide-up" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </section>
  );
};

export default Slogan;