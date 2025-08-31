import React from 'react';
import { FaRocket, FaCalendarAlt, FaChartLine, FaHeadset, FaPlay } from 'react-icons/fa';

const CallToActionRetailer: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-coal-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-trust-blue to-purple-600 rounded-3xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-outfit font-bold text-3xl lg:text-4xl text-white mb-4">
                Calculate Your Compliance ROI
              </h2>
              <p className="font-dm-sans text-lg text-white/90 mb-6">
                See how much you can save on compliance costs and prevent recalls
              </p>
              
              {/* Quick Calculator */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="font-dm-sans text-sm text-white/80">Number of SKUs</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 500"
                      className="w-full mt-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="font-dm-sans text-sm text-white/80">Regions you operate in</label>
                    <select className="w-full mt-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white">
                      <option>1-5 regions</option>
                      <option>6-10 regions</option>
                      <option>11-20 regions</option>
                      <option>20+ regions</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button className="bg-white text-trust-blue font-outfit font-bold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                <FaChartLine />
                Calculate My ROI
              </button>
            </div>
            
            {/* Potential Savings Display */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h3 className="font-outfit font-semibold text-xl text-white mb-6">
                Your Potential Savings
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-dm-sans text-white/80">Compliance Cost Reduction</span>
                  <span className="font-space-grotesk font-bold text-2xl text-yellow-300">$125K/yr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-dm-sans text-white/80">Recalls Prevented</span>
                  <span className="font-space-grotesk font-bold text-2xl text-green-400">3-5/yr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-dm-sans text-white/80">Time Saved</span>
                  <span className="font-space-grotesk font-bold text-2xl text-blue-400">320 hrs/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-dm-sans text-white/80">Trust Score Uplift</span>
                  <span className="font-space-grotesk font-bold text-2xl text-purple-400">+28%</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="font-outfit font-semibold text-lg text-white">Total Value</span>
                  <span className="font-space-grotesk font-bold text-3xl text-white">$485K/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Book Demo */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-trust-blue transition-colors">
            <FaCalendarAlt className="w-8 h-8 text-trust-blue mb-4" />
            <h3 className="font-outfit font-bold text-xl text-white mb-2">Book a Demo</h3>
            <p className="font-dm-sans text-sm text-gray-400 mb-4">
              See LabelSquor in action with your actual products
            </p>
            <button className="bg-trust-blue text-white font-outfit font-semibold px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors w-full">
              Schedule 30-min Demo
            </button>
          </div>

          {/* Start Free Trial */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
            <FaRocket className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="font-outfit font-bold text-xl text-white mb-2">Start Free Trial</h3>
            <p className="font-dm-sans text-sm text-gray-400 mb-4">
              14-day trial with 100 free product scans
            </p>
            <button className="bg-purple-600 text-white font-outfit font-semibold px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors w-full">
              Start Free Trial
            </button>
          </div>

          {/* Talk to Sales */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
            <FaHeadset className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="font-outfit font-bold text-xl text-white mb-2">Talk to Sales</h3>
            <p className="font-dm-sans text-sm text-gray-400 mb-4">
              Custom enterprise solutions for 1000+ SKUs
            </p>
            <button className="bg-green-600 text-white font-outfit font-semibold px-4 py-2 rounded-full text-sm hover:bg-green-700 transition-colors w-full">
              Contact Sales Team
            </button>
          </div>
        </div>

        {/* Video Demo */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center">
          <h3 className="font-outfit font-bold text-2xl text-white mb-4">
            Watch 2-Minute Product Demo
          </h3>
          <div className="bg-black/50 rounded-xl aspect-video max-w-3xl mx-auto mb-4 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <FaPlay className="w-8 h-8 text-white ml-1" />
            </button>
          </div>
          <p className="font-dm-sans text-sm text-gray-400">
            See how leading retailers use LabelSquor to automate compliance
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-12 text-center">
          <p className="font-dm-sans text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {['Amazon', 'Walmart', 'Target', 'Whole Foods', 'Kroger'].map((company) => (
              <div key={company} className="font-outfit font-bold text-xl text-gray-600">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionRetailer;
