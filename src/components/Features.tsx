import React from 'react';
import { 
  FaHeart, FaShieldAlt, FaLeaf, FaCertificate,
  FaMobile, FaSearch, FaLightbulb, FaDollarSign,
  FaHandshake, FaShieldVirus
} from 'react-icons/fa';

interface FeaturesProps {
  mode: 'consumer' | 'retailer';
}

const Features: React.FC<FeaturesProps> = ({ mode }) => {
  if (mode === 'consumer') {
    return (
      <>
        {/* Squor Types Section - Mobile Optimized */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 animate-pulse" />
                Four Dimensions of Trust
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                Types of <span className="text-blue-600">Squor</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Every product gets scored across four critical dimensions
              </p>
            </div>
            
            {/* Mobile: 2x2 Grid, Tablet: 2x2, Desktop: 1x4 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { 
                  name: "Health", 
                  icon: <FaHeart className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />, 
                  desc: "Nutritional value & health impact", 
                  color: "text-green-600",
                  bg: "bg-green-50"
                },
                { 
                  name: "Safety", 
                  icon: <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />, 
                  desc: "Recalls & safety standards", 
                  color: "text-red-600",
                  bg: "bg-red-50"
                },
                { 
                  name: "Sustainability", 
                  icon: <FaLeaf className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />, 
                  desc: "Environmental impact", 
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                },
                { 
                  name: "Verification", 
                  icon: <FaCertificate className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, 
                  desc: "Certifications & authenticity", 
                  color: "text-purple-600",
                  bg: "bg-purple-50"
                }
              ].map((squor, index) => (
                <div 
                  key={index} 
                  className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2"
                >
                  <div className={`${squor.bg} w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    {squor.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 text-center">
                    {squor.name}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                    {squor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Mobile Optimized */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-white border border-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse" />
                Simple 3-Step Process
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                How It <span className="text-blue-600">Works</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Our AI ensures accurate, reliable scores in seconds
              </p>
            </div>
            
            {/* Mobile: Vertical Stack, Desktop: 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  step: "1", 
                  title: "Scan", 
                  desc: "Point your camera at any product label", 
                  icon: <FaMobile className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                },
                { 
                  step: "2", 
                  title: "Analyze", 
                  desc: "AI instantly processes ingredients", 
                  icon: <FaSearch className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                },
                { 
                  step: "3", 
                  title: "Decide", 
                  desc: "Get clear scores and make confident choices", 
                  icon: <FaLightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                }
              ].map((step, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex md:flex-col items-center md:text-center">
                      <div className="flex-shrink-0 md:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold md:mx-auto group-hover:scale-110 transition-transform">
                          {step.step}
                        </div>
                      </div>
                      <div className="ml-6 md:ml-0">
                        <div className="mb-3 md:mb-4 md:flex md:justify-center">{step.icon}</div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // Retailer Features
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Retailers Choose <span className="text-blue-600">LabelSquor</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Transform compliance complexity into competitive advantage
          </p>
        </div>
        
        {/* Mobile: Stack, Desktop: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { 
              title: "Reduce Compliance Costs", 
              desc: "Automate regulatory monitoring across 50+ global standards",
              icon: <FaDollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />,
              stat: "75% cost reduction",
              bg: "bg-green-50"
            },
            { 
              title: "Increase Consumer Trust", 
              desc: "Display transparent product scores that build confidence",
              icon: <FaHandshake className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />,
              stat: "23% higher conversion",
              bg: "bg-blue-50"
            },
            { 
              title: "Prevent Issues", 
              desc: "Proactive gap identification prevents costly recalls",
              icon: <FaShieldVirus className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />,
              stat: "90% fewer incidents",
              bg: "bg-purple-50"
            }
          ].map((value, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${value.bg} w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed text-center">
                {value.desc}
              </p>
              <div className="text-xl sm:text-2xl font-bold text-blue-600 text-center">
                {value.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
