import React from 'react';
import logo from '@/assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 md:py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="ELMAJD GROUP" 
            className="h-12 md:h-16 w-auto fade-in"
            style={{ animationDelay: '200ms' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;