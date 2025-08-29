import React from 'react';
import { FileCheck, AlertTriangle, TrendingUp, Target } from 'lucide-react';

const ComplianceSection: React.FC = () => {
  const features = [
    {
      icon: <FileCheck className="w-8 h-8 text-trust-blue" />,
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring of FOPL, BIS, INCI, EU regulations, and 50+ global standards",
      benefits: ["Real-time regulation updates", "Automated gap detection", "Multi-market compliance"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-heartbeat-red" />,
      title: "Gap Identification & Alerts",
      description: "Proactive identification of compliance gaps before they become costly problems",
      benefits: ["Early warning system", "Risk prioritization", "Action recommendations"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-pulse-green" />,
      title: "Trust Score Optimization",
      description: "Turn compliance into competitive advantage with consumer-facing trust scores",
      benefits: ["Increased conversions", "Premium positioning", "Brand differentiation"]
    },
    {
      icon: <Target className="w-8 h-8 text-gradient-purple" />,
      title: "Label Coach & Guidance",
      description: "AI-powered recommendations to improve your labels and maximize trust scores",
      benefits: ["Improvement suggestions", "Best practice guidance", "Optimization roadmap"]
    }
  ];

  return (
    <section id="compliance" className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Make Compliance Your Competitive Advantage
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-3xl mx-auto">
            Stop treating regulations as obstacles. Use LabelSquor to turn compliance into trust, and trust into revenue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="font-dm-sans font-semibold text-xl text-coal-black mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-cool-gray mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-trust-blue rounded-full"></div>
                    <span className="font-inter text-sm text-cool-gray">{benefit}</span>
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

export default ComplianceSection;
