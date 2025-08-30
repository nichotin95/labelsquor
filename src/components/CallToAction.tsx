import React from 'react';
import { FaArrowRight, FaBuilding } from 'react-icons/fa';

interface CallToActionProps {
  mode: 'consumer' | 'retailer';
}

const CallToAction: React.FC<CallToActionProps> = ({ mode }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-trust-blue to-gradient-purple rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
            {/* Heading */}
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Bring verified trust to every product page
            </h2>
            
            {/* Subheading */}
            <p className="font-dm-sans text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {mode === 'consumer' 
                ? "Join thousands making smarter purchasing decisions with LabelSquor"
                : "Transform your product pages with trust badges that convert"
              }
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-trust-blue font-outfit font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center group">
                {mode === 'consumer' ? 'Get Early Access' : 'Start Free Trial'}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-transparent border-2 border-white text-white font-outfit font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
                <FaBuilding className="mr-2" />
                {mode === 'consumer' ? 'For Retailers' : 'Partner With Us'}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div className="text-white">
                <div className="font-space-grotesk font-bold text-3xl">100K+</div>
                <div className="font-dm-sans text-sm opacity-90">Active Users</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-white">
                <div className="font-space-grotesk font-bold text-3xl">10M+</div>
                <div className="font-dm-sans text-sm opacity-90">Products Scanned</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-white">
                <div className="font-space-grotesk font-bold text-3xl">50+</div>
                <div className="font-dm-sans text-sm opacity-90">Regulations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;