import React, { useState } from 'react';
import { FaCamera, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductExamples: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [
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
      image: "🥤",
      highlights: ["High protein", "Live cultures", "No artificial flavors"]
    },
    {
      name: "Organic Honey",
      brand: "Nature Nate's",
      category: "Sweeteners",
      scores: { health: 79, safety: 94, sustainability: 85, verification: 92 },
      image: "🍯",
      highlights: ["Raw & unfiltered", "Single source", "BPA-free packaging"]
    },
    {
      name: "Extra Virgin Olive Oil",
      brand: "California Olive Ranch",
      category: "Oils",
      scores: { health: 91, safety: 96, sustainability: 81, verification: 88 },
      image: "🫒",
      highlights: ["Cold pressed", "Single origin", "Harvest date labeled"]
    },
    {
      name: "Quinoa Chips",
      brand: "Simply 7",
      category: "Snacks",
      scores: { health: 76, safety: 90, sustainability: 70, verification: 83 },
      image: "🍿",
      highlights: ["Gluten-free", "Non-GMO", "Whole grain"]
    }
  ];

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 animate-pulse" />
            Real Product Examples
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            See <span className="text-blue-600">LabelSquor</span> in Action
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Try scanning these common products to see how our scoring system works
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentProduct * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={prevProduct}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Previous product"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextProduct}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Next product"
            >
              <FaChevronRight className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProduct 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Tablet/Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 6).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Want to Try More Products?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Get early access to scan any product in your pantry
            </p>
            <button className="bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{product.image}</div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {product.brand} • {product.category}
        </p>
      </div>
      
      {/* Squor Scores Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {[
          { name: "Health", score: product.scores.health, color: "text-green-600", bg: "bg-green-50" },
          { name: "Safety", score: product.scores.safety, color: "text-blue-600", bg: "bg-blue-50" },
          { name: "Sustain.", score: product.scores.sustainability, color: "text-emerald-600", bg: "bg-emerald-50" },
          { name: "Verified", score: product.scores.verification, color: "text-purple-600", bg: "bg-purple-50" }
        ].map((score, idx) => (
          <div key={idx} className={`${score.bg} rounded-lg p-2 sm:p-3 text-center`}>
            <div className={`text-xl sm:text-2xl font-bold ${score.color}`}>
              {score.score}
            </div>
            <div className="text-xs text-gray-600">{score.name}</div>
          </div>
        ))}
      </div>
      
      {/* Product Highlights */}
      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
        {product.highlights.map((highlight: string, idx: number) => (
          <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
      
      {/* Scan Button */}
      <button className="w-full bg-blue-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group">
        <FaCamera className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        <span className="text-sm sm:text-base">Try Scanning</span>
      </button>
    </div>
  );
};

export default ProductExamples;
