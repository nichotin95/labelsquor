import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaShieldAlt, FaLeaf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImagePlaceholder from './ImagePlaceholder';
import productsData from '../data/products.json';

const InteractiveDemo: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  
  // Get score color based on value
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-green';
    if (score >= 60) return 'text-warning-amber';
    if (score >= 40) return 'text-orange-500';
    return 'text-error-red';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-success-green/10 border-success-green/30';
    if (score >= 60) return 'bg-warning-amber/10 border-warning-amber/30';
    if (score >= 40) return 'bg-orange-500/10 border-orange-500/30';
    return 'bg-error-red/10 border-error-red/30';
  };

  // Get flag type for styling
  const getFlagStyle = (flag: string) => {
    if (flag.includes('FSSAI') || flag.includes('GTIN') || flag.includes('verified')) {
      return 'bg-trust-blue/10 text-trust-blue border-trust-blue/30';
    }
    if (flag.includes('Organic') || flag.includes('Paper')) {
      return 'bg-success-green/10 text-success-green border-success-green/30';
    }
    if (flag.includes('Plastic') || flag.includes('Palm oil')) {
      return 'bg-warning-amber/10 text-warning-amber border-warning-amber/30';
    }
    return 'bg-gray-100 text-cool-gray border-gray-300';
  };

  const currentProduct = productsData[selectedProduct];

  const navigateProduct = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedProduct((prev) => (prev === 0 ? productsData.length - 1 : prev - 1));
    } else {
      setSelectedProduct((prev) => (prev === productsData.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-trust-blue/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">Live Demo</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Experience LabelSquor
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Real products from Indian markets with actual Health, Safety, Sustainability & Verification scores
          </p>
        </div>

        {/* Product Carousel Selector */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <button 
              onClick={() => navigateProduct('prev')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
            >
              <FaChevronLeft className="text-coal-black" />
            </button>
            
            <div className="flex gap-2 overflow-x-auto max-w-2xl">
              {productsData.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProduct(index)}
                  className={`px-4 py-2 rounded-full transition-all font-dm-sans text-sm whitespace-nowrap ${
                    selectedProduct === index
                      ? 'bg-trust-blue text-white shadow-lg'
                      : 'bg-white text-coal-black shadow-md hover:shadow-lg'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => navigateProduct('next')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
            >
              <FaChevronRight className="text-coal-black" />
            </button>
          </div>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Left: Product Image & Info */}
            <div className="bg-gradient-to-br from-light-gray/50 to-white p-8 lg:p-12">
              {/* Product Image */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <ImagePlaceholder 
                  src={currentProduct.image.startsWith('/images/') ? undefined : currentProduct.image}
                  alt={currentProduct.name}
                  width={300}
                  height={400}
                  placeholderText={currentProduct.name}
                  className="mx-auto"
                  rounded="xl"
                />
              </div>
              
              {/* Product Details */}
              <div className="text-center">
                <h3 className="font-outfit font-bold text-2xl text-coal-black mb-2">
                  {currentProduct.name}
                </h3>
                <div className="flex justify-center gap-4 text-sm font-dm-sans text-cool-gray mb-4">
                  <span>{currentProduct.category}</span>
                  <span>•</span>
                  <span>{currentProduct.pack_size}</span>
                </div>
                
                {/* Flags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentProduct.flags.map((flag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-inter border ${getFlagStyle(flag)}`}
                    >
                      {flag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Scores & Analysis */}
            <div className="p-8 lg:p-12">
              {/* Scores Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Health Score */}
                <div className={`rounded-xl p-4 border ${getScoreBgColor(currentProduct.scores.health)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Health</span>
                    <FaCheckCircle className={`text-xs ${getScoreColor(currentProduct.scores.health)}`} />
                  </div>
                  <div className={`font-space-grotesk font-bold text-3xl ${getScoreColor(currentProduct.scores.health)}`}>
                    {currentProduct.scores.health}
                  </div>
                </div>

                {/* Safety Score */}
                <div className={`rounded-xl p-4 border ${getScoreBgColor(currentProduct.scores.safety)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Safety</span>
                    <FaShieldAlt className={`text-xs ${getScoreColor(currentProduct.scores.safety)}`} />
                  </div>
                  <div className={`font-space-grotesk font-bold text-3xl ${getScoreColor(currentProduct.scores.safety)}`}>
                    {currentProduct.scores.safety}
                  </div>
                </div>

                {/* Sustainability Score */}
                <div className={`rounded-xl p-4 border ${getScoreBgColor(currentProduct.scores.sustainability)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Sustainability</span>
                    <FaLeaf className={`text-xs ${getScoreColor(currentProduct.scores.sustainability)}`} />
                  </div>
                  <div className={`font-space-grotesk font-bold text-3xl ${getScoreColor(currentProduct.scores.sustainability)}`}>
                    {currentProduct.scores.sustainability}
                  </div>
                </div>

                {/* Verification Score */}
                <div className={`rounded-xl p-4 border ${getScoreBgColor(currentProduct.scores.verification)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Verification</span>
                    <FaCheckCircle className={`text-xs ${getScoreColor(currentProduct.scores.verification)}`} />
                  </div>
                  <div className={`font-space-grotesk font-bold text-3xl ${getScoreColor(currentProduct.scores.verification)}`}>
                    {currentProduct.scores.verification}
                  </div>
                </div>
              </div>

              {/* Why Card */}
              <div className="bg-gradient-to-br from-light-gray to-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-outfit font-bold text-lg text-coal-black mb-4">
                  Why these scores?
                </h4>
                
                <ul className="space-y-3">
                  {currentProduct.why_card.map((reason, index) => {
                    // Determine icon based on content
                    const isPositive = reason.includes('Good') || reason.includes('High fiber') || 
                                      reason.includes('Good protein') || reason.includes('Added fiber');
                    const isNegative = reason.includes('High sodium') || reason.includes('High saturated') || 
                                      reason.includes('High added sugar') || reason.includes('Energy dense') ||
                                      reason.includes('High free sugar') || reason.includes('Refined carbs');
                    
                    return (
                      <li key={index} className="flex items-start">
                        <span className={`mt-1 mr-3 text-sm ${
                          isPositive ? 'text-success-green' : 
                          isNegative ? 'text-error-red' : 
                          'text-warning-amber'
                        }`}>
                          {isPositive ? '✓' : isNegative ? '✗' : '•'}
                        </span>
                        <span className="font-inter text-sm text-coal-black">
                          {reason}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-trust-blue text-white font-outfit font-semibold py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
                Experience Squor
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-dm-sans text-cool-gray mb-4">
            Want to see your products analyzed?
          </p>
          <button className="bg-white border-2 border-trust-blue text-trust-blue font-outfit font-semibold px-8 py-3 rounded-full hover:bg-trust-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
            Get Early Access
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;