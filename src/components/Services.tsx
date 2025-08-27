import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/services';

const Services: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.service-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('slide-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-section-sm pb-16 bg-surface-soft">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Luxury Services Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            {/* Top luxury divider */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="w-2 h-2 bg-white/80 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
            
            {/* Main title */}
            <h2 className="font-display text-4xl md:text-6xl text-white font-light tracking-widest mb-6">
              {language === 'ar' ? 'الخدمات' : 'SERVICES'}
            </h2>
            
            {/* Bottom luxury divider */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="w-2 h-2 bg-white/80 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className={`space-y-16 text-center md:text-left ${isRTL ? 'md:text-right' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item opacity-0 transform translate-y-8 transition-all duration-600 ease-luxury"
            >
              <div className="space-y-4">
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                  {language === 'ar' ? service.titleAr : service.titleEn}
                </h3>
                <div className="space-y-2">
                  <p className={`text-white leading-relaxed text-base md:text-lg ${
                    isRTL ? 'font-body-ar' : 'font-body'
                  }`}>
                    {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom luxury divider */}
        <div className="text-center">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="w-2 h-2 bg-white/80 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;