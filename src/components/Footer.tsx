import React from 'react';
import Logo from './Logo';
import EmailCapture from './EmailCapture';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'For Consumers', href: '#consumers' },
      { name: 'For Retailers', href: '#retailers' },
      { name: 'API Access', href: '#' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Brand Guidelines', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  };

  return (
    <footer className="bg-coal-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section with Email Capture */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-outfit font-bold text-2xl mb-2">Stay Updated</h3>
              <p className="font-dm-sans text-gray-400">
                Get the latest updates on product transparency and compliance
              </p>
            </div>
            <div>
              <EmailCapture variant="inline" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="col-span-2">
            <div className="mb-6">
              <Logo variant="desktop" theme="dark" />
            </div>
            <p className="font-dm-sans text-sm text-gray-400 leading-relaxed mb-4">
              LabelSquor — the heartbeat of product labels
            </p>
            <p className="font-inter text-xs text-gray-500 leading-relaxed">
              The global standard for product label trust — clarity for consumers, compliance for retailers.
            </p>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-outfit font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
                {category}
              </h3>
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block font-dm-sans text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <p className="font-dm-sans text-xs sm:text-sm text-gray-400">
                &copy; {new Date().getFullYear()} LabelSquor. All rights reserved.
              </p>
              <span className="mx-3 text-gray-600">|</span>
              <a href="#" className="font-dm-sans text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="mx-3 text-gray-600">|</span>
              <a href="#" className="font-dm-sans text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;