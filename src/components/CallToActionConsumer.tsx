import React from 'react';
import { FaApple, FaGooglePlay, FaQrcode } from 'react-icons/fa';
import EmailCapture from './EmailCapture';

const CallToActionConsumer: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-trust-blue to-indigo-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Start Making <span className="text-yellow-300">Informed Choices</span> Today
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join 100,000+ consumers who trust LabelSquor to decode product labels instantly
          </p>

          {/* App Download Section */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <h3 className="font-outfit font-semibold text-xl text-white mb-6">
              Get the Free App
            </h3>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              {/* QR Code */}
              <div className="bg-white rounded-xl p-4">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FaQrcode className="w-20 h-20 text-coal-black" />
                </div>
                <p className="font-dm-sans text-xs text-coal-black mt-2">Scan to download</p>
              </div>
              
              {/* Or Divider */}
              <div className="text-white font-dm-sans">OR</div>
              
              {/* App Store Buttons */}
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <FaApple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <FaGooglePlay className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Email Capture for Web Users */}
          <div className="mb-8">
            <p className="font-dm-sans text-sm text-white/80 mb-4">
              Or get early access to our web version
            </p>
            <EmailCapture variant="inline" theme="dark" />
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-yellow-300">★★★★★</span>
              <span className="font-dm-sans text-sm">4.8/5 App Store</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-dm-sans text-sm">100K+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-dm-sans text-sm">2.5M+ Products Scanned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionConsumer;
