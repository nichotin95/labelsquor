import React from 'react';

interface LogoProps {
  variant?: 'mobile' | 'desktop' | 'auto';
  theme?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'auto', theme = 'light', className = '' }) => {
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = variant === 'mobile' || (variant === 'auto' && windowWidth < 768);
  const isDark = theme === 'dark';

  // For dark theme, use text-only version
  if (isDark) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="flex items-baseline">
          <span className={`font-outfit font-bold ${
            isMobile ? 'text-2xl' : 'text-2xl lg:text-3xl'
          } text-white tracking-tight`}>
            Label
          </span>
          <span className={`font-outfit font-bold ${
            isMobile ? 'text-2xl' : 'text-2xl lg:text-3xl'
          } text-blue-400`}>
            Squor
          </span>
        </div>
      </div>
    );
  }

  // Light theme with logo image
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon/Image */}
      <div className="flex items-center">
        {/* Try PNG first, fallback to SVG, then to styled div */}
        <picture>
          <source srcSet="/logo_ls.png" type="image/png" />
          <source srcSet="/logo_simple.svg" type="image/svg+xml" />
          <img
            src="/logo_ls.png"
            alt="LabelSquor"
            className={`${
              isMobile ? 'w-20 h-20' : 'w-20 h-20 lg:w-24 lg:h-24'
            } object-contain`}
            onError={(e) => {
              // Fallback to a simple colored square with initials
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = `${
                isMobile ? 'w-20 h-20' : 'w-20 h-20 lg:w-24 lg:h-24'
              } bg-blue-600 rounded-lg flex items-center justify-center shadow-sm`;
              fallback.innerHTML = `<span class="text-white font-bold ${
                isMobile ? 'text-2xl' : 'text-2xl lg:text-3xl'
              }">LS</span>`;
              img.parentNode?.replaceChild(fallback, img);
            }}
          />
        </picture>
        
        {/* Text Logo */}
        <div className={`flex items-baseline ${isMobile ? 'ml-2.5' : 'ml-3 lg:ml-4'}`}>
          <span className={`font-outfit font-bold ${
            isMobile ? 'text-2xl' : 'text-2xl lg:text-3xl'
          } text-gray-900 tracking-tight`}>
            Label
          </span>
          <span className={`font-outfit font-bold ${
            isMobile ? 'text-2xl' : 'text-2xl lg:text-3xl'
          } text-blue-600`}>
            Squor
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;