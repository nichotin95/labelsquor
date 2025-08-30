import React from 'react';
import { FaRobot, FaSearch, FaChartBar, FaBuilding } from 'react-icons/fa';

const ForRetailers: React.FC = () => {
  const features = [
    {
      icon: <FaRobot className="text-3xl" />,
      title: 'Automated Checks',
      description: 'Stay compliant with FOPL, BIS, INCI, EU regulations and 50+ more. Automated monitoring across your entire catalog.',
      details: ['FOPL compliance', 'BIS standards', 'INCI verification', 'EU regulations']
    },
    {
      icon: <FaSearch className="text-3xl" />,
      title: 'Label Coach',
      description: 'Identify gaps and missing fields before products go live. Fix compliance issues proactively.',
      details: ['Gap analysis', 'Missing field alerts', 'Compliance scoring', 'Fix recommendations']
    },
    {
      icon: <FaChartBar className="text-3xl" />,
      title: 'PDP Widgets',
      description: 'Add trust badges to product pages. Boost shopper confidence and increase conversions.',
      details: ['Trust badges', 'Conversion boost', 'Easy integration', 'Real-time updates']
    }
  ];

  return (
    <section id="retailers" className="py-16 sm:py-20 lg:py-24 bg-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-trust-blue/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">For Retailers & Brands</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Prove compliance. Build trust.
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Transform regulatory complexity into competitive advantage. 
            Automate compliance across your entire product catalog.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-trust-blue to-gradient-purple w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="font-outfit font-bold text-xl text-coal-black mb-3">
                {feature.title}
              </h3>
              <p className="font-dm-sans text-cool-gray mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-trust-blue mr-2 mt-1">•</span>
                    <span className="font-inter text-sm text-coal-black">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="font-space-grotesk font-bold text-3xl text-trust-blue">50+</div>
            <div className="font-dm-sans text-sm text-cool-gray">Global Regulations</div>
          </div>
          <div className="text-center">
            <div className="font-space-grotesk font-bold text-3xl text-trust-blue">500+</div>
            <div className="font-dm-sans text-sm text-cool-gray">Brands Trust Us</div>
          </div>
          <div className="text-center">
            <div className="font-space-grotesk font-bold text-3xl text-trust-blue">10M+</div>
            <div className="font-dm-sans text-sm text-cool-gray">Products Analyzed</div>
          </div>
          <div className="text-center">
            <div className="font-space-grotesk font-bold text-3xl text-trust-blue">99.9%</div>
            <div className="font-dm-sans text-sm text-cool-gray">Accuracy Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center bg-trust-blue text-white font-outfit font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
            <FaBuilding className="mr-2" />
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForRetailers;
