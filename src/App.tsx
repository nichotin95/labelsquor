import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ForConsumers from './components/ForConsumers';
import ForRetailers from './components/ForRetailers';
import HowItWorks from './components/HowItWorks';
import DemoSection from './components/DemoSection';
import Features from './components/Features';
import ProductExamples from './components/ProductExamples';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState<'consumer' | 'retailer'>('consumer');

  return (
    <div className="min-h-screen bg-white">
      <Navigation mode={mode} onModeChange={setMode} />
      <Hero mode={mode} />
      <HowItWorks />
      <ForConsumers />
      <ForRetailers />
      <DemoSection />
      <Features mode={mode} />
      {mode === 'consumer' && <ProductExamples />}
      <CallToAction mode={mode} />
      <Footer />
    </div>
  );
}

export default App;