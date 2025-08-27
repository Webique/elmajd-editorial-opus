import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const contactInfo = [
    {
      labelEn: "Phone",
      labelAr: "الهاتف",
      value: "+966 53 352 6423",
      href: "tel:+966533526423"
    },
    {
      labelEn: "Instagram",
      labelAr: "انستغرام",
      value: "elmajd.sa",
      href: "https://instagram.com/elmajd.sa"
    },
    {
      labelEn: "Snapchat",
      labelAr: "سناب شات",
      value: "elmajd.sa",
      href: "https://snapchat.com/add/elmajd.sa"
    }
  ];

  return (
    <footer className="py-section bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Subtle divider */}
        <div className="w-full h-px bg-white/20 mb-16" />
        
        <div className="space-y-12 text-center">
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((contact, index) => (
              <div key={index} className="space-y-2 slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Micro label - kept minimal for mystery */}
                <div className="text-white/70 text-xs font-light uppercase tracking-wider opacity-50">
                  {language === 'ar' ? contact.labelAr : contact.labelEn}
                </div>
                <a
                  href={contact.href}
                  className={`block text-white text-lg md:text-xl font-light transition-opacity duration-300 ease-luxury hover:opacity-75 ${
                    contact.labelEn === "Phone" ? "rtl:ltr" : ""
                  }`}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  dir={contact.labelEn === "Phone" ? "ltr" : undefined}
                  style={contact.labelEn === "Phone" ? { direction: 'ltr', textAlign: 'center' } : {}}
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
          
          {/* Company name - understated */}
          <div className="text-center pt-8">
            <div className="text-white/70 text-sm font-light tracking-wide opacity-60 slide-up" style={{ animationDelay: '400ms' }}>
              ELMAJD GROUP
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;