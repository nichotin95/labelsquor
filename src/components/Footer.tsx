import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Integrations', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Privacy', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo variant="mobile" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
              The global standard for product label trust — clarity for consumers, compliance for retailers.
            </p>
          </div>
          
          {/* Mobile Accordion Style Links */}
          <div className="space-y-6 mb-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo variant="desktop" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The global standard for product label trust — clarity for consumers, compliance for retailers.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 capitalize">{category}</h3>
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} LabelSquor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
