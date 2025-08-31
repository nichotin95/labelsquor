import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ModeSwitch from './components/ModeSwitch';
import ForConsumers from './components/ForConsumers';
import ForRetailers from './components/ForRetailers';
import ForBrands from './components/ForBrands';
import CaseStudies from './components/CaseStudies';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import DemoSection from './components/DemoSection';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState<'consumer' | 'retailer'>('consumer');

  return (
    <div className="min-h-screen bg-white">
      <Navigation mode={mode} onModeChange={setMode} />
      <Hero mode={mode} />
      
      {/* Common section - How It Works */}
      <HowItWorks />
      
      {/* Mode Switcher for clear separation */}
      <ModeSwitch mode={mode} onModeChange={setMode} />
      
      {/* Mode-specific content with visual separator */}
      <div className="relative">
        {/* Visual separator line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-trust-blue/30 to-transparent"></div>
        
        {mode === 'consumer' ? (
          <div className="animate-fadeIn">
            <ForConsumers />
            <InteractiveDemo />
            {/* ProductGrid removed - InteractiveDemo handles product showcase */}
          </div>
        ) : (
          <div className="animate-fadeIn">
            <ForRetailers />
            <ForBrands />
            <CaseStudies />
            <DemoSection />
          </div>
        )}
      </div>
      
      {/* Common sections */}
      <CallToAction mode={mode} />
      <Footer />
    </div>
  );
}

export default App;