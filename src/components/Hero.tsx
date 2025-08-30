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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 mb-4 sm:mb-6 shadow-sm animate-fadeIn">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse mr-2 sm:mr-2.5" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              {content.badge}
            </span>
          </div>
          
          {/* Headline - Consistent across devices */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight animate-slideUp">
            {mode === 'consumer' ? (
              <>
                <span className="text-blue-600">Trust</span>
                <span className="text-gray-900">, explained.</span>
              </>
            ) : (
              <>
                <span className="text-blue-600">Compliance</span>
                <span className="text-gray-900">, simplified.</span>
              </>
            )}
          </h1>
          
          {/* Subheader */}
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 animate-fadeIn animation-delay-200">
            {content.subheader}
          </p>
          
          {/* Mobile-First Feature Pills */}
          <div className="mb-6 sm:mb-10">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center flex-wrap">
              {content.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white border border-gray-200 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow animate-slideUp"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <span className="text-base sm:text-lg mr-2">{feature.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fadeIn animation-delay-400">
            <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center group text-sm sm:text-base">
              {content.primaryCTA}
              <FaArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto bg-white border-2 border-gray-300 text-gray-800 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
              <FaPlay className="mr-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              {content.secondaryCTA}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
