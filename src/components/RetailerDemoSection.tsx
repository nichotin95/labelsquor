import React from 'react';
import { Monitor, Smartphone, BarChart3 } from 'lucide-react';

const RetailerDemoSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            See LabelSquor in Your Business
          </h2>
          <p className="font-inter text-lg text-cool-gray max-w-2xl mx-auto">
            From compliance dashboards to customer-facing widgets, see how LabelSquor integrates seamlessly into your operations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Compliance Dashboard */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="w-5 h-5 text-trust-blue" />
              <span className="font-dm-sans font-semibold text-coal-black">Compliance Dashboard</span>
            </div>
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-inter text-sm">EU FOPL Compliance</span>
                <span className="bg-pulse-green text-white text-xs px-2 py-1 rounded">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-sm">BIS Standards</span>
                <span className="bg-heartbeat-red text-white text-xs px-2 py-1 rounded">3 gaps</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter text-sm">INCI Verification</span>
                <span className="bg-pulse-green text-white text-xs px-2 py-1 rounded">✓</span>
              </div>
              <button className="w-full bg-trust-blue text-white text-sm py-2 rounded mt-3">
                View Details
              </button>
            </div>
          </div>

          {/* Product Page Widget */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="w-5 h-5 text-pulse-green" />
              <span className="font-dm-sans font-semibold text-coal-black">Customer Widget</span>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-dm-sans font-medium text-sm">LabelSquor Trust Scores</span>
                <span className="text-xs text-cool-gray">Verified</span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-heartbeat-red">A+</div>
                  <div className="font-inter text-xs text-cool-gray">Health</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-trust-blue">A</div>
                  <div className="font-inter text-xs text-cool-gray">Safety</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-pulse-green">A+</div>
                  <div className="font-inter text-xs text-cool-gray">Sustain</div>
                </div>
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-cool-gray">✓</div>
                  <div className="font-inter text-xs text-cool-gray">Verify</div>
                </div>
              </div>
              <button className="w-full bg-trust-blue text-white text-xs py-2 rounded">
                Learn Why
              </button>
            </div>
          </div>

          {/* Analytics Preview */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-heartbeat-red" />
              <span className="font-dm-sans font-semibold text-coal-black">Impact Analytics</span>
            </div>
            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-2xl text-pulse-green">+23%</div>
                <div className="font-inter text-xs text-cool-gray">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-2xl text-trust-blue">+18%</div>
                <div className="font-inter text-xs text-cool-gray">Average Order Value</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-2xl text-heartbeat-red">87%</div>
                <div className="font-inter text-xs text-cool-gray">Trust Improvement</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-trust-blue text-white font-dm-sans font-medium px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors">
            Request Full Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default RetailerDemoSection;
