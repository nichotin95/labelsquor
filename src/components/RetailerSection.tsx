import React from 'react';
import { Shield, MessageSquare, TrendingUp } from 'lucide-react';

const RetailerSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-trust-blue" />,
      title: "Automated compliance checks (FOPL, BIS, INCI, EU rules)",
      description: "Stay compliant with automated monitoring of global regulatory requirements."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pulse-green" />,
      title: "Label Coach guidance for missing claims or gaps",
      description: "Proactive recommendations to improve your product labels and compliance."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-heartbeat-red" />,
      title: "PDP-ready widgets that boost consumer trust",
      description: "Ready-to-integrate trust signals that increase conversion and customer confidence."
    }
  ];

  return (
    <section id="retailers" className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Prove compliance and build trust.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-dm-sans font-semibold text-lg text-coal-black mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-cool-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetailerSection;
