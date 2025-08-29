import React from 'react';
import Logo from './Logo';
import ModeToggle from './ModeToggle';

interface HeaderProps {
  mode: 'consumer' | 'retailer';
  onModeChange: (mode: 'consumer' | 'retailer') => void;
}

const Header: React.FC<HeaderProps> = ({ mode, onModeChange }) => {
  return (
    <header className="w-full py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-8">
          <ModeToggle mode={mode} onModeChange={onModeChange} />
          <nav className="hidden md:flex items-center space-x-6">
            {mode === 'consumer' ? (
              <>
                <a href="#squor-types" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
                  Squor Types
                </a>
                <a href="#how-it-works" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
                  How It Works
                </a>
              </>
            ) : (
              <>
                <a href="#compliance" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
                  Compliance
                </a>
                <a href="#integration" className="font-inter text-cool-gray hover:text-coal-black transition-colors">
                  Integration
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
