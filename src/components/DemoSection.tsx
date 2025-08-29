import React from 'react';

const DemoSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans font-semibold text-3xl md:text-4xl text-coal-black mb-4">
            See LabelSquor in Action
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Card */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-cool-gray font-inter">Product Image</span>
                  </div>
                  <h3 className="font-dm-sans font-semibold text-coal-black mb-2">
                    Organic Green Tea
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="font-space-grotesk font-bold text-2xl text-pulse-green">A+</div>
                      <div className="font-inter text-xs text-cool-gray">Health</div>
                    </div>
                    <div className="text-center">
                      <div className="font-space-grotesk font-bold text-2xl text-trust-blue">A</div>
                      <div className="font-inter text-xs text-cool-gray">Safety</div>
                    </div>
                    <div className="text-center">
                      <div className="font-space-grotesk font-bold text-2xl text-pulse-green">A+</div>
                      <div className="font-inter text-xs text-cool-gray">Sustainability</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Why Card */}
              <div className="bg-trust-blue text-white rounded-xl p-6">
                <h4 className="font-dm-sans font-semibold text-lg mb-4">
                  Why this Health Score?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pulse-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm">
                      <strong>Organic certified</strong> - Meets USDA organic standards
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pulse-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm">
                      <strong>No artificial additives</strong> - Clean ingredient list
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pulse-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm">
                      <strong>Antioxidant rich</strong> - High ORAC value verified
                    </p>
                  </div>
                </div>
                <button className="mt-4 text-sm font-dm-sans underline hover:no-underline">
                  View evidence sources →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
