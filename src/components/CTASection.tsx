import React from 'react';

interface CTASectionProps {
  mode: 'consumer' | 'retailer';
}

const CTASection: React.FC<CTASectionProps> = ({ mode }) => {
  const consumerContent = {
    headline: "Start making informed choices today.",
    subheadline: "Join thousands of conscious consumers who trust LabelSquor for product transparency.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "Download App (Coming Soon)",
    benefits: [
      "Free for consumers",
      "Instant product scanning",
      "No registration required"
    ]
  };

  const retailerContent = {
    headline: "Transform compliance into competitive advantage.",
    subheadline: "Join leading brands who use LabelSquor to build consumer trust and drive sales.",
    primaryCTA: "Start Free Trial",
    secondaryCTA: "Schedule Demo",
    benefits: [
      "30-day free trial",
      "White-glove onboarding",
      "ROI guarantee"
    ]
  };

  const content = mode === 'consumer' ? consumerContent : retailerContent;

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-blue-purple-gradient">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-white mb-4">
          {content.headline}
        </h2>
        <p className="font-inter text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          {content.subheadline}
        </p>
        
        {/* Benefits */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-blue-100">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-inter text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-trust-blue font-dm-sans font-medium px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
            {content.primaryCTA}
          </button>
          <button className="border-2 border-white text-white font-dm-sans font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-trust-blue transition-colors w-full sm:w-auto">
            {content.secondaryCTA}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
