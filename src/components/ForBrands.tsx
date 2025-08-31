import React from 'react';
import { FaClipboardCheck, FaDatabase, FaClock, FaCode } from 'react-icons/fa';

const ForBrands: React.FC = () => {
  const benefits = [
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: 'Standardized Compliance Dashboard',
      description: 'One report for many markets - streamline your compliance across regions'
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: 'Single Source of Truth',
      description: 'GS1, barcode checks, FSSAI, organic claims - all verified in one place'
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Faster Approvals',
      description: 'Get products to shelf faster with pre-validated compliance reports'
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: 'API Access',
      description: 'Integrate LabelSquor directly into your internal QA systems'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-light-gray/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl text-coal-black mb-4">
            Why Brands Partner With Label<span className="text-trust-blue">Squor</span>
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Suppliers and brands benefit from streamlined compliance - it's a shared responsibility
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-trust-blue/10 to-gradient-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-trust-blue">{benefit.icon}</span>
              </div>
              <h3 className="font-outfit font-bold text-lg text-coal-black mb-2">
                {benefit.title}
              </h3>
              <p className="font-dm-sans text-sm text-cool-gray">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div>
              <span className="font-space-grotesk font-bold text-2xl text-trust-blue">2 weeks</span>
              <span className="font-dm-sans text-sm text-cool-gray ml-2">vs 6 weeks approval</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div>
              <span className="font-space-grotesk font-bold text-2xl text-trust-blue">65%</span>
              <span className="font-dm-sans text-sm text-cool-gray ml-2">faster to market</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrands;
