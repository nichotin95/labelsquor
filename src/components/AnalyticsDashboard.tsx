import React from 'react';
import { FaChartLine, FaExclamationTriangle, FaCheckCircle, FaClock, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const AnalyticsDashboard: React.FC = () => {
  return (
    <section id="analytics" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
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
              <div className="relative h-32">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs font-dm-sans text-gray-500 -ml-1">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
                
                {/* Chart bars */}
                <div className="ml-8 h-full flex items-end justify-between gap-1">
                  {[
                    { day: 'Mon', value: 65 },
                    { day: 'Tue', value: 72 },
                    { day: 'Wed', value: 68 },
                    { day: 'Thu', value: 85 },
                    { day: 'Fri', value: 92 },
                    { day: 'Sat', value: 88 },
                    { day: 'Sun', value: 95 }
                  ].map((item, i) => (
                    <div key={i} className="flex-1 h-full flex flex-col justify-end items-center">
                      {/* Bar */}
                      <div className="w-full relative group">
                        <div 
                          className="bg-gradient-to-t from-trust-blue to-blue-400 rounded-t transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                          style={{ height: `${(item.value / 100) * 128}px` }}
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {item.value}%
                          </div>
                        </div>
                      </div>
                      {/* Day label */}
                      <span className="text-xs font-dm-sans text-gray-500 mt-1">{item.day.slice(0, 1)}</span>
                    </div>
                  ))}
                </div>
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
                {/* Donut Chart */}
                <svg className="w-32 h-32" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="15" />
                  
                  {/* High Risk - 15% */}
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="15"
                    strokeDasharray={`${15 * 2.51} ${251 - (15 * 2.51)}`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                  
                  {/* Medium Risk - 35% */}
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="15"
                    strokeDasharray={`${35 * 2.51} ${251 - (35 * 2.51)}`}
                    strokeDashoffset={`-${15 * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  
                  {/* Low Risk - 50% */}
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="15"
                    strokeDasharray={`${50 * 2.51} ${251 - (50 * 2.51)}`}
                    strokeDashoffset={`-${50 * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  
                  {/* Center text */}
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="fill-coal-black">
                    <tspan className="font-space-grotesk font-bold text-lg">3,356</tspan>
                    <tspan x="50" dy="15" className="font-dm-sans text-xs fill-gray-600">Products</tspan>
                  </text>
                </svg>
              </div>
              <div className="flex justify-center space-x-3 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-xs font-dm-sans">High (15%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                  <span className="text-xs font-dm-sans">Med (35%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-xs font-dm-sans">Low (50%)</span>
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
