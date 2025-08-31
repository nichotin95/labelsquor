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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-light-gray/20">
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

        {/* Visual Example */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            {/* Step 1 Visual */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-3">
                <div className="w-32 h-32 mx-auto bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div className="space-y-2">
                    <div className="h-1 w-20 bg-gray-800 mx-auto"></div>
                    <div className="h-1 w-16 bg-gray-800 mx-auto"></div>
                    <div className="h-1 w-20 bg-gray-800 mx-auto"></div>
                    <div className="h-1 w-12 bg-gray-800 mx-auto"></div>
                    <div className="h-1 w-20 bg-gray-800 mx-auto"></div>
                  </div>
                </div>
                <FaCamera className="w-8 h-8 text-trust-blue mx-auto mt-3" />
              </div>
              <span className="font-dm-sans text-xs text-gray-500">Scan barcode</span>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <div className="text-gray-400 text-2xl">→</div>
            </div>

            {/* Step 2 Visual */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <span className="text-xs font-dm-sans text-gray-600">Health</span>
                    <div className="text-2xl font-space-grotesk font-bold text-red-600">24</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <span className="text-xs font-dm-sans text-gray-600">Safety</span>
                    <div className="text-2xl font-space-grotesk font-bold text-yellow-600">75</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <span className="text-xs font-dm-sans text-gray-600">Sustainability</span>
                    <div className="text-2xl font-space-grotesk font-bold text-orange-600">40</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <span className="text-xs font-dm-sans text-gray-600">Verification</span>
                    <div className="text-2xl font-space-grotesk font-bold text-green-600">88</div>
                  </div>
                </div>
              </div>
              <span className="font-dm-sans text-xs text-gray-500">Instant Squors</span>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <div className="text-gray-400 text-2xl">→</div>
            </div>

            {/* Step 3 Visual */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-3">
                <div className="bg-white rounded-lg p-4 shadow-sm text-left">
                  <h4 className="font-outfit font-semibold text-sm text-coal-black mb-2">Why this Squor?</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span className="font-dm-sans text-gray-600">High sugar content</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-1">•</span>
                      <span className="font-dm-sans text-gray-600">Contains palm oil</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-1">•</span>
                      <span className="font-dm-sans text-gray-600">FSSAI verified</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-dm-sans text-xs text-gray-500">Evidence & insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksConsumer;
