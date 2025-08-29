import React from 'react';
import { Smartphone, Search, ShoppingCart } from 'lucide-react';

const ConsumerJourneySection: React.FC = () => {
  const journeySteps = [
    {
      icon: <Smartphone className="w-8 h-8 text-trust-blue" />,
      title: "While Shopping",
      description: "Scan products in-store or online to get instant trust scores",
      scenarios: [
        "Grocery shopping: Compare cereals by health scores",
        "Pharmacy visits: Check safety ratings for supplements", 
        "Online shopping: Verify sustainability claims before buying"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-pulse-green" />,
      title: "Research Products",
      description: "Dive deep into ingredient analysis and regulatory compliance",
      scenarios: [
        "Baby products: Understand safety certifications",
        "Cosmetics: Check INCI compliance and allergen warnings",
        "Food labels: Verify organic and health claims"
      ]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-heartbeat-red" />,
      title: "Make Informed Decisions",
      description: "Choose products that align with your values and needs",
      scenarios: [
        "Health-conscious: Prioritize A+ health scores",
        "Eco-friendly: Focus on sustainability ratings",
        "Safety-first: Ensure verified safety compliance"
      ]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Your Shopping Journey, Simplified
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-3xl mx-auto">
            Whether you're shopping in-store or online, LabelSquor puts product transparency at your fingertips. Make every purchase decision with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="font-dm-sans font-semibold text-xl text-coal-black mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-cool-gray mb-6">
                {step.description}
              </p>
              <div className="space-y-3">
                {step.scenarios.map((scenario, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-trust-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-sm text-cool-gray">{scenario}</span>
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

export default ConsumerJourneySection;
