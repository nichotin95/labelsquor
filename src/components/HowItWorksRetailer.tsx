import React from 'react';
import { FaUpload, FaRobot, FaChartBar, FaRocket } from 'react-icons/fa';

const HowItWorksRetailer: React.FC = () => {
  const steps = [
    {
      icon: <FaUpload className="w-6 h-6" />,
      title: "Upload product data",
      description: "Bulk upload via CSV, API integration, or manual entry",
      metric: "10,000+ products/hour"
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Automated compliance check",
      description: "AI scans for 50+ global regulations and standards",
      metric: "99.8% accuracy"
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Get actionable insights",
      description: "Dashboard with risk scores, gaps, and recommendations",
      metric: "3-day ROI"
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Deploy trust widgets",
      description: "Embed verified badges on your product pages",
      metric: "28% conversion lift"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-4">
            <FaRobot className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-dm-sans font-medium text-purple-600">Enterprise workflow</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Your Compliance <span className="text-trust-blue">Command Center</span>
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-cool-gray max-w-2xl mx-auto">
            From upload to deployment in minutes, not months
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-trust-blue/20 via-trust-blue to-trust-blue/20 hidden lg:block"></div>
          
          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-trust-blue/20">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-trust-blue to-purple-600 text-white rounded-full flex items-center justify-center font-outfit font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-trust-blue to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-outfit font-bold text-lg text-coal-black mb-2">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-sm text-cool-gray mb-3">
                    {step.description}
                  </p>
                  
                  {/* Metric */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-3 py-2">
                    <span className="font-space-grotesk font-bold text-sm text-trust-blue">
                      {step.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="font-outfit font-bold text-xl text-coal-black mb-6 text-center">
            Seamless Integration with Your Tech Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* ERP Systems */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-4 mb-2">
                <div className="font-outfit font-bold text-2xl text-gray-400">SAP</div>
              </div>
              <span className="text-xs font-dm-sans text-gray-600">ERP Integration</span>
            </div>
            
            {/* E-commerce */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-4 mb-2">
                <div className="font-outfit font-bold text-2xl text-gray-400">Shopify</div>
              </div>
              <span className="text-xs font-dm-sans text-gray-600">E-commerce</span>
            </div>
            
            {/* PIM */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-4 mb-2">
                <div className="font-outfit font-bold text-2xl text-gray-400">Akeneo</div>
              </div>
              <span className="text-xs font-dm-sans text-gray-600">PIM System</span>
            </div>
            
            {/* API */}
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-4 mb-2">
                <div className="font-outfit font-bold text-2xl text-gray-400">REST API</div>
              </div>
              <span className="text-xs font-dm-sans text-gray-600">Custom Integration</span>
            </div>
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-12 bg-gradient-to-r from-trust-blue to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-outfit font-bold text-2xl mb-4">
                Calculate Your ROI
              </h3>
              <p className="font-dm-sans text-base mb-6 opacity-90">
                See how much you can save on compliance costs and boost in consumer trust
              </p>
              <button className="bg-white text-trust-blue font-outfit font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                Try ROI Calculator →
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="font-space-grotesk font-bold text-3xl mb-1">85%</div>
                <div className="font-dm-sans text-sm opacity-90">Cost reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="font-space-grotesk font-bold text-3xl mb-1">3 days</div>
                <div className="font-dm-sans text-sm opacity-90">Time to ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="font-space-grotesk font-bold text-3xl mb-1">28%</div>
                <div className="font-dm-sans text-sm opacity-90">Conversion lift</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="font-space-grotesk font-bold text-3xl mb-1">0</div>
                <div className="font-dm-sans text-sm opacity-90">Recalls prevented</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksRetailer;
