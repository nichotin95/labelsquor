import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
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
      <Features mode={mode} />
      {mode === 'consumer' && <ProductExamples />}
      <CallToAction mode={mode} />
      <Footer />
    </div>
  );
}

export default App;
