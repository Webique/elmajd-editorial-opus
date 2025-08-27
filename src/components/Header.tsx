import React from 'react';
import logo from '@/assets/logo1.png';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 md:py-6 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="ELMAJD GROUP" 
            className="h-24 md:h-32 w-auto fade-in"
            style={{ animationDelay: '200ms' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;