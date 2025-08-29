import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SquorTypesSection from './components/SquorTypesSection';
import ConsumerJourneySection from './components/ConsumerJourneySection';
import ConsumerBenefitsSection from './components/ConsumerBenefitsSection';
import RetailerValueSection from './components/RetailerValueSection';
import ComplianceSection from './components/ComplianceSection';
import IntegrationSection from './components/IntegrationSection';
import HowItWorks from './components/HowItWorks';
import DemoSection from './components/DemoSection';
import RetailerDemoSection from './components/RetailerDemoSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App(): JSX.Element {
  const [mode, setMode] = useState<'consumer' | 'retailer'>('consumer');

  return (
    <div className="min-h-screen bg-white">
      <Header mode={mode} onModeChange={setMode} />
      <main>
        <Hero mode={mode} />
        {mode === 'consumer' ? (
          <>
            <SquorTypesSection />
            <ConsumerJourneySection />
            <ConsumerBenefitsSection />
            <HowItWorks />
            <DemoSection />
          </>
        ) : (
          <>
            <RetailerValueSection />
            <ComplianceSection />
            <IntegrationSection />
            <RetailerDemoSection />
          </>
        )}
        <CTASection mode={mode} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
