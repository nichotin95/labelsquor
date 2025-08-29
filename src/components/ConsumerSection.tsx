import React from 'react';
import { CheckCircle, FileText, ExternalLink } from 'lucide-react';

const ConsumerSection: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-pulse-green" />,
      title: "Simple Squor Health, Safety, and Sustainability scores",
      description: "Clear, easy-to-understand ratings that help you make informed choices instantly."
    },
    {
      icon: <FileText className="w-6 h-6 text-trust-blue" />,
      title: "Why Cards that explain exactly why a product scored that way",
      description: "Detailed explanations behind every score, giving you the context you need."
    },
    {
      icon: <ExternalLink className="w-6 h-6 text-cool-gray" />,
      title: "Evidence links for true transparency",
      description: "Direct access to the sources and regulations behind every claim."
    }
  ];

  return (
    <section id="consumers" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Make informed choices with confidence.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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

export default ConsumerSection;
