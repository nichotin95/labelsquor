import React from 'react';
import { FaChartLine, FaExclamationTriangle, FaCheckCircle, FaClock, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const AnalyticsDashboard: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-4">
            <FaChartLine className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-dm-sans font-medium text-purple-600">Real-time analytics</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Your Compliance <span className="text-trust-blue">Analytics Hub</span>
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-cool-gray max-w-2xl mx-auto">
            Monitor, analyze, and optimize your entire product portfolio in real-time
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
          {/* Top Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <FaCheckCircle className="text-green-600 w-5 h-5" />
                <span className="text-xs font-dm-sans text-green-600">+12%</span>
              </div>
              <div className="font-space-grotesk font-bold text-2xl text-coal-black">2,847</div>
              <div className="font-dm-sans text-xs text-gray-600 mt-1">Compliant Products</div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <FaExclamationTriangle className="text-red-600 w-5 h-5" />
                <span className="text-xs font-dm-sans text-red-600">-8%</span>
              </div>
              <div className="font-space-grotesk font-bold text-2xl text-coal-black">142</div>
              <div className="font-dm-sans text-xs text-gray-600 mt-1">Critical Issues</div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <FaClock className="text-amber-600 w-5 h-5" />
                <span className="text-xs font-dm-sans text-amber-600">3 days</span>
              </div>
              <div className="font-space-grotesk font-bold text-2xl text-coal-black">367</div>
              <div className="font-dm-sans text-xs text-gray-600 mt-1">Pending Reviews</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <FaGlobe className="text-blue-600 w-5 h-5" />
                <span className="text-xs font-dm-sans text-blue-600">52 regions</span>
              </div>
              <div className="font-space-grotesk font-bold text-2xl text-coal-black">98.2%</div>
              <div className="font-dm-sans text-xs text-gray-600 mt-1">Coverage Rate</div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Compliance Trend */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-outfit font-semibold text-sm text-coal-black mb-4">Compliance Trend</h4>
              <div className="h-32 flex items-end justify-between space-x-2">
                {[65, 72, 68, 85, 92, 88, 95].map((height, i) => (
                  <div key={i} className="flex-1">
                    <div 
                      className="bg-gradient-to-t from-trust-blue to-blue-400 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs font-dm-sans text-gray-500">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Regional Compliance */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-outfit font-semibold text-sm text-coal-black mb-4">Regional Compliance</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-xs text-gray-600">EU (INCI, FOPL)</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="font-space-grotesk text-xs font-bold">94%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-xs text-gray-600">India (FSSAI, BIS)</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="font-space-grotesk text-xs font-bold">78%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-xs text-gray-600">USA (FDA)</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                    <span className="font-space-grotesk text-xs font-bold">89%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-dm-sans text-xs text-gray-600">APAC</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="font-space-grotesk text-xs font-bold">72%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Distribution */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-outfit font-semibold text-sm text-coal-black mb-4">Risk Distribution</h4>
              <div className="relative h-32 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-red-500 border-t-transparent border-r-transparent" style={{ transform: 'rotate(-45deg)' }}></div>
                  <div className="absolute w-24 h-24 rounded-full border-8 border-amber-500 border-b-transparent border-l-transparent" style={{ transform: 'rotate(45deg)' }}></div>
                  <div className="absolute w-16 h-16 rounded-full border-8 border-green-500"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-xs font-dm-sans">High</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                  <span className="text-xs font-dm-sans">Med</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-xs font-dm-sans">Low</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-outfit font-semibold text-sm text-coal-black">Recent Compliance Alerts</h4>
              <span className="text-xs font-dm-sans bg-red-100 text-red-700 px-2 py-1 rounded-full">5 new</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white rounded-lg p-3">
                <div className="flex items-center">
                  <FaExclamationTriangle className="text-red-500 w-4 h-4 mr-3" />
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black">Product SKU-2847: Missing FOPL warning</div>
                    <div className="font-dm-sans text-xs text-gray-500">2 hours ago • India region</div>
                  </div>
                </div>
                <button className="text-xs font-dm-sans text-trust-blue hover:underline">Fix now →</button>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-3">
                <div className="flex items-center">
                  <FaShieldAlt className="text-amber-500 w-4 h-4 mr-3" />
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black">New EU regulation update requires action</div>
                    <div className="font-dm-sans text-xs text-gray-500">5 hours ago • 142 products affected</div>
                  </div>
                </div>
                <button className="text-xs font-dm-sans text-trust-blue hover:underline">Review →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white border-2 border-cool-gray text-coal-black font-outfit font-semibold px-6 py-3 rounded-full hover:border-trust-blue hover:text-trust-blue transition-all duration-300">
            Export Report (PDF)
          </button>
          <button className="bg-white border-2 border-cool-gray text-coal-black font-outfit font-semibold px-6 py-3 rounded-full hover:border-trust-blue hover:text-trust-blue transition-all duration-300">
            Schedule Weekly Reports
          </button>
          <button className="bg-trust-blue text-white font-outfit font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
            Open Full Dashboard →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
