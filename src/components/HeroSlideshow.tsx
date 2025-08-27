import React, { useState, useEffect } from 'react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import hero6 from '@/assets/hero-6.jpg';

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-luxury ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: `url(${image})`,
              animationDelay: index === currentIndex ? '0ms' : '6000ms',
              animationPlayState: index === currentIndex ? 'running' : 'paused'
            }}
          />
          {/* Subtle overlay for tonal consistency */}
          <div className="absolute inset-0 bg-white/5" />
        </div>
      ))}
    </section>
  );
};

export default HeroSlideshow;