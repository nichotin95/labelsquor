import React from 'react';
import { FaStore, FaIndustry, FaArrowRight } from 'react-icons/fa';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      type: 'retailer',
      icon: <FaStore className="text-2xl" />,
      company: 'Big Bazaar',
      location: 'India',
      challenge: 'Checking 10,000+ SKUs for FOPL label compliance',
      result: 'Reduced manual effort by 65%',
      metric: '65%',
      metricLabel: 'Effort Reduction',
      color: 'from-trust-blue to-blue-500'
    },
    {
      type: 'brand',
      icon: <FaIndustry className="text-2xl" />,
      company: 'Britannia',
      location: 'India → EU',
      challenge: 'Product claims needed validation for EU export',
      result: 'Achieved compliance clearance in 2 weeks instead of 6',
      metric: '3x',
      metricLabel: 'Faster Approval',
      color: 'from-gradient-purple to-purple-500'
    },
    {
      type: 'retailer',
      icon: <FaStore className="text-2xl" />,
      company: 'D-Mart',
      location: 'India',
      challenge: 'Ensuring BIS standards across private labels',
      result: 'Zero compliance violations in last audit',
      metric: '100%',
      metricLabel: 'Compliance Rate',
      color: 'from-pulse-green to-green-500'
    }
  ];

  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-success-green/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-success-green">Success Stories</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Real Results, Real Impact
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            See how leading retailers and brands transform their compliance operations
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-trust-blue/30 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${caseStudy.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                    {caseStudy.icon}
                  </div>
                  <div className="text-right">
                    <div className="font-space-grotesk font-bold text-3xl">
                      {caseStudy.metric}
                    </div>
                    <div className="font-dm-sans text-xs opacity-90">
                      {caseStudy.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="font-outfit font-bold text-xl mb-1">
                  {caseStudy.company}
                </h3>
                <p className="font-dm-sans text-sm opacity-90">
                  {caseStudy.location}
                </p>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-outfit font-semibold text-sm text-cool-gray mb-2">
                    Challenge
                  </h4>
                  <p className="font-dm-sans text-coal-black">
                    {caseStudy.challenge}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-outfit font-semibold text-sm text-cool-gray mb-2">
                    Result
                  </h4>
                  <p className="font-dm-sans text-coal-black font-medium">
                    {caseStudy.result}
                  </p>
                </div>
                
                <button className="flex items-center text-trust-blue font-outfit font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Read Full Story
                  <FaArrowRight className="ml-2 text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-dm-sans text-cool-gray mb-4">
            Ready to transform your compliance operations?
          </p>
          <button className="inline-flex items-center bg-trust-blue text-white font-outfit font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
            See How It Works
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
