import React from 'react';
import { FaCamera, FaChartPie, FaClipboardCheck } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <FaCamera className="text-3xl" />,
      title: 'Scan or Upload',
      description: 'Take a photo of any product label or upload an image. Our AI instantly extracts all information.',
      color: 'from-trust-blue to-blue-500'
    },
    {
      number: '2',
      icon: <FaChartPie className="text-3xl" />,
      title: 'Get Your Squor',
      description: 'Receive instant scores for Health, Safety, Sustainability, and Verification based on 50+ regulations.',
      color: 'from-success-green to-emerald-500'
    },
    {
      number: '3',
      icon: <FaClipboardCheck className="text-3xl" />,
      title: 'See Evidence',
      description: 'Review detailed explanations, compliance summaries, and evidence for every Squor we provide.',
      color: 'from-gradient-purple to-purple-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-light-gray rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-coal-black">How It Works</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Simple. Fast. Trusted.
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Get product transparency in three easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-trust-blue via-success-green to-gradient-purple"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 relative z-10">
                  {/* Step Number */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <span className="font-outfit font-bold text-2xl">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-light-gray w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-cool-gray">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-outfit font-bold text-xl text-coal-black mb-3">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-cool-gray">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-trust-blue to-success-green -bottom-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Example */}
        <div className="mt-16 bg-gradient-to-br from-light-gray to-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Input */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 inline-block">
                <div className="bg-gray-200 w-32 h-40 rounded-lg mx-auto mb-3"></div>
                <p className="font-dm-sans text-sm text-cool-gray">Product Label</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <svg className="w-16 h-16 text-trust-blue animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
            
            {/* Output */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 inline-block">
                <div className="flex justify-center space-x-4 mb-3">
                  <div className="text-center">
                    <div className="font-space-grotesk font-bold text-2xl text-trust-blue">74</div>
                    <div className="font-dm-sans text-xs text-cool-gray">Health</div>
                  </div>
                  <div className="text-center">
                    <div className="font-space-grotesk font-bold text-2xl text-success-green">92</div>
                    <div className="font-dm-sans text-xs text-cool-gray">Safety</div>
                  </div>
                  <div className="text-center">
                    <div className="font-space-grotesk font-bold text-2xl text-warning-amber">68</div>
                    <div className="font-dm-sans text-xs text-cool-gray">Sustain</div>
                  </div>
                </div>
                <p className="font-dm-sans text-sm text-coal-black font-semibold">Your Squor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
