import React, { useState } from 'react';
import { FaArrowRight, FaPlay, FaBuilding, FaCheckCircle, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import EmailCapture from './EmailCapture';
import ImagePlaceholder from './ImagePlaceholder';
import productsData from '../data/products.json';
import { getSquorColor, getSquorBgColor } from '../utils/squorHelpers';

interface HeroProps {
  mode: 'consumer' | 'retailer';
}

const Hero: React.FC<HeroProps> = ({ mode }) => {
  // Get product data from products.json for Hero display
  // Using a low-scoring product to demonstrate what LabelSquor reveals
  const HERO_PRODUCT_INDEX = 6; // Parle-G Glucose Biscuits (low-scoring product - Health: 11)
  const heroProduct = productsData[HERO_PRODUCT_INDEX];
  
  const content = mode === 'consumer' ? {
    badge: "Trusted by 100K+ consumers",
    headline: "Trust, explained.",
    subheader: "The global standard for product label trust — clarity for consumers, compliance for retailers.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "For Retailers & Brands",
    features: [
      { icon: "📱", text: "Scan any product label instantly" },
      { icon: "📊", text: "Get clear Health, Safety & Sustainability Squors" },
      { icon: "✓", text: "Evidence-backed explanations for every rating" }
    ]
  } : {
    badge: "Trusted by 500+ retailers",
    headline: "Compliance, simplified.",
    subheader: "Transform regulatory complexity into competitive advantage. Automate compliance monitoring and build consumer trust.",
    primaryCTA: "Partner With Us",
    secondaryCTA: "See Demo",
    features: [
      { icon: "🌐", text: "50+ global regulations covered" },
      { icon: "🔍", text: "Proactive gap identification" },
      { icon: "📈", text: "Trust widgets that boost conversions" }
    ]
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-gray/30 to-white pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            {/* Status Badge */}
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 mb-4 sm:mb-6 shadow-sm">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-success-green rounded-full animate-pulse mr-2 sm:mr-2.5" />
              <span className="text-xs sm:text-sm font-dm-sans font-medium text-coal-black">
                {content.badge}
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-coal-black mb-4 sm:mb-6 tracking-tight">
              {mode === 'consumer' ? (
                <>
                  <span className="text-trust-blue">Trust</span>
                  <span>, explained.</span>
                </>
              ) : (
                <>
                  <span className="text-trust-blue">Compliance</span>
                  <span>, simplified.</span>
                </>
              )}
            </h1>
            
            {/* Subheader */}
            <p className="font-dm-sans text-base sm:text-lg lg:text-xl text-cool-gray mb-6 sm:mb-10 leading-relaxed">
              {content.subheader}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="bg-trust-blue text-white font-outfit font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center group text-sm sm:text-base">
                {content.primaryCTA}
                <FaArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white border-2 border-cool-gray text-coal-black font-outfit font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:border-trust-blue hover:text-trust-blue transition-all duration-300 flex items-center justify-center group text-sm sm:text-base">
                {mode === 'consumer' ? <FaBuilding className="mr-2" /> : <FaPlay className="mr-2" />}
                {content.secondaryCTA}
              </button>
            </div>

            {/* Email Capture for Hero */}
            <EmailCapture variant="inline" />
          </div>

          {/* Visual Mockup */}
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              {/* Product Card with Complete Analysis */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                {/* Product Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-2">
                    <img
                      src={heroProduct.image}
                      alt={`${heroProduct.brand} ${heroProduct.name}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-dm-sans font-semibold text-trust-blue">{heroProduct.brand}</span>
                    <h4 className="text-base font-outfit font-bold text-coal-black">{heroProduct.name}</h4>
                    <span className="text-xs font-dm-sans text-gray-500">{heroProduct.pack_size} • {heroProduct.category}</span>
                  </div>
                </div>
                
                {/* All 4 Squors Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Health Squor */}
                  <div className={`border-2 rounded-xl p-3 ${getSquorBgColor(heroProduct.scores.health)}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-dm-sans text-xs text-gray-600">Health</span>
                      <FaCheckCircle className={`text-xs ${getSquorColor(heroProduct.scores.health)}`} />
                    </div>
                    <div className={`font-space-grotesk font-bold text-2xl ${getSquorColor(heroProduct.scores.health)}`}>
                      {heroProduct.scores.health}
                    </div>
                  </div>
                  
                  {/* Safety Squor */}
                  <div className={`border-2 rounded-xl p-3 ${getSquorBgColor(heroProduct.scores.safety)}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-dm-sans text-xs text-gray-600">Safety</span>
                      <FaShieldAlt className={`text-xs ${getSquorColor(heroProduct.scores.safety)}`} />
                    </div>
                    <div className={`font-space-grotesk font-bold text-2xl ${getSquorColor(heroProduct.scores.safety)}`}>
                      {heroProduct.scores.safety}
                    </div>
                  </div>
                  
                  {/* Sustainability Squor */}
                  <div className={`border-2 rounded-xl p-3 ${getSquorBgColor(heroProduct.scores.sustainability)}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-dm-sans text-xs text-gray-600">Sustainability</span>
                      <FaLeaf className={`text-xs ${getSquorColor(heroProduct.scores.sustainability)}`} />
                    </div>
                    <div className={`font-space-grotesk font-bold text-2xl ${getSquorColor(heroProduct.scores.sustainability)}`}>
                      {heroProduct.scores.sustainability}
                    </div>
                  </div>
                  
                  {/* Verification Squor */}
                  <div className={`border-2 rounded-xl p-3 ${getSquorBgColor(heroProduct.scores.verification)}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-dm-sans text-xs text-gray-600">Verification</span>
                      <FaCheckCircle className={`text-xs ${getSquorColor(heroProduct.scores.verification)}`} />
                    </div>
                    <div className={`font-space-grotesk font-bold text-2xl ${getSquorColor(heroProduct.scores.verification)}`}>
                      {heroProduct.scores.verification}
                    </div>
                  </div>
                </div>

                {/* Key Insights from Why Card and Flags */}
                <div className="bg-gradient-to-br from-light-gray to-gray-50 rounded-lg p-3">
                  <h4 className="font-outfit font-semibold text-xs text-coal-black mb-2">Key Insights</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {heroProduct.why_card.slice(0, 2).map((insight, index) => {
                      // Determine if insight is positive or negative
                      const isNegative = insight.toLowerCase().includes('high') && 
                                        (insight.toLowerCase().includes('sugar') || 
                                         insight.toLowerCase().includes('sodium') || 
                                         insight.toLowerCase().includes('saturated') ||
                                         insight.toLowerCase().includes('refined'));
                      const isPositive = insight.toLowerCase().includes('fiber') || 
                                        insight.toLowerCase().includes('protein');
                      
                      return (
                        <div key={index} className="flex items-center">
                          <span className={`mr-1 ${isNegative ? 'text-red-600' : isPositive ? 'text-green-600' : 'text-amber-600'}`}>
                            {isNegative ? '✗' : isPositive ? '✓' : '•'}
                          </span>
                          <span className="font-dm-sans text-gray-600 truncate">{insight}</span>
                        </div>
                      );
                    })}
                    {heroProduct.flags.slice(0, 2).map((flag, index) => {
                      const isPositive = flag.includes('FSSAI') || flag.includes('verified') || flag.includes('Organic');
                      return (
                        <div key={index + 2} className="flex items-center">
                          <span className={`mr-1 ${isPositive ? 'text-green-600' : 'text-amber-600'}`}>
                            {isPositive ? '✓' : '•'}
                          </span>
                          <span className="font-dm-sans text-gray-600 truncate">{flag}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-float">
                <span className="font-dm-sans text-xs font-semibold text-success-green">Verified</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg animate-float animation-delay-200">
                <span className="font-dm-sans text-xs font-semibold text-trust-blue">Evidence-based</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-First Feature Pills */}
        <div className="mt-12 lg:mt-16">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center flex-wrap">
            {content.features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white border border-gray-200 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-base sm:text-lg mr-2">{feature.icon}</span>
                <span className="text-xs sm:text-sm font-dm-sans font-medium text-coal-black">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;