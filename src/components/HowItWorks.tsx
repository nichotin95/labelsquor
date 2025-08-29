import React from 'react';
import { Scan, Brain, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Scan className="w-8 h-8 text-trust-blue" />,
      title: "Scan or upload a product label",
      description: "Simply take a photo or upload an image of any product label"
    },
    {
      icon: <Brain className="w-8 h-8 text-pulse-green" />,
      title: "AI generates a Squor (Health, Safety, Sustainability, Verify)",
      description: "Our AI analyzes the label and creates comprehensive trust scores"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-heartbeat-red" />,
      title: "Evidence-backed compliance and clarity",
      description: "Get detailed explanations with regulatory citations and evidence"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                {step.icon}
              </div>
              <h3 className="font-dm-sans font-semibold text-lg text-coal-black mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-cool-gray">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
