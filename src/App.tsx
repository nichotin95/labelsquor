import React, { useState } from 'react';
import { 
  FaHeart, 
  FaChartBar, 
  FaCamera, 
  FaShieldAlt, 
  FaLeaf, 
  FaCertificate,
  FaMobile,
  FaSearch,
  FaLightbulb,
  FaDollarSign,
  FaHandshake,
  FaShieldVirus,
  FaUsers,
  FaBuilding
} from 'react-icons/fa';

function App(): JSX.Element {
  const [mode, setMode] = useState<'consumer' | 'retailer'>('consumer');

  const consumerContent = {
    headline: "Trust, explained.",
    subheader: "Know exactly what's in your products with instant Health, Safety, Sustainability, and Verification scores. Make informed choices with confidence.",
    primaryCTA: "Get Early Access",
    secondaryCTA: "See Demo",
    features: [
      "Scan any product label instantly",
      "Get clear Health, Safety & Sustainability scores", 
      "Evidence-backed explanations for every rating"
    ]
  };

  const retailerContent = {
    headline: "Compliance, simplified.",
    subheader: "Transform regulatory complexity into competitive advantage. Automate compliance monitoring, identify gaps, and build consumer trust that drives sales.",
    primaryCTA: "Start Free Trial",
    secondaryCTA: "Book a Demo",
    features: [
      "Automated compliance across 50+ global regulations",
      "Proactive gap identification and recommendations",
      "Ready-to-deploy trust widgets that boost conversions"
    ]
  };

  const content = mode === 'consumer' ? consumerContent : retailerContent;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(42,102,255,0.08),transparent_50%)] pointer-events-none"></div>
      
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-8 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Clean PNG Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo_ls.png" 
                alt="LabelSquor Logo" 
                width="108" 
                height="108"
                className="transition-transform duration-300 group-hover:scale-105 rounded-lg shadow-sm"
                style={{ backgroundColor: 'white' }}
              />
            </div>
            <div className="flex items-baseline">
              <span className="font-outfit font-bold text-2xl text-gray-900 tracking-tight">Label</span>
              <span className="font-outfit font-bold text-2xl text-blue-600">Squor</span>
            </div>
          </div>
          
          {/* Enhanced Mode Toggle */}
          <div className="flex items-center bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl p-1 shadow-lg">
            <button
              onClick={() => setMode('consumer')}
              className={`flex items-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                mode === 'consumer'
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaHeart className="w-4 h-4 mr-2" />
              Consumers
            </button>
            <button
              onClick={() => setMode('retailer')}
              className={`flex items-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                mode === 'retailer'
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaChartBar className="w-4 h-4 mr-2" />
              Retailers
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-gray-700">
              {mode === 'consumer' ? 'Trusted by 100K+ consumers' : 'Trusted by 500+ retailers'}
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="text-blue-600">
              {content.headline.split(',')[0]},
            </span>
            <br />
            <span className="text-gray-900">{content.headline.split(',')[1]}</span>
          </h1>
          
          {/* Subheader */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content.subheader}
          </p>
          
          {/* Feature Cards with ECG Elements */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="group bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-4">
                    <div className="ecg-container">
                      <div className="ecg-dot"></div>
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M2 8 L8 8 L12 4 L16 12 L20 6 L24 10 L28 8 L32 8 L36 8 L38 8" 
                          stroke="#2563eb" 
                          strokeWidth="2" 
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ecg-line"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-medium text-gray-800 text-center leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto text-lg shadow-lg">
              {content.primaryCTA}
            </button>
            
            <button className="bg-white border-2 border-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors w-full sm:w-auto text-lg">
              {content.secondaryCTA}
            </button>
          </div>
        </div>
      </main>

      {/* Mode-specific Content */}
        {mode === 'consumer' ? (
          <>
          {/* Enhanced Squor Types Section */}
          <section id="squor-types" className="py-24 px-4 md:px-8 bg-white relative">
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gray-100 rounded-full blur-2xl opacity-40"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  Four Dimensions of Trust
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                  Types of <span className="text-blue-600">Squor</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Every product gets scored across four critical dimensions that matter most to you
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    name: "Health", 
                    icon: <FaHeart className="w-10 h-10 text-green-600" />, 
                    desc: "Nutritional value, additives, and health impact", 
                    accent: "bg-green-500", 
                    color: "text-green-600" 
                  },
                  { 
                    name: "Safety", 
                    icon: <FaShieldAlt className="w-10 h-10 text-red-600" />, 
                    desc: "Recalls, contamination risks, and safety standards", 
                    accent: "bg-red-500", 
                    color: "text-red-600" 
                  },
                  { 
                    name: "Sustainability", 
                    icon: <FaLeaf className="w-10 h-10 text-green-600" />, 
                    desc: "Environmental impact and ethical sourcing", 
                    accent: "bg-blue-500", 
                    color: "text-green-600" 
                  },
                  { 
                    name: "Verification", 
                    icon: <FaCertificate className="w-10 h-10 text-purple-600" />, 
                    desc: "Third-party certifications and authenticity", 
                    accent: "bg-purple-500", 
                    color: "text-purple-600" 
                  }
                ].map((squor, index) => (
                  <div key={index} className="group relative bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
                    <div className="absolute top-4 right-4">
                      <div className="relative w-6 h-2">
                        <div className="ecg-dot w-2 h-2"></div>
                        <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                          <path 
                            d="M2 4 L6 4 L8 2 L10 6 L12 3 L14 5 L16 4 L20 4 L22 4" 
                            stroke="#2563eb" 
                            strokeWidth="1.5" 
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ecg-line"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-blue-300 transition-all duration-300">
                        {squor.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">{squor.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{squor.desc}</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 rounded-b-3xl group-hover:bg-blue-200 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced How It Works Section */}
          <section id="how-it-works" className="py-24 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <div className="inline-flex items-center bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  Simple 3-Step Process
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                  How It <span className="text-blue-600">Works</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our advanced AI and expert review process ensures accurate, reliable scores
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {[
                  { 
                    step: "1", 
                    title: "Scan", 
                    desc: "Point your camera at any product label", 
                    icon: <FaMobile className="w-12 h-12 text-gray-600" />
                  },
                  { 
                    step: "2", 
                    title: "Analyze", 
                    desc: "Our AI instantly processes ingredients and claims", 
                    icon: <FaSearch className="w-12 h-12 text-gray-600" />
                  },
                  { 
                    step: "3", 
                    title: "Decide", 
                    desc: "Get clear scores and make confident choices", 
                    icon: <FaLightbulb className="w-12 h-12 text-gray-600" />
                  }
                ].map((step, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                          {step.step}
                        </div>
                        <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Examples Section */}
          <section className="py-24 px-4 md:px-8 bg-white relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  Real Product Examples
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                  See <span className="text-blue-600">LabelSquor</span> in Action
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Try scanning these common products to see how our scoring system works
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Organic Almond Milk",
                    brand: "Silk",
                    category: "Dairy Alternative",
                    scores: { health: 85, safety: 92, sustainability: 78, verification: 90 },
                    image: "🥛",
                    highlights: ["Organic certified", "No artificial preservatives", "Sustainable packaging"]
                  },
                  {
                    name: "Whole Grain Bread",
                    brand: "Dave's Killer Bread",
                    category: "Bakery",
                    scores: { health: 88, safety: 95, sustainability: 72, verification: 85 },
                    image: "🍞",
                    highlights: ["Whole grains", "Protein-rich", "Non-GMO verified"]
                  },
                  {
                    name: "Greek Yogurt",
                    brand: "Chobani",
                    category: "Dairy",
                    scores: { health: 82, safety: 89, sustainability: 68, verification: 87 },
                    image: "🥛",
                    highlights: ["High protein", "Live cultures", "No artificial flavors"]
                  }
                ].map((product, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Product Header */}
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{product.image}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.brand} • {product.category}</p>
                    </div>
                    
                    {/* Squor Scores */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { name: "Health", score: product.scores.health, color: "text-green-600", bg: "bg-green-50" },
                        { name: "Safety", score: product.scores.safety, color: "text-blue-600", bg: "bg-blue-50" },
                        { name: "Sustain.", score: product.scores.sustainability, color: "text-emerald-600", bg: "bg-emerald-50" },
                        { name: "Verified", score: product.scores.verification, color: "text-purple-600", bg: "bg-purple-50" }
                      ].map((score, idx) => (
                        <div key={idx} className={`${score.bg} rounded-lg p-3 text-center`}>
                          <div className={`text-2xl font-bold ${score.color}`}>{score.score}</div>
                          <div className="text-xs text-gray-600">{score.name}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Product Highlights */}
                    <div className="space-y-2">
                      {product.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    {/* Scan Button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <FaCamera className="w-4 h-4 mr-2" />
                        Try Scanning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Demo CTA */}
              <div className="text-center mt-16">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Try More Products?</h3>
                  <p className="text-gray-600 mb-6">Get early access to scan any product in your pantry</p>
                  <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </section>
          </>
        ) : (
          <>
          {/* Clean Retailer Value Section */}
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Retailers Choose <span className="text-blue-600">LabelSquor</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Transform compliance complexity into competitive advantage
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Reduce Compliance Costs", 
                    desc: "Automate regulatory monitoring across 50+ global standards",
                    icon: <FaDollarSign className="w-12 h-12 text-green-600" />,
                    stat: "75% cost reduction",
                    color: "text-green-600"
                  },
                  { 
                    title: "Increase Consumer Trust", 
                    desc: "Display transparent product scores that build customer confidence",
                    icon: <FaHandshake className="w-12 h-12 text-blue-600" />,
                    stat: "23% higher conversion",
                    color: "text-blue-600"
                  },
                  { 
                    title: "Prevent Issues", 
                    desc: "Proactive gap identification prevents costly recalls and penalties",
                    icon: <FaShieldVirus className="w-12 h-12 text-purple-600" />,
                    stat: "90% fewer incidents",
                    color: "text-purple-600"
                  }
                ].map((value, index) => (
                  <div key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 relative">
                    <div className="absolute top-4 right-4">
                      <div className="relative w-8 h-3">
                        <div className="ecg-dot w-2 h-2"></div>
                        <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                          <path 
                            d="M2 6 L8 6 L12 3 L16 9 L20 4 L24 8 L28 6 L30 6" 
                            stroke="#2563eb" 
                            strokeWidth="2" 
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ecg-line"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mb-6 flex justify-center">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{value.desc}</p>
                    <div className="text-2xl font-bold text-blue-600">
                      {value.stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section id="compliance" className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    <span className="text-blue-600">Compliance</span> Made Simple
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Stay ahead of regulatory changes across multiple jurisdictions with automated monitoring and alerts.
                  </p>
                  <div className="space-y-6">
                    {[
                      "FDA, USDA, and international regulatory databases",
                      "Real-time updates on regulatory changes",
                      "Automated compliance gap identification",
                      "Detailed audit trails and documentation"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported Regulations</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "FDA FSMA", "EU Novel Foods", "USDA Organic", "Non-GMO Project",
                      "Fair Trade", "Rainforest Alliance", "GFSI Standards", "ISO 22000"
                    ].map((regulation, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700">
                        {regulation}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
        )}

      {/* Clean Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {mode === 'consumer' 
              ? "Join thousands of consumers making smarter product choices every day."
              : "Join leading retailers who trust LabelSquor for their compliance and consumer trust needs."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              {content.primaryCTA}
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              {content.secondaryCTA}
            </button>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-white">Label</span>
                  <span className="text-xl font-bold text-blue-400">Squor</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                The global standard for product label trust — clarity for consumers, compliance for retailers.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Features</div>
                <div className="hover:text-white transition-colors cursor-pointer">Pricing</div>
                <div className="hover:text-white transition-colors cursor-pointer">API</div>
                <div className="hover:text-white transition-colors cursor-pointer">Integrations</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">About</div>
                <div className="hover:text-white transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-white transition-colors cursor-pointer">Press</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contact</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LabelSquor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
