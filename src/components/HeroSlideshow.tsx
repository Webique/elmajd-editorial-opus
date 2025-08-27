import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo1.png';
import hero1 from '@/assets/1.webp';
import hero2 from '@/assets/2.webp';
import hero3 from '@/assets/3.webp';
import hero4 from '@/assets/4.webp';
import hero5 from '@/assets/5.webp';
import hero6 from '@/assets/6.webp';
import hero7 from '@/assets/7.webp';
import hero8 from '@/assets/8.webp';
import hero9 from '@/assets/9.webp';

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9];

const HeroSlideshow: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('next');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection('prev');
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black">
      {/* Main slideshow */}
      <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100 translate-x-0' 
                : index === (currentIndex - 1 + images.length) % images.length && direction === 'prev'
                ? 'opacity-0 scale-95 -translate-x-full'
                : index === (currentIndex + 1) % images.length && direction === 'next'
                ? 'opacity-0 scale-95 translate-x-full'
                : 'opacity-0 scale-90 translate-x-0'
            }`}
          >
            {/* Background image with luxury effects */}
            <div
              className="w-full h-full bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Luxury overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
              
              {/* Removed problematic vignette effect that was causing gray line */}
              
              {/* Animated light rays */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - improved mobile positioning */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white/40 hover:text-white/80 transition-all duration-500 ease-out group disabled:opacity-30 disabled:cursor-not-allowed ${
            isRTL ? 'right-2 md:right-12' : 'left-2 md:left-12'
          }`}
        >
          <svg className={`w-6 h-6 md:w-8 md:h-8 transform transition-all duration-500 ease-out ${
            isRTL ? 'rotate-180 group-hover:scale-110' : 'group-hover:scale-110'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-white/40 hover:text-white/80 transition-all duration-500 ease-out group disabled:opacity-30 disabled:cursor-not-allowed ${
            isRTL ? 'left-2 md:left-12' : 'right-2 md:right-12'
          }`}
        >
          <svg className={`w-6 h-6 md:w-8 md:h-8 transform transition-all duration-500 ease-out ${
            isRTL ? 'rotate-180 group-hover:scale-110' : 'group-hover:scale-110'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Logo positioned at top center */}
      <div className="absolute top-4 md:top-24 left-1/2 transform -translate-x-1/2 z-30 hero-logo">
        <img 
          src={logo} 
          alt="ELMAJD GROUP" 
          className="h-[28rem] md:h-56 w-auto object-contain fade-in drop-shadow-lg"
          style={{ 
            animationDelay: '200ms'
          }}
        />
      </div>

      {/* Services text - separate div */}
      <div className="absolute left-1/2 bottom-16 md:bottom-20 transform -translate-x-1/2 z-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg" style={{ animationDelay: '400ms' }}>
          {language === 'ar' ? 'خدماتنا' : 'Our Services'}
        </h2>
      </div>
      
      {/* Glowing line - separate div below text */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20 text-center">
        <div className="w-px h-3 mx-auto relative">
          {/* Base line */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
          
          {/* Flowing light effect - starts from top, flows down */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/20 animate-flowing-light"></div>
          
          {/* Subtle glow */}
          <div className="absolute inset-0 w-3 h-full -left-1 bg-gradient-to-b from-white/20 via-white/10 to-transparent blur-sm"></div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-1000 ease-out"
          style={{ 
            width: `${((currentIndex + 1) / images.length) * 100}%`,
            transitionDuration: isTransitioning ? '0ms' : '8000ms'
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <div className="w-px h-12 bg-gradient-to-b from-white/90 via-white/70 to-transparent mx-auto animate-pulse"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        </div>
    </section>
  );
};

export default HeroSlideshow;