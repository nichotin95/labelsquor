import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

interface HeroProps {
  mode: 'consumer' | 'retailer';
}

const Hero: React.FC<HeroProps> = ({ mode }) => {
  const content = mode === 'consumer' ? {
    badge: "Trusted by 100K+ consumers",
    headline: "Trust, explained.",
    subheader: "Know exactly what's in your products with instant Health, Safety, Sustainability, and Verification scores.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "Watch Demo",
    features: [
      { icon: "📱", text: "Scan any product label instantly" },
      { icon: "📊", text: "Get clear Health, Safety & Sustainability scores" },
      { icon: "✓", text: "Evidence-backed explanations for every rating" }
    ]
  } : {
    badge: "Trusted by 500+ retailers",
    headline: "Compliance, simplified.",
    subheader: "Transform regulatory complexity into competitive advantage. Automate compliance monitoring and build consumer trust.",
    primaryCTA: "Start Free Trial",
    secondaryCTA: "Book a Demo",
    features: [
      { icon: "🌐", text: "50+ global regulations covered" },
      { icon: "🔍", text: "Proactive gap identification" },
      { icon: "📈", text: "Trust widgets that boost conversions" }
    ]
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 shadow-sm animate-fadeIn">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse mr-2 sm:mr-3" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              {content.badge}
            </span>
          </div>
          
          {/* Headline - Mobile Optimized */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight animate-slideUp">
            <span className="block sm:inline text-blue-600">
              {content.headline.split(',')[0]}
            </span>
            {content.headline.includes(',') && (
              <>
                <span className="hidden sm:inline">,</span>
                <br className="sm:hidden" />
                <span className="block sm:inline text-gray-900">
                  {content.headline.split(',')[1]}
                </span>
              </>
            )}
          </h1>
          
          {/* Subheader */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 animate-fadeIn animation-delay-200">
            {content.subheader}
          </p>
          
          {/* Mobile-First Feature Pills */}
          <div className="mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap">
              {content.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white border border-gray-200 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-sm hover:shadow-md transition-shadow animate-slideUp"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">{feature.icon}</span>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn animation-delay-400">
            <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center group">
              {content.primaryCTA}
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto bg-white border-2 border-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center group">
              <FaPlay className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              {content.secondaryCTA}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
