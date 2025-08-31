import React from 'react';
import { FaCamera, FaMobileAlt, FaChartLine, FaLightbulb } from 'react-icons/fa';

const HowItWorksConsumer: React.FC = () => {
  const steps = [
    {
      icon: <FaCamera className="w-6 h-6" />,
      title: "Scan any product",
      description: "Use your phone camera to scan barcodes or upload product images instantly",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Get instant Squors",
      description: "See Health, Safety, Sustainability & Verification ratings in seconds",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Understand why",
      description: "Deep dive into evidence-based explanations for every rating",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-b from-white to-light-gray/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <FaMobileAlt className="w-4 h-4 text-trust-blue mr-2" />
            <span className="text-sm font-dm-sans font-medium text-trust-blue">Simple 3-step process</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            How Label<span className="text-trust-blue">Squor</span> Works
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-cool-gray max-w-2xl mx-auto">
            Get trusted product insights in seconds, right from your phone
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-gray-300 to-transparent" />
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-outfit font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-outfit font-bold text-lg text-coal-black mb-2">
                  {step.title}
                </h3>
                <p className="font-dm-sans text-sm text-cool-gray">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Example - Redesigned */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200">
          <h3 className="font-outfit font-bold text-xl text-coal-black text-center mb-8">
            See it in action
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
            {/* Step 1 Visual */}
            <div className="flex-1 text-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex flex-col items-center justify-center">
                    {/* Barcode Visual */}
                    <div className="space-y-1.5 mb-3">
                      <div className="h-8 w-1 bg-gray-800 inline-block mx-0.5"></div>
                      <div className="h-8 w-2 bg-gray-800 inline-block mx-0.5"></div>
                      <div className="h-8 w-1 bg-gray-800 inline-block mx-0.5"></div>
                      <div className="h-8 w-3 bg-gray-800 inline-block mx-0.5"></div>
                      <div className="h-8 w-1 bg-gray-800 inline-block mx-0.5"></div>
                      <div className="h-8 w-2 bg-gray-800 inline-block mx-0.5"></div>
                      <div className="h-8 w-1 bg-gray-800 inline-block mx-0.5"></div>
                    </div>
                    <FaCamera className="w-6 h-6 text-trust-blue" />
                  </div>
                </div>
                <span className="inline-block mt-3 font-dm-sans text-sm text-gray-600">Scan barcode</span>
                
                {/* Arrow for desktop */}
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-trust-blue">
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <path d="M0 10 L30 10 M30 10 L25 5 M30 10 L25 15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 Visual */}
            <div className="flex-1 text-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-50 rounded-lg p-3">
                      <span className="text-xs font-dm-sans text-gray-600">Health</span>
                      <div className="text-2xl font-space-grotesk font-bold text-red-600">24</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <span className="text-xs font-dm-sans text-gray-600">Safety</span>
                      <div className="text-2xl font-space-grotesk font-bold text-yellow-600">75</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <span className="text-xs font-dm-sans text-gray-600">Sustain.</span>
                      <div className="text-2xl font-space-grotesk font-bold text-orange-600">40</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <span className="text-xs font-dm-sans text-gray-600">Verified</span>
                      <div className="text-2xl font-space-grotesk font-bold text-green-600">88</div>
                    </div>
                  </div>
                </div>
                <span className="inline-block mt-3 font-dm-sans text-sm text-gray-600">Instant Squors</span>
                
                {/* Arrow for desktop */}
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-trust-blue">
                  <svg width="40" height="20" viewBox="0 0 40 20">
                    <path d="M0 10 L30 10 M30 10 L25 5 M30 10 L25 15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 3 Visual */}
            <div className="flex-1 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                  <h4 className="font-outfit font-semibold text-sm text-coal-black mb-3 text-left">Why this Squor?</h4>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="font-dm-sans text-xs text-gray-700">High sugar content</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-500 mr-2">⚠</span>
                      <span className="font-dm-sans text-xs text-gray-700">Contains palm oil</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="font-dm-sans text-xs text-gray-700">FSSAI verified</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="inline-block mt-3 font-dm-sans text-sm text-gray-600">Evidence & insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksConsumer;
