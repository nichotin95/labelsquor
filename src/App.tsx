import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// Consumer-specific components
import HowItWorksConsumer from './components/HowItWorksConsumer';
import ForConsumers from './components/ForConsumers';
import InteractiveDemo from './components/InteractiveDemo';
import TrustSection from './components/TrustSection';
import CallToActionConsumer from './components/CallToActionConsumer';

// Retailer-specific components
import HowItWorksRetailer from './components/HowItWorksRetailer';
import ForRetailers from './components/ForRetailers';
import ForBrands from './components/ForBrands';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import CaseStudies from './components/CaseStudies';
import CallToActionRetailer from './components/CallToActionRetailer';

import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState<'consumer' | 'retailer'>('consumer');

  return (
    <div className="min-h-screen bg-white">
      <Navigation mode={mode} onModeChange={setMode} />
      <Hero mode={mode} />
      
      {/* Completely separate content for each mode */}
      {mode === 'consumer' ? (
        // Consumer Journey
        <div className="animate-fadeIn">
          <InteractiveDemo />
          <HowItWorksConsumer />
          <ForConsumers />
          <TrustSection />
          <CallToActionConsumer />
              </div>
            ) : (
        // Retailer/Brand Journey
        <div className="animate-fadeIn">
          <HowItWorksRetailer />
          <ForRetailers />
          <ForBrands />
          <AnalyticsDashboard />
          <CaseStudies />
          <CallToActionRetailer />
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;