import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import hero1 from '@/assets/1.png';
import hero2 from '@/assets/2.png';
import hero3 from '@/assets/3.png';
import hero4 from '@/assets/4.png';
import hero5 from '@/assets/5.png';
import hero6 from '@/assets/6.png';
import hero7 from '@/assets/7.png';
import hero8 from '@/assets/8.png';

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

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
    }, 8000); // Slower, more luxurious timing

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
    <section className="relative w-full h-screen overflow-hidden bg-black">
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
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Luxury overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
              
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
              
              {/* Animated light rays */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`absolute w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-out group disabled:opacity-50 disabled:cursor-not-allowed ${
            isRTL ? 'right-8' : 'left-8'
          }`}
        >
          <svg className={`w-5 h-5 transform transition-transform duration-300 ${
            isRTL ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`absolute w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-out group disabled:opacity-50 disabled:cursor-not-allowed ${
            isRTL ? 'left-8' : 'right-8'
          }`}
        >
          <svg className={`w-5 h-5 transform transition-transform duration-300 ${
            isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
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