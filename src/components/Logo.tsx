import React from 'react';

interface LogoProps {
  className?: string;
  monochrome?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', monochrome = false }) => {
  const textColor = monochrome ? 'text-cool-gray' : 'text-coal-black';
  const primaryColor = monochrome ? '#6B7280' : '#2A66FF';
  const squorColor = monochrome ? '#6B7280' : '#2A66FF';
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo SVG - Based on actual LabelSquor design */}
      <div className="relative">
        <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Barcode pattern - matching the actual design */}
          {/* Left side bars */}
          <rect x="4" y="0" width="3" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="8" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="11" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          
          {/* Center-left bars */}
          <rect x="16" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="20" y="0" width="3" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="25" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="28" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          
          {/* Center-right bars */}
          <rect x="33" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="37" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="41" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          
          {/* Right side bars */}
          <rect x="46" y="0" width="2" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="50" y="0" width="3" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          <rect x="55" y="0" width="3" height="40" fill={monochrome ? '#6B7280' : '#000000'} />
          
          {/* Heartbeat/Pulse line - matching the actual design */}
          <path 
            d="M2 20 L10 20 L14 20 L18 10 L22 30 L26 15 L30 25 L34 20 L38 20 L42 20 L46 20 L50 20 L54 20 L58 20 L62 20" 
            stroke={primaryColor} 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Blue star - 4-pointed star in upper right */}
          <path 
            d="M52 8 L53 10 L55 11 L53 12 L52 14 L51 12 L49 11 L51 10 Z" 
            fill={primaryColor}
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex items-baseline">
        <span className={`font-outfit font-bold text-xl ${textColor}`}>
          Label
        </span>
        <span className={`font-outfit font-bold text-xl ${monochrome ? 'text-cool-gray' : 'text-trust-blue'}`}>
          Squor
        </span>
      </div>
    </div>
  );
};

export default Logo;
