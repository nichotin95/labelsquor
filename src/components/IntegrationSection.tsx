import React from 'react';
import { Code, Zap, BarChart3 } from 'lucide-react';

const IntegrationSection: React.FC = () => {
  return (
    <section id="integration" className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            Ready-to-Deploy Trust Widgets
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-2xl mx-auto">
            Integrate LabelSquor trust scores directly into your product pages with plug-and-play widgets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Code className="w-8 h-8 text-trust-blue" />
            </div>
            <h3 className="font-dm-sans font-semibold text-lg text-coal-black mb-2">Easy Integration</h3>
            <p className="font-inter text-cool-gray">Simple API or embed code - add trust scores in minutes</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Zap className="w-8 h-8 text-pulse-green" />
            </div>
            <h3 className="font-dm-sans font-semibold text-lg text-coal-black mb-2">Real-time Updates</h3>
            <p className="font-inter text-cool-gray">Automatic score updates as regulations change</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <BarChart3 className="w-8 h-8 text-heartbeat-red" />
            </div>
            <h3 className="font-dm-sans font-semibold text-lg text-coal-black mb-2">Analytics Dashboard</h3>
            <p className="font-inter text-cool-gray">Track how trust scores impact your conversions</p>
          </div>
        </div>

        {/* Widget Preview */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h4 className="font-dm-sans font-semibold text-xl text-coal-black mb-6 text-center">
            Product Page Widget Preview
          </h4>
          <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-dm-sans font-medium text-coal-black">Trust Scores by LabelSquor</span>
              <span className="text-xs font-inter text-cool-gray">Verified</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-xl text-heartbeat-red">A+</div>
                <div className="font-inter text-xs text-cool-gray">Health</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-xl text-trust-blue">A</div>
                <div className="font-inter text-xs text-cool-gray">Safety</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-xl text-pulse-green">A+</div>
                <div className="font-inter text-xs text-cool-gray">Sustainability</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-xl text-cool-gray">✓</div>
                <div className="font-inter text-xs text-cool-gray">Verified</div>
              </div>
            </div>
            <button className="w-full mt-4 bg-trust-blue text-white font-dm-sans text-sm py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
