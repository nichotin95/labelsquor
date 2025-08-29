import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Logo monochrome />
          
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#about" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
              About
            </a>
            <a href="#brand" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
              Brand Guidelines
            </a>
            <a href="#contact" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
              Contact
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="font-inter text-sm text-cool-gray">
            LabelSquor — the heartbeat of product labels.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
