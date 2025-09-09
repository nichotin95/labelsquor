import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

interface NavigationProps {
  mode: 'consumer' | 'retailer';
  onModeChange: (mode: 'consumer' | 'retailer') => void;
}

const Navigation: React.FC<NavigationProps> = ({ mode, onModeChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, newMode?: 'consumer' | 'retailer') => {
    if (newMode) {
      onModeChange(newMode);
      // Small delay to allow mode change before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = mode === 'consumer' ? [
    { 
      name: 'Demo', 
      href: '#interactive-demo',
      onClick: () => handleNavClick('#interactive-demo')
    },
    { 
      name: 'How It Works', 
      href: '#how-it-works',
      onClick: () => handleNavClick('#how-it-works')
    },
    { 
      name: 'Features', 
      href: '#consumers',
      onClick: () => handleNavClick('#consumers')
    },
    { 
      name: 'Trust & Safety', 
      href: '#about',
      onClick: () => handleNavClick('#about')
    },
    { 
      name: 'For Retailers', 
      href: '#retailers',
      onClick: () => {
        onModeChange('retailer');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  ] : [
    { 
      name: 'How It Works', 
      href: '#how-it-works',
      onClick: () => handleNavClick('#how-it-works')
    },
    { 
      name: 'Solutions', 
      href: '#retailers',
      onClick: () => handleNavClick('#retailers')
    },
    { 
      name: 'Analytics', 
      href: '#analytics',
      onClick: () => handleNavClick('#analytics')
    },
    { 
      name: 'Case Studies', 
      href: '#case-studies',
      onClick: () => handleNavClick('#case-studies')
    },
    { 
      name: 'For Consumers', 
      href: '#consumers',
      onClick: () => {
        onModeChange('consumer');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
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
              <button
                key={link.name}
                onClick={link.onClick}
                className={`font-dm-sans text-cool-gray hover:text-coal-black transition-colors text-sm font-medium ${
                  link.name === 'For Consumers' || link.name === 'For Retailers'
                    ? 'text-trust-blue font-semibold'
                    : ''
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mode Indicator Badge - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-light-gray px-3 py-1.5 rounded-full">
              <span className="font-dm-sans text-xs font-medium text-cool-gray">
                Viewing: <span className="text-trust-blue font-semibold">
                  {mode === 'consumer' ? 'Consumer' : 'Retailer'} Mode
                </span>
              </span>
            </div>
            
            {/* Desktop CTA */}
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
            {/* Mode Indicator - Mobile */}
            <div className="mx-4 mb-3 bg-light-gray px-3 py-2 rounded-lg">
              <span className="font-dm-sans text-xs font-medium text-cool-gray">
                Viewing: <span className="text-trust-blue font-semibold">
                  {mode === 'consumer' ? 'Consumer' : 'Retailer'} Mode
                </span>
              </span>
            </div>
            
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    link.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-base font-dm-sans text-coal-black hover:bg-gray-50 text-left ${
                    link.name === 'For Consumers' || link.name === 'For Retailers'
                      ? 'bg-trust-blue/10 text-trust-blue font-semibold'
                      : ''
                  }`}
                >
                  {link.name}
                </button>
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