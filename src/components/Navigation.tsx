import React, { useState } from 'react';
import { FaHeart, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

interface NavigationProps {
  mode: 'consumer' | 'retailer';
  onModeChange: (mode: 'consumer' | 'retailer') => void;
}

const Navigation: React.FC<NavigationProps> = ({ mode, onModeChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo variant="auto" />

          {/* Desktop Mode Toggle */}
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
            <button
              onClick={() => onModeChange('consumer')}
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === 'consumer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaHeart className="w-4 h-4 mr-2" />
              <span>For Consumers</span>
            </button>
            <button
              onClick={() => onModeChange('retailer')}
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === 'retailer'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaChartBar className="w-4 h-4 mr-2" />
              <span>For Retailers</span>
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
            <div className="space-y-2">
              <button
                onClick={() => {
                  onModeChange('consumer');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all ${
                  mode === 'consumer'
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FaHeart className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-medium">For Consumers</div>
                  <div className="text-xs opacity-75">Trust, explained</div>
                </div>
              </button>
              <button
                onClick={() => {
                  onModeChange('retailer');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all ${
                  mode === 'retailer'
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FaChartBar className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-medium">For Retailers</div>
                  <div className="text-xs opacity-75">Compliance, simplified</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
