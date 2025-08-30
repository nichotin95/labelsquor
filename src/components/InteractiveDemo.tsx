import React, { useState } from 'react';
import { FaCamera, FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import ImagePlaceholder from './ImagePlaceholder';

const InteractiveDemo: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  
  const products = [
    {
      id: 0,
      name: 'Organic Protein Bar',
      category: 'Food & Nutrition',
      imageUrl: '/api/placeholder/300/400', // Placeholder for actual product image
      healthScore: 74,
      safetyScore: 92,
      sustainScore: 81,
      verified: true,
      highlights: [
        { type: 'positive', icon: <FaCheckCircle />, text: 'High protein (20g)', detail: 'Exceeds daily requirements' },
        { type: 'warning', icon: <FaExclamationTriangle />, text: 'Moderate sodium', detail: '280mg per serving' },
        { type: 'info', icon: <FaShieldAlt />, text: 'FOPL Compliant', detail: 'Meets all labeling requirements' }
      ]
    },
    {
      id: 1,
      name: 'Natural Face Cream',
      category: 'Personal Care',
      imageUrl: '/api/placeholder/300/400', // Placeholder for actual product image
      healthScore: null,
      safetyScore: 88,
      sustainScore: 76,
      verified: true,
      highlights: [
        { type: 'positive', icon: <FaCheckCircle />, text: 'No harmful chemicals', detail: 'Free from parabens & sulfates' },
        { type: 'positive', icon: <FaCheckCircle />, text: 'Cruelty-free', detail: 'Certified by Leaping Bunny' },
        { type: 'info', icon: <FaShieldAlt />, text: 'EU Compliant', detail: 'Meets cosmetics regulation' }
      ]
    },
    {
      id: 2,
      name: 'Kids Fruit Juice',
      category: 'Beverages',
      imageUrl: '/api/placeholder/300/400', // Placeholder for actual product image
      healthScore: 62,
      safetyScore: 95,
      sustainScore: 70,
      verified: true,
      highlights: [
        { type: 'positive', icon: <FaCheckCircle />, text: 'No artificial colors', detail: '100% natural ingredients' },
        { type: 'warning', icon: <FaExclamationTriangle />, text: 'High sugar content', detail: '12g per 100ml' },
        { type: 'info', icon: <FaShieldAlt />, text: 'BIS Certified', detail: 'Indian standards approved' }
      ]
    }
  ];

  const currentProduct = products[selectedProduct];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-trust-blue/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">Interactive Demo</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Try LabelSquor Live
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Click on any product below to see instant health, safety, and sustainability scores
          </p>
        </div>

        {/* Product Selector */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(index)}
              className={`relative rounded-xl p-4 transition-all duration-300 ${
                selectedProduct === index
                  ? 'bg-trust-blue text-white shadow-xl scale-105'
                  : 'bg-white text-coal-black shadow-md hover:shadow-lg hover:scale-102'
              }`}
            >
              {/* Product Image Placeholder */}
              <div className="w-full h-24 rounded-lg mb-2 overflow-hidden">
                <ImagePlaceholder 
                  src={product.imageUrl !== '/api/placeholder/300/400' ? product.imageUrl : undefined}
                  alt={product.name}
                  width={100}
                  height={96}
                  placeholderText=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`font-outfit font-semibold text-sm ${
                selectedProduct === index ? 'text-white' : 'text-coal-black'
              }`}>
                {product.name}
              </p>
              <p className={`font-dm-sans text-xs mt-1 ${
                selectedProduct === index ? 'text-white/80' : 'text-cool-gray'
              }`}>
                {product.category}
              </p>
              {selectedProduct === index && (
                <div className="absolute -top-2 -right-2 bg-success-green text-white rounded-full p-1">
                  <FaCheckCircle className="text-xs" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Interactive Result Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: Product Display */}
            <div className="bg-gradient-to-br from-light-gray to-white p-8 lg:p-12">
              <div className="text-center">
                {/* Product Image Placeholder - Ready for real image */}
                <div className="bg-white rounded-2xl shadow-lg p-4 inline-block mb-6">
                  <ImagePlaceholder 
                    src={currentProduct.imageUrl !== '/api/placeholder/300/400' ? currentProduct.imageUrl : undefined}
                    alt={currentProduct.name}
                    width={192}
                    height={256}
                    placeholderText={currentProduct.name}
                    className="shadow-inner"
                  />
                </div>
                
                <h3 className="font-outfit font-bold text-2xl text-coal-black mb-2">
                  {currentProduct.name}
                </h3>
                <p className="font-dm-sans text-cool-gray mb-4">
                  {currentProduct.category}
                </p>
                
                {/* Scan Animation */}
                <button className="bg-trust-blue text-white px-6 py-3 rounded-full font-outfit font-semibold text-sm hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
                  <FaCamera className="mr-2" />
                  Scan This Product
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Scores and Analysis */}
            <div className="p-8 lg:p-12">
              {/* Score Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-light-gray rounded-xl p-4">
                    <p className="font-dm-sans text-xs text-cool-gray mb-1">Health</p>
                    <p className="font-space-grotesk font-bold text-2xl text-trust-blue">
                      {currentProduct.healthScore || 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-light-gray rounded-xl p-4">
                    <p className="font-dm-sans text-xs text-cool-gray mb-1">Safety</p>
                    <p className="font-space-grotesk font-bold text-2xl text-success-green">
                      {currentProduct.safetyScore}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-light-gray rounded-xl p-4">
                    <p className="font-dm-sans text-xs text-cool-gray mb-1">Sustain</p>
                    <p className="font-space-grotesk font-bold text-2xl text-warning-amber">
                      {currentProduct.sustainScore}
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Card - Interactive */}
              <div className="bg-gradient-to-br from-light-gray to-gray-50 rounded-2xl p-6">
                <h4 className="font-outfit font-bold text-lg text-coal-black mb-4 flex items-center">
                  Why these scores?
                  {currentProduct.verified && (
                    <span className="ml-2 bg-success-green/10 text-success-green text-xs px-2 py-1 rounded-full font-dm-sans">
                      Verified
                    </span>
                  )}
                </h4>
                
                <div className="space-y-3">
                  {currentProduct.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start group hover:bg-white rounded-lg p-2 transition-all cursor-pointer">
                      <div className={`mt-0.5 mr-3 ${
                        highlight.type === 'positive' ? 'text-success-green' :
                        highlight.type === 'warning' ? 'text-warning-amber' :
                        'text-trust-blue'
                      }`}>
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-dm-sans font-semibold text-sm text-coal-black">
                          {highlight.text}
                        </p>
                        <p className="font-inter text-xs text-cool-gray mt-0.5">
                          {highlight.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="mt-4 w-full bg-white border border-trust-blue text-trust-blue font-outfit font-semibold py-2 rounded-lg hover:bg-trust-blue hover:text-white transition-all duration-300 text-sm">
                  View Full Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-dm-sans text-cool-gray mb-4">
            Ready to scan your own products?
          </p>
          <button className="bg-trust-blue text-white font-outfit font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
            Get Early Access
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
