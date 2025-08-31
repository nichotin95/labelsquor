import React from 'react';
import { FaChartLine, FaShieldAlt, FaExclamationTriangle, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const ForRetailers: React.FC = () => {
  const benefits = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Reduce Compliance Costs',
      description: 'Automate label checks across 50+ global regulations.',
      highlight: 'Up to 75% cost reduction vs manual audits',
      stat: '75%',
      statLabel: 'Cost Reduction',
      color: 'from-trust-blue to-blue-500'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Increase Consumer Trust',
      description: 'Transparent product scores build shopper confidence.',
      highlight: '+23% conversion in pilots',
      stat: '+23%',
      statLabel: 'Conversion Lift',
      color: 'from-pulse-green to-green-500'
    },
    {
      icon: <FaExclamationTriangle className="text-3xl" />,
      title: 'Prevent Costly Issues',
      description: 'Proactive gap detection flags risks before market.',
      highlight: '90% fewer incidents reported',
      stat: '90%',
      statLabel: 'Fewer Incidents',
      color: 'from-gradient-purple to-purple-500'
    }
  ];

  const regulations = [
    { abbr: 'FSSAI', full: 'Food Safety Standards', region: 'India' },
    { abbr: 'EU FOPL', full: 'Front-of-Pack Labeling', region: 'Europe' },
    { abbr: 'US FDA', full: 'Food & Drug Admin', region: 'USA' },
    { abbr: 'BIS', full: 'Bureau of Standards', region: 'India' },
    { abbr: 'INCI', full: 'Ingredient Nomenclature', region: 'Global' },
    { abbr: 'Organic', full: 'Organic Certification', region: 'Global' }
  ];

  return (
    <section id="retailers" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-trust-blue/10 to-gradient-purple/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">For Retailers & Brands</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Why Retailers Choose Label<span className="text-trust-blue">Squor</span>
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Transform compliance from a cost center to a competitive advantage
          </p>
        </div>

        {/* Benefits Cards with Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-trust-blue/30 p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon and Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className={`bg-gradient-to-br ${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {benefit.icon}
                </div>
                <div className="text-right">
                  <div className="font-space-grotesk font-bold text-3xl text-coal-black">
                    {benefit.stat}
                  </div>
                  <div className="font-dm-sans text-xs text-cool-gray">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-outfit font-bold text-xl text-coal-black mb-3">
                {benefit.title}
              </h3>
              <p className="font-dm-sans text-cool-gray mb-4">
                {benefit.description}
              </p>
              <div className="flex items-center text-sm">
                <FaCheckCircle className="text-success-green mr-2" />
                <span className="font-inter text-coal-black font-medium">
                  {benefit.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulations Bar */}
        <div className="bg-gradient-to-r from-light-gray to-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="font-outfit font-bold text-xl text-coal-black text-center mb-6">
            Compliance Coverage Across Global Markets
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {regulations.map((reg, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-lg p-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <div className="font-outfit font-bold text-trust-blue text-lg mb-1">
                    {reg.abbr}
                  </div>
                  <div className="font-dm-sans text-xs text-cool-gray mb-1">
                    {reg.full}
                  </div>
                  <div className="font-inter text-xs text-gray-500">
                    {reg.region}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center bg-trust-blue text-white font-outfit font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Book a Demo
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center bg-white border-2 border-cool-gray text-coal-black font-outfit font-semibold px-8 py-4 rounded-full hover:border-trust-blue hover:text-trust-blue transition-all duration-300 group">
              Start Free Trial
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRetailers;