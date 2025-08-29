import React from 'react';
import { TrendingUp, DollarSign, Users, Award } from 'lucide-react';

const RetailerValueSection: React.FC = () => {
  const valueProps = [
    {
      icon: <TrendingUp className="w-8 h-8 text-pulse-green" />,
      title: "Increase Conversions",
      metric: "23% average lift",
      description: "Products with trust scores see significantly higher conversion rates",
      benefits: [
        "Reduce customer hesitation at checkout",
        "Build confidence in product quality",
        "Differentiate from competitors",
        "Justify premium pricing"
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-trust-blue" />,
      title: "Reduce Compliance Costs",
      metric: "Save $100K+ annually",
      description: "Automate compliance monitoring and avoid costly regulatory violations",
      benefits: [
        "Prevent expensive recalls and fines",
        "Reduce manual compliance checking",
        "Early warning for regulation changes",
        "Streamline multi-market launches"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-heartbeat-red" />,
      title: "Build Consumer Trust",
      metric: "87% trust improvement",
      description: "Transparent product information builds lasting customer loyalty",
      benefits: [
        "Increase customer lifetime value",
        "Improve brand reputation",
        "Generate positive reviews",
        "Create brand advocates"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-gradient-purple" />,
      title: "Competitive Advantage",
      metric: "First-mover benefit",
      description: "Be among the first to offer complete product transparency",
      benefits: [
        "Lead industry transformation",
        "Attract conscious consumers",
        "Premium market positioning",
        "Future-proof your business"
      ]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Turn Compliance Into Revenue
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-3xl mx-auto">
            Stop seeing regulations as costs. Transform compliance into a competitive advantage that drives sales, builds trust, and future-proofs your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-6">
                {prop.icon}
                <div className="text-right">
                  <div className="font-space-grotesk font-bold text-2xl text-coal-black">
                    {prop.metric}
                  </div>
                </div>
              </div>
              <h3 className="font-dm-sans font-semibold text-xl text-coal-black mb-3">
                {prop.title}
              </h3>
              <p className="font-inter text-cool-gray mb-4">
                {prop.description}
              </p>
              <ul className="space-y-2">
                {prop.benefits.map((benefit, idx) => (
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

export default RetailerValueSection;
