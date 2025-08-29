import React from 'react';
import { Heart, Shield, Leaf, CheckCircle2 } from 'lucide-react';

const SquorTypesSection: React.FC = () => {
  const squorTypes = [
    {
      icon: <Heart className="w-8 h-8 text-heartbeat-red" />,
      name: "Health Squor",
      grade: "A+",
      color: "text-heartbeat-red",
      bgColor: "bg-red-50",
      description: "Nutritional value, ingredient quality, and health impact assessment",
      examples: ["Organic certification", "No artificial additives", "Nutritional density", "Allergen information"]
    },
    {
      icon: <Shield className="w-8 h-8 text-trust-blue" />,
      name: "Safety Squor", 
      grade: "A",
      color: "text-trust-blue",
      bgColor: "bg-blue-50",
      description: "Product safety standards, testing, and regulatory compliance",
      examples: ["FDA approval", "Safety testing", "Contamination checks", "Quality standards"]
    },
    {
      icon: <Leaf className="w-8 h-8 text-pulse-green" />,
      name: "Sustainability Squor",
      grade: "A+",
      color: "text-pulse-green", 
      bgColor: "bg-green-50",
      description: "Environmental impact, ethical sourcing, and sustainability practices",
      examples: ["Carbon footprint", "Packaging materials", "Fair trade", "Renewable energy"]
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-cool-gray" />,
      name: "Verify Squor",
      grade: "✓",
      color: "text-cool-gray",
      bgColor: "bg-gray-50", 
      description: "Claim verification, evidence backing, and transparency score",
      examples: ["Claim verification", "Evidence sources", "Third-party testing", "Transparency level"]
    }
  ];

  return (
    <section id="squor-types" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Four Types of Trust Scores
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-2xl mx-auto">
            Every product gets comprehensive scoring across four critical dimensions that matter to you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {squorTypes.map((squor, index) => (
            <div key={index} className={`${squor.bgColor} p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all`}>
              <div className="flex items-center justify-between mb-4">
                {squor.icon}
                <div className={`font-space-grotesk font-bold text-3xl ${squor.color}`}>
                  {squor.grade}
                </div>
              </div>
              <h3 className="font-dm-sans font-semibold text-lg text-coal-black mb-2">
                {squor.name}
              </h3>
              <p className="font-inter text-sm text-cool-gray mb-4">
                {squor.description}
              </p>
              <div className="space-y-1">
                {squor.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${squor.color.replace('text-', 'bg-')}`}></div>
                    <span className="font-inter text-xs text-cool-gray">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SquorTypesSection;
