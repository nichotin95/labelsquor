import React from 'react';
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';

const DemoSection: React.FC = () => {
  const examples = [
    {
      product: 'Organic Protein Bar',
      healthScore: 74,
      safetyScore: 92,
      sustainScore: 81,
      drivers: [
        { type: 'positive', text: 'High protein (20g per serving)' },
        { type: 'negative', text: 'Moderate sodium (280mg)' },
        { type: 'compliant', text: 'FOPL compliant' }
      ]
    },
    {
      product: 'Natural Face Cream',
      healthScore: 'N/A',
      safetyScore: 88,
      sustainScore: 76,
      drivers: [
        { type: 'positive', text: 'No harmful chemicals' },
        { type: 'positive', text: 'Cruelty-free certified' },
        { type: 'compliant', text: 'EU Cosmetics Regulation' }
      ]
    },
    {
      product: 'Kids Fruit Juice',
      healthScore: 62,
      safetyScore: 95,
      sustainScore: 70,
      drivers: [
        { type: 'positive', text: 'No artificial colors' },
        { type: 'negative', text: 'High sugar content' },
        { type: 'compliant', text: 'BIS certified' }
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-light-gray/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-trust-blue/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">Live Examples</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            See LabelSquor in Action
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Real products, real scores, real transparency
          </p>
        </div>

        {/* Main Demo Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 mb-12 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Score Display */}
            <div>
              <h3 className="font-outfit font-bold text-2xl text-coal-black mb-6">
                Health Squor
              </h3>
              
              {/* Main Score */}
              <div className="flex items-center mb-6">
                <span className="font-space-grotesk font-bold text-6xl text-trust-blue">74</span>
                <span className="font-space-grotesk text-3xl text-cool-gray ml-2">/100</span>
              </div>

              {/* Score Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-sm text-cool-gray">Health</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-3/4 h-2 bg-trust-blue rounded-full"></div>
                    </div>
                    <span className="font-space-grotesk font-semibold text-sm">74</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-sm text-cool-gray">Safety</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-11/12 h-2 bg-success-green rounded-full"></div>
                    </div>
                    <span className="font-space-grotesk font-semibold text-sm">92</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-sm text-cool-gray">Sustainability</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div className="w-2/3 h-2 bg-warning-amber rounded-full"></div>
                    </div>
                    <span className="font-space-grotesk font-semibold text-sm">68</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Card */}
            <div className="bg-light-gray rounded-2xl p-6">
              <h4 className="font-outfit font-bold text-lg text-coal-black mb-4">
                Why this score?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-success-green mt-0.5 mr-3" />
                  <div>
                    <span className="font-dm-sans text-sm text-coal-black font-medium">High protein content</span>
                    <p className="font-inter text-xs text-cool-gray mt-1">20g per serving - exceeds daily requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaExclamationTriangle className="text-warning-amber mt-0.5 mr-3" />
                  <div>
                    <span className="font-dm-sans text-sm text-coal-black font-medium">Moderate sodium levels</span>
                    <p className="font-inter text-xs text-cool-gray mt-1">280mg - within acceptable range</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="text-trust-blue mt-0.5 mr-3" />
                  <div>
                    <span className="font-dm-sans text-sm text-coal-black font-medium">Compliant with FOPL</span>
                    <p className="font-inter text-xs text-cool-gray mt-1">Meets all front-of-pack labeling requirements</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Example Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-outfit font-semibold text-lg text-coal-black mb-3">
                {example.product}
              </h4>
              
              {/* Mini Scores */}
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-xl text-trust-blue">
                    {example.healthScore}
                  </div>
                  <div className="font-dm-sans text-xs text-cool-gray">Health</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-xl text-success-green">
                    {example.safetyScore}
                  </div>
                  <div className="font-dm-sans text-xs text-cool-gray">Safety</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-xl text-warning-amber">
                    {example.sustainScore}
                  </div>
                  <div className="font-dm-sans text-xs text-cool-gray">Sustain</div>
                </div>
              </div>
              
              {/* Drivers */}
              <div className="border-t pt-3">
                {example.drivers.map((driver, idx) => (
                  <div key={idx} className="flex items-start mb-1">
                    <span className={`text-xs mr-2 ${
                      driver.type === 'positive' ? 'text-success-green' : 
                      driver.type === 'negative' ? 'text-warning-amber' : 
                      'text-trust-blue'
                    }`}>
                      {driver.type === 'positive' ? '+' : driver.type === 'negative' ? '-' : '✓'}
                    </span>
                    <span className="font-inter text-xs text-coal-black">{driver.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center bg-trust-blue text-white font-outfit font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
            See More Examples
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
