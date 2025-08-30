import React from 'react';
import { FaChartLine, FaClipboardList, FaDatabase, FaArrowRight } from 'react-icons/fa';

const ForConsumers: React.FC = () => {
  const features = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Clear Scores',
      description: 'Get instant Health, Safety, and Sustainability scores for any product. No guesswork, just clarity.',
      details: ['Health Squor 0-100', 'Safety Verification', 'Sustainability Rating']
    },
    {
      icon: <FaClipboardList className="text-3xl" />,
      title: 'Why Cards',
      description: 'Understand the reasoning behind every Squor with transparent explanations and citations.',
      details: ['Evidence-based reasons', 'Regulatory citations', 'Ingredient analysis']
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: 'Evidence First',
      description: 'No opinions or marketing fluff. Only facts backed by regulations and scientific data.',
      details: ['50+ regulations', 'Scientific sources', 'Real-time updates']
    }
  ];

  return (
    <section id="consumers" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-trust-blue/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">For Consumers</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Make informed choices with confidence
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Scan any product label and instantly understand what you're buying. 
            No more confusion, just trusted information at your fingertips.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-trust-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-trust-blue">
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
                    <span className="text-success-green mr-2 mt-1">✓</span>
                    <span className="font-inter text-sm text-coal-black">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center bg-white border-2 border-trust-blue text-trust-blue font-outfit font-semibold px-8 py-3 rounded-full hover:bg-trust-blue hover:text-white transition-all duration-300 group">
            Try a Demo Scan
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForConsumers;
