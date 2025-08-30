import React from 'react';
import { FaUsers, FaBuilding } from 'react-icons/fa';

interface ModeSwitchProps {
  mode: 'consumer' | 'retailer';
  onModeChange: (mode: 'consumer' | 'retailer') => void;
}

const ModeSwitch: React.FC<ModeSwitchProps> = ({ mode, onModeChange }) => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-light-gray/50 via-white to-light-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-coal-black mb-2">
            Choose Your Experience
          </h2>
          <p className="font-dm-sans text-cool-gray">
            Select your role to see relevant features and information
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onModeChange('consumer')}
                className={`relative rounded-xl py-6 px-4 transition-all duration-300 ${
                  mode === 'consumer'
                    ? 'bg-trust-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center">
                  <FaUsers className={`text-3xl mb-3 ${
                    mode === 'consumer' ? 'text-white' : 'text-trust-blue'
                  }`} />
                  <h3 className={`font-outfit font-bold text-lg mb-1 ${
                    mode === 'consumer' ? 'text-white' : 'text-coal-black'
                  }`}>
                    For Consumers
                  </h3>
                  <p className={`font-dm-sans text-sm ${
                    mode === 'consumer' ? 'text-white/90' : 'text-cool-gray'
                  }`}>
                    Trust, explained
                  </p>
                  <div className={`mt-3 text-xs font-inter ${
                    mode === 'consumer' ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    • Clear health scores<br/>
                    • Safety verification<br/>
                    • Why cards
                  </div>
                </div>
                {mode === 'consumer' && (
                  <div className="absolute top-3 right-3 bg-white/20 rounded-full px-2 py-1">
                    <span className="text-xs font-semibold">Active</span>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => onModeChange('retailer')}
                className={`relative rounded-xl py-6 px-4 transition-all duration-300 ${
                  mode === 'retailer'
                    ? 'bg-trust-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center">
                  <FaBuilding className={`text-3xl mb-3 ${
                    mode === 'retailer' ? 'text-white' : 'text-trust-blue'
                  }`} />
                  <h3 className={`font-outfit font-bold text-lg mb-1 ${
                    mode === 'retailer' ? 'text-white' : 'text-coal-black'
                  }`}>
                    For Retailers
                  </h3>
                  <p className={`font-dm-sans text-sm ${
                    mode === 'retailer' ? 'text-white/90' : 'text-cool-gray'
                  }`}>
                    Compliance, simplified
                  </p>
                  <div className={`mt-3 text-xs font-inter ${
                    mode === 'retailer' ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    • Automated checks<br/>
                    • Label coaching<br/>
                    • PDP widgets
                  </div>
                </div>
                {mode === 'retailer' && (
                  <div className="absolute top-3 right-3 bg-white/20 rounded-full px-2 py-1">
                    <span className="text-xs font-semibold">Active</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="font-dm-sans text-sm text-cool-gray">
            Currently viewing: <span className="font-semibold text-trust-blue">
              {mode === 'consumer' ? 'Consumer' : 'Retailer'} content
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModeSwitch;
