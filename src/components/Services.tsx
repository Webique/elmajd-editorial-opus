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
    <section ref={sectionRef} className="py-section bg-surface-soft">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className={`space-y-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item opacity-0 transform translate-y-8 transition-all duration-600 ease-luxury"
            >
              <div className="space-y-4">
                <h3 className="font-display text-2xl md:text-3xl text-brand-green leading-tight">
                  {isRTL ? (
                    <>
                      {service.titleAr}
                      <span className="text-text-muted font-body text-lg md:text-xl mx-3">/</span>
                      {service.titleEn}
                    </>
                  ) : (
                    <>
                      {service.titleEn}
                      <span className="text-text-muted font-body text-lg md:text-xl mx-3">/</span>
                      {service.titleAr}
                    </>
                  )}
                </h3>
                <div className="space-y-2">
                  <p className={`text-text-secondary leading-relaxed text-base md:text-lg ${
                    isRTL ? 'font-body-ar' : 'font-body'
                  }`}>
                    {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </p>
                  {language !== 'ar' && (
                    <p className="font-body-ar text-text-muted leading-relaxed text-sm md:text-base opacity-70">
                      {service.descriptionAr}
                    </p>
                  )}
                  {language === 'ar' && (
                    <p className="font-body text-text-muted leading-relaxed text-sm md:text-base opacity-70">
                      {service.descriptionEn}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;