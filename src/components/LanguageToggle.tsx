import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center space-x-1 text-xs font-light">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 transition-all duration-300 ease-luxury ${
            language === 'en' 
              ? 'text-white opacity-100' 
              : 'text-white/50 opacity-50 hover:opacity-75'
          }`}
        >
          EN
        </button>
        <span className="text-white/30 opacity-30">/</span>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-2 py-1 transition-all duration-300 ease-luxury ${
            language === 'ar' 
              ? 'text-white opacity-100' 
              : 'text-white/50 opacity-50 hover:opacity-75'
          }`}
        >
          AR
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;