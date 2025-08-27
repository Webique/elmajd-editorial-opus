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
    <section ref={sectionRef} className="pt-8 pb-16 bg-surface-soft">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Services Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            {/* Removed Services title */}
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
                  <p className={`text-white leading-relaxed text-xs md:text-sm ${
                    isRTL ? 'font-body-ar' : 'font-body'
                  }`}>
                    {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Booking Section */}
        <div className="text-center mt-20 mb-16">
          <div className="inline-block">
            {/* Top luxury divider - horizontal line */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
            
            {/* Consultation title */}
            <h3 className="font-display text-2xl md:text-3xl text-white font-light tracking-wide mb-8">
              {language === 'ar' ? 'احجز استشارة' : 'Book a Consultation'}
            </h3>
            
            {/* Consultation button */}
            <a
              href="https://wa.me/966533526423"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-luxury group"
            >
              <span className="text-white font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">
                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
              </span>
            </a>
            
            {/* Bottom luxury divider - horizontal line */}
            <div className="flex items-center justify-center mt-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Services;