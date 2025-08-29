import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import SquorTypesSection from './SquorTypesSection';
import ConsumerJourneySection from './ConsumerJourneySection';
import ConsumerBenefitsSection from './ConsumerBenefitsSection';
import RetailerValueSection from './RetailerValueSection';
import ComplianceSection from './ComplianceSection';
import IntegrationSection from './IntegrationSection';
import HowItWorks from './HowItWorks';
import DemoSection from './DemoSection';
import RetailerDemoSection from './RetailerDemoSection';
import CTASection from './CTASection';
import Footer from './Footer';

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
