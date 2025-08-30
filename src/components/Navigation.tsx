import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

interface NavigationProps {
  mode: 'consumer' | 'retailer';
  onModeChange: (mode: 'consumer' | 'retailer') => void;
}

const Navigation: React.FC<NavigationProps> = ({ mode, onModeChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Consumers', href: '#consumers', onClick: () => onModeChange('consumer') },
    { name: 'Retailers', href: '#retailers', onClick: () => onModeChange('retailer') },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo variant="auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="font-dm-sans text-cool-gray hover:text-coal-black transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-trust-blue text-white px-6 py-3 rounded-full font-outfit font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slideDown">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    link.onClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg text-base font-dm-sans text-coal-black hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-trust-blue text-white px-6 py-3 rounded-full font-outfit font-semibold text-sm hover:bg-blue-700 transition-colors mx-4">
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;