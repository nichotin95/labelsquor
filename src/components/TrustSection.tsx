import React from 'react';
import { FaShieldAlt, FaUserShield, FaLock, FaCertificate, FaAward, FaHandshake } from 'react-icons/fa';

const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "100% Independent",
      description: "No brand partnerships or sponsored ratings. Pure, unbiased analysis.",
      stat: "0 sponsors"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Evidence-Based",
      description: "Every Squor backed by scientific research and regulatory standards.",
      stat: "10K+ sources"
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: "Your Data, Protected",
      description: "We never sell your data. Your scanning history stays private.",
      stat: "GDPR compliant"
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "GDPR", description: "Data Protection" },
    { name: "CCPA", description: "Privacy Rights" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
            <FaShieldAlt className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-dm-sans font-medium text-green-600">Trust & Transparency</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Why <span className="text-trust-blue">100K+ Consumers</span> Trust Us
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-cool-gray max-w-2xl mx-auto">
            We're building the global standard for product transparency
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustPillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-outfit font-bold text-lg text-coal-black mb-2">
                {pillar.title}
              </h3>
              <p className="font-dm-sans text-sm text-cool-gray mb-4">
                {pillar.description}
              </p>
              <div className="inline-flex items-center bg-green-50 rounded-full px-3 py-1">
                <span className="font-space-grotesk font-bold text-sm text-green-600">
                  {pillar.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-trust-blue to-indigo-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-1">100K+</div>
              <div className="font-dm-sans text-sm opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-1">2.5M+</div>
              <div className="font-dm-sans text-sm opacity-90">Products Scanned</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-1">52</div>
              <div className="font-dm-sans text-sm opacity-90">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-space-grotesk font-bold text-3xl lg:text-4xl mb-1">4.8★</div>
              <div className="font-dm-sans text-sm opacity-90">App Rating</div>
            </div>
          </div>
        </div>

        {/* How We Ensure Trust */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="font-outfit font-bold text-xl text-coal-black mb-6 text-center">
            Our Commitment to Transparency
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Methodology */}
            <div>
              <h4 className="font-outfit font-semibold text-lg text-coal-black mb-4 flex items-center">
                <FaAward className="text-amber-500 mr-2" />
                Our Methodology
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black font-medium">Public & Open</div>
                    <div className="font-dm-sans text-xs text-gray-600">All scoring algorithms are publicly documented</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black font-medium">Peer Reviewed</div>
                    <div className="font-dm-sans text-xs text-gray-600">Validated by independent nutrition & safety experts</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black font-medium">Continuously Updated</div>
                    <div className="font-dm-sans text-xs text-gray-600">Aligned with latest WHO, FDA, FSSAI guidelines</div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div>
              <h4 className="font-outfit font-semibold text-lg text-coal-black mb-4 flex items-center">
                <FaUserShield className="text-blue-500 mr-2" />
                Your Rights
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black font-medium">Request Your Data</div>
                    <div className="font-dm-sans text-xs text-gray-600">Download all your data anytime</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black font-medium">Delete Account</div>
                    <div className="font-dm-sans text-xs text-gray-600">Complete data deletion within 30 days</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <div className="font-dm-sans text-sm text-coal-black font-medium">Report Issues</div>
                    <div className="font-dm-sans text-xs text-gray-600">Direct line to our trust & safety team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h4 className="font-outfit font-semibold text-lg text-coal-black mb-6">
            Certified & Compliant
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-trust-blue transition-colors">
                <div className="font-outfit font-bold text-sm text-coal-black">{cert.name}</div>
                <div className="font-dm-sans text-xs text-gray-600">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Promise */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl px-6 py-4">
            <FaHandshake className="text-green-600 w-6 h-6 mr-3" />
            <div className="text-left">
              <div className="font-outfit font-bold text-sm text-coal-black">Our Promise</div>
              <div className="font-dm-sans text-xs text-gray-600">
                If we ever accept sponsorship, we'll shut down. Trust is everything.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
