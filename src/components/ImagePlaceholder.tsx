import React from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
  placeholderText?: string;
  width?: number;
  height?: number;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt = 'Product image',
  className = '',
  placeholderText = 'Product Image',
  width = 300,
  height = 400,
  rounded = 'lg'
}) => {
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full'
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover ${roundedClasses[rounded]} ${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <div 
      className={`bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center ${roundedClasses[rounded]} ${className}`}
      style={{ width, height }}
    >
      <FaImage className="text-4xl text-gray-400 mb-2" />
      <p className="text-xs text-gray-500 font-dm-sans">{placeholderText}</p>
      <p className="text-xs text-gray-400 mt-1">
        {width} × {height}
      </p>
    </div>
  );
};

export default ImagePlaceholder;
