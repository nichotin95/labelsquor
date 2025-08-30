import React from 'react';

interface LogoProps {
  variant?: 'mobile' | 'desktop' | 'auto';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'auto', className = '' }) => {
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = variant === 'mobile' || (variant === 'auto' && windowWidth < 768);

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
              isMobile ? 'w-9 h-9' : 'w-11 h-11 lg:w-12 lg:h-12'
            } object-contain`}
            onError={(e) => {
              // Fallback to a simple colored square with initials
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = `${
                isMobile ? 'w-9 h-9' : 'w-11 h-11 lg:w-12 lg:h-12'
              } bg-blue-600 rounded-lg flex items-center justify-center shadow-sm`;
              fallback.innerHTML = `<span class="text-white font-bold ${
                isMobile ? 'text-sm' : 'text-base lg:text-lg'
              }">LS</span>`;
              img.parentNode?.replaceChild(fallback, img);
            }}
          />
        </picture>
        
        {/* Text Logo */}
        <div className={`flex items-baseline ${isMobile ? 'ml-2' : 'ml-3'}`}>
          <span className={`font-outfit font-bold ${
            isMobile ? 'text-lg' : 'text-xl lg:text-2xl'
          } text-gray-900 tracking-tight`}>
            Label
          </span>
          <span className={`font-outfit font-bold ${
            isMobile ? 'text-lg' : 'text-xl lg:text-2xl'
          } text-blue-600`}>
            Squor
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;