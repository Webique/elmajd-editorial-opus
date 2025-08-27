import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Slogan: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section className="py-section bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Subtle divider */}
          <div className="w-24 h-px bg-divider/15 mx-auto" />
          
          <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            {language === 'en' ? (
              <>
                <h1 className="font-display text-4xl md:text-6xl text-brand-green leading-tight tracking-wide slide-up">
                  WE ACHIEVE YOUR VISION<br />
                  WITH ARCHITECTURAL CREATIVITY
                </h1>
                <p className="font-display-ar text-3xl md:text-5xl text-brand-green/80 leading-relaxed slide-up" style={{ animationDelay: '200ms' }}>
                  نحقق رؤيتك بالإبداع المعماري
                </p>
              </>
            ) : (
              <>
                <h1 className="font-display-ar text-4xl md:text-6xl text-brand-green leading-relaxed slide-up">
                  نحقق رؤيتك بالإبداع المعماري
                </h1>
                <p className="font-display text-3xl md:text-5xl text-brand-green/80 leading-tight tracking-wide slide-up" style={{ animationDelay: '200ms' }}>
                  WE ACHIEVE YOUR VISION<br />
                  WITH ARCHITECTURAL CREATIVITY
                </p>
              </>
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