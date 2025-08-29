import React from 'react';
import { Eye, Clock, Heart, Globe } from 'lucide-react';

const ConsumerBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-trust-blue" />,
      title: "Complete Transparency",
      description: "See exactly what's in your products and why they scored that way",
      details: [
        "Ingredient breakdown with health impact",
        "Regulatory compliance status",
        "Third-party certification verification",
        "Evidence sources for every claim"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-pulse-green" />,
      title: "Save Time & Effort",
      description: "No more spending hours researching product labels and ingredients",
      details: [
        "Instant scanning with immediate results",
        "Pre-analyzed product database",
        "Simplified scoring system",
        "Quick comparison between products"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-heartbeat-red" />,
      title: "Protect Your Health",
      description: "Make choices that align with your health goals and dietary needs",
      details: [
        "Allergen and sensitivity warnings",
        "Nutritional quality assessment",
        "Harmful ingredient identification",
        "Personalized health recommendations"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-cool-gray" />,
      title: "Support Sustainability",
      description: "Choose products that match your environmental values",
      details: [
        "Carbon footprint analysis",
        "Packaging sustainability rating",
        "Ethical sourcing verification",
        "Environmental impact transparency"
      ]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Why Choose LabelSquor?
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-2xl mx-auto">
            Take control of your shopping decisions with the world's most comprehensive product transparency platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-dm-sans font-semibold text-xl text-coal-black mb-3">
                {benefit.title}
              </h3>
              <p className="font-inter text-cool-gray mb-4">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-trust-blue rounded-full"></div>
                    <span className="font-inter text-sm text-cool-gray">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsumerBenefitsSection;
