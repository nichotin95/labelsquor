import React, { useState } from 'react';
import { FaArrowRight, FaPlay, FaBuilding, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import EmailCapture from './EmailCapture';

interface HeroProps {
  mode: 'consumer' | 'retailer';
}

const Hero: React.FC<HeroProps> = ({ mode }) => {
  const content = mode === 'consumer' ? {
    badge: "Trusted by 100K+ consumers",
    headline: "Trust, explained.",
    subheader: "The global standard for product label trust — clarity for consumers, compliance for retailers.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "For Retailers & Brands",
    features: [
      { icon: "📱", text: "Scan any product label instantly" },
      { icon: "📊", text: "Get clear Health, Safety & Sustainability scores" },
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
              {/* Product Card with Health Squor */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-400 font-dm-sans">Product Image</span>
                </div>
                
                {/* Health Squor Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-outfit font-bold text-lg text-coal-black">Health Squor</h3>
                    <div className="flex items-center mt-1">
                      <span className="font-space-grotesk font-bold text-3xl text-trust-blue">74</span>
                      <span className="font-space-grotesk text-xl text-cool-gray ml-1">/100</span>
                    </div>
                  </div>
                  <div className="bg-success-green/10 p-3 rounded-full">
                    <FaCheckCircle className="text-success-green text-2xl" />
                  </div>
                </div>

                {/* Why Card */}
                <div className="bg-light-gray rounded-lg p-4">
                  <h4 className="font-outfit font-semibold text-sm text-coal-black mb-2">Why this score?</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-success-green mr-2">+</span>
                      <span className="text-xs font-dm-sans text-cool-gray">High protein content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warning-amber mr-2">-</span>
                      <span className="text-xs font-dm-sans text-cool-gray">Moderate sodium levels</span>
                    </li>
                    <li className="flex items-start">
                      <FaShieldAlt className="text-trust-blue mt-0.5 mr-2 text-xs" />
                      <span className="text-xs font-dm-sans text-cool-gray">FOPL compliant</span>
                    </li>
                  </ul>
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