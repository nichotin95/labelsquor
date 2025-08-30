import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaShieldAlt, FaLeaf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImagePlaceholder from './ImagePlaceholder';
import productsData from '../data/products.json';
import { getSquorColor, getSquorBgColor, getFlagStyle } from '../utils/squorHelpers';

const InteractiveDemo: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);
  
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
            Experience Label<span className="text-trust-blue">Squor</span>
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Real products from Indian markets with actual Health, Safety, Sustainability & Verification Squors
          </p>
        </div>

        {/* Product Selector Pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 px-4">
          {productsData.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(index)}
              className={`px-4 py-2 rounded-full transition-all font-dm-sans text-sm ${
                selectedProduct === index
                  ? 'bg-trust-blue text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-coal-black hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {product.brand}
            </button>
          ))}
        </div>

        {/* Main Product Card with Navigation */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => navigateProduct('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <FaChevronLeft className="text-coal-black text-lg" />
          </button>
          <button 
            onClick={() => navigateProduct('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <FaChevronRight className="text-coal-black text-lg" />
          </button>
          
          <div className="grid lg:grid-cols-2">
            {/* Left: Product Image & Info */}
            <div className="bg-gradient-to-br from-light-gray/50 to-white p-8 lg:p-12">
              {/* Product Image */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <ImagePlaceholder 
                  src={currentProduct.image}
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
                <div className="font-dm-sans text-sm font-semibold text-trust-blue mb-1">
                  {currentProduct.brand}
                </div>
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
                              {/* Squors Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {/* Health Squor */}
                  <div className={`rounded-xl p-4 border-2 ${getSquorBgColor(currentProduct.scores.health)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Health</span>
                    <FaCheckCircle className={`text-xs ${getSquorColor(currentProduct.scores.health)}`} />
                  </div>
                                      <div className={`font-space-grotesk font-bold text-3xl ${getSquorColor(currentProduct.scores.health)}`}>
                    {currentProduct.scores.health}
                  </div>
                </div>

                                  {/* Safety Squor */}
                  <div className={`rounded-xl p-4 border-2 ${getSquorBgColor(currentProduct.scores.safety)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Safety</span>
                    <FaShieldAlt className={`text-xs ${getSquorColor(currentProduct.scores.safety)}`} />
                  </div>
                                      <div className={`font-space-grotesk font-bold text-3xl ${getSquorColor(currentProduct.scores.safety)}`}>
                    {currentProduct.scores.safety}
                  </div>
                </div>

                                  {/* Sustainability Squor */}
                  <div className={`rounded-xl p-4 border-2 ${getSquorBgColor(currentProduct.scores.sustainability)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Sustainability</span>
                    <FaLeaf className={`text-xs ${getSquorColor(currentProduct.scores.sustainability)}`} />
                  </div>
                                      <div className={`font-space-grotesk font-bold text-3xl ${getSquorColor(currentProduct.scores.sustainability)}`}>
                    {currentProduct.scores.sustainability}
                  </div>
                </div>

                                  {/* Verification Squor */}
                  <div className={`rounded-xl p-4 border-2 ${getSquorBgColor(currentProduct.scores.verification)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-dm-sans text-xs text-cool-gray">Verification</span>
                    <FaCheckCircle className={`text-xs ${getSquorColor(currentProduct.scores.verification)}`} />
                  </div>
                                      <div className={`font-space-grotesk font-bold text-3xl ${getSquorColor(currentProduct.scores.verification)}`}>
                    {currentProduct.scores.verification}
                  </div>
                </div>
              </div>

              {/* Why Card */}
              <div className="bg-gradient-to-br from-light-gray to-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="font-outfit font-bold text-lg text-coal-black mb-4">
                  Why these Squors?
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

        {/* Bottom CTAs */}
        <div className="text-center mt-12">
          <p className="font-dm-sans text-cool-gray mb-6">
            Want to see your products analyzed?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-trust-blue text-white font-outfit font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
              Get Early Access
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="bg-white border-2 border-cool-gray text-coal-black font-outfit font-semibold px-8 py-3 rounded-full hover:border-trust-blue hover:text-trust-blue transition-all duration-300 inline-flex items-center group"
            >
              {showAllProducts ? 'Hide Products' : 'View All Products'}
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Compact Product Grid */}
        {showAllProducts && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {productsData.map((product, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedProduct(index);
                  window.scrollTo({ top: 100, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left group"
              >
                {/* Product Image */}
                <div className="h-24 bg-gray-50 rounded-lg mb-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                {/* Product Info */}
                <div className="text-xs font-dm-sans font-semibold text-trust-blue mb-1">
                  {product.brand}
                </div>
                <h4 className="text-sm font-outfit font-bold text-coal-black mb-2 line-clamp-1">
                  {product.name}
                </h4>
                {/* Mini Squor Display */}
                <div className="flex gap-1">
                  <div className={`flex-1 text-center py-1 rounded ${getSquorBgColor(product.scores.health)}`}>
                    <span className={`font-space-grotesk font-bold text-xs ${getSquorColor(product.scores.health)}`}>
                      H:{product.scores.health}
                    </span>
                  </div>
                  <div className={`flex-1 text-center py-1 rounded ${getSquorBgColor(product.scores.safety)}`}>
                    <span className={`font-space-grotesk font-bold text-xs ${getSquorColor(product.scores.safety)}`}>
                      S:{product.scores.safety}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveDemo;