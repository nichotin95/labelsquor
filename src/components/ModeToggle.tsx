import React from 'react';
import { Users, Building2 } from 'lucide-react';

interface ModeToggleProps {
  mode: 'consumer' | 'retailer';
  onModeChange: (mode: 'consumer' | 'retailer') => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onModeChange('consumer')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
          mode === 'consumer'
            ? 'bg-white text-trust-blue shadow-sm'
            : 'text-cool-gray hover:text-coal-black'
        }`}
      >
        <Users className="w-4 h-4" />
        <span className="font-dm-sans font-medium text-sm">Consumers</span>
      </button>
      <button
        onClick={() => onModeChange('retailer')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
          mode === 'retailer'
            ? 'bg-white text-trust-blue shadow-sm'
            : 'text-cool-gray hover:text-coal-black'
        }`}
      >
        <Building2 className="w-4 h-4" />
        <span className="font-dm-sans font-medium text-sm">Retailers</span>
      </button>
    </div>
  );
};

export default ModeToggle;
