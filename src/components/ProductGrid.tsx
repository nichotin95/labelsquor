import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ImagePlaceholder from './ImagePlaceholder';
import productsData from '../data/products.json';

const ProductGrid: React.FC = () => {
  // Get score color based on value
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-green';
    if (score >= 60) return 'text-warning-amber';
    if (score >= 40) return 'text-orange-500';
    return 'text-error-red';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-success-green/10';
    if (score >= 60) return 'bg-warning-amber/10';
    if (score >= 40) return 'bg-orange-500/10';
    return 'bg-error-red/10';
  };

  // Get flag type for styling
  const getFlagStyle = (flag: string) => {
    if (flag.includes('FSSAI') || flag.includes('GTIN') || flag.includes('verified')) {
      return 'bg-trust-blue/10 text-trust-blue';
    }
    if (flag.includes('Organic') || flag.includes('Paper')) {
      return 'bg-success-green/10 text-success-green';
    }
    if (flag.includes('Plastic') || flag.includes('Palm oil')) {
      return 'bg-warning-amber/10 text-warning-amber';
    }
    return 'bg-gray-100 text-cool-gray';
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-trust-blue/10 rounded-full px-4 py-2 mb-4">
            <span className="font-dm-sans text-sm font-semibold text-trust-blue">Product Library</span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-coal-black mb-4">
            Real Products, Real Scores
          </h2>
          <p className="font-dm-sans text-lg text-cool-gray max-w-3xl mx-auto">
            Browse through common Indian products and their LabelSquor analysis
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-4 relative">
                <ImagePlaceholder 
                  src={product.image.startsWith('/images/') ? undefined : product.image}
                  alt={product.name}
                  width={160}
                  height={180}
                  placeholderText={product.name}
                  className="mx-auto h-full w-auto object-contain"
                  rounded="lg"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Header */}
                <div className="mb-3">
                  <div className="font-dm-sans text-xs font-semibold text-trust-blue mb-0.5">
                    {product.brand}
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-coal-black mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-dm-sans text-cool-gray">
                    <span>{product.category}</span>
                    <span>•</span>
                    <span>{product.pack_size}</span>
                  </div>
                </div>

                {/* Scores Grid */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className={`rounded-lg p-2 text-center ${getScoreBgColor(product.scores.health)}`}>
                    <div className="font-space-grotesk font-bold text-lg mb-0.5 leading-none">
                      <span className={getScoreColor(product.scores.health)}>{product.scores.health}</span>
                    </div>
                    <div className="text-xs font-dm-sans text-gray-600">Health</div>
                  </div>
                  <div className={`rounded-lg p-2 text-center ${getScoreBgColor(product.scores.safety)}`}>
                    <div className="font-space-grotesk font-bold text-lg mb-0.5 leading-none">
                      <span className={getScoreColor(product.scores.safety)}>{product.scores.safety}</span>
                    </div>
                    <div className="text-xs font-dm-sans text-gray-600">Safety</div>
                  </div>
                  <div className={`rounded-lg p-2 text-center ${getScoreBgColor(product.scores.sustainability)}`}>
                    <div className="font-space-grotesk font-bold text-lg mb-0.5 leading-none">
                      <span className={getScoreColor(product.scores.sustainability)}>{product.scores.sustainability}</span>
                    </div>
                    <div className="text-xs font-dm-sans text-gray-600">Sustain</div>
                  </div>
                  <div className={`rounded-lg p-2 text-center ${getScoreBgColor(product.scores.verification)}`}>
                    <div className="font-space-grotesk font-bold text-lg mb-0.5 leading-none">
                      <span className={getScoreColor(product.scores.verification)}>{product.scores.verification}</span>
                    </div>
                    <div className="text-xs font-dm-sans text-gray-600">Verify</div>
                  </div>
                </div>

                {/* Why Card (Compact) */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="font-outfit font-semibold text-xs text-coal-black mb-2">Key Points:</div>
                  <ul className="space-y-1">
                    {product.why_card.slice(0, 2).map((reason, idx) => (
                      <li key={idx} className="text-xs font-inter text-gray-700 flex items-start">
                        <span className="mr-1">•</span>
                        <span className="line-clamp-1">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Flags (Chips) */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.flags.slice(0, 2).map((flag, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-0.5 rounded-full text-xs font-inter ${getFlagStyle(flag)}`}
                    >
                      {flag}
                    </span>
                  ))}
                  {product.flags.length > 2 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-inter bg-gray-100 text-gray-500">
                      +{product.flags.length - 2}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-trust-blue text-white font-outfit font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm flex items-center justify-center group">
                  Experience Squor
                  <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-dm-sans text-cool-gray mb-4">
            Can't find your product?
          </p>
          <button className="bg-white border-2 border-trust-blue text-trust-blue font-outfit font-semibold px-8 py-3 rounded-full hover:bg-trust-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
            Request Analysis
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
