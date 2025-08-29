import React from 'react';

interface HeroProps {
  mode: 'consumer' | 'retailer';
}

const Hero: React.FC<HeroProps> = ({ mode }) => {
  const consumerContent = {
    headline: "Trust, explained.",
    subheader: "Know exactly what's in your products with instant Health, Safety, Sustainability, and Verification scores. Make informed choices with confidence.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "See Demo",
    features: [
      "Scan any product label instantly",
      "Get clear Health, Safety & Sustainability scores", 
      "Evidence-backed explanations for every rating"
    ]
  };

  const retailerContent = {
    headline: "Compliance, simplified.",
    subheader: "Transform regulatory complexity into competitive advantage. Automate compliance monitoring, identify gaps, and build consumer trust that drives sales.",
    primaryCTA: "Start Free Trial",
    secondaryCTA: "Book a Demo",
    features: [
      "Automated compliance across 50+ global regulations",
      "Proactive gap identification and recommendations",
      "Ready-to-deploy trust widgets that boost conversions"
    ]
  };

  const content = mode === 'consumer' ? consumerContent : retailerContent;

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-outfit font-bold text-4xl md:text-6xl lg:text-7xl text-coal-black mb-6">
          {content.headline}
        </h1>
        <p className="font-dm-sans text-lg md:text-xl text-cool-gray mb-8 max-w-3xl mx-auto">
          {content.subheader}
        </p>
        
        {/* Feature highlights */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 max-w-4xl mx-auto">
          {content.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-cool-gray">
              <div className="w-2 h-2 bg-trust-blue rounded-full"></div>
              <span className="font-inter text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-trust-blue text-white font-dm-sans font-medium px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto">
            {content.primaryCTA}
          </button>
          <button className="border-2 border-cool-gray text-cool-gray font-dm-sans font-medium px-8 py-4 rounded-lg hover:border-coal-black hover:text-coal-black transition-colors w-full sm:w-auto">
            {content.secondaryCTA}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
