import React, { useState } from 'react';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

interface EmailCaptureProps {
  variant?: 'inline' | 'stacked';
  theme?: 'light' | 'dark';
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ variant = 'inline', theme = 'light' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
      }, 3000);
    }, 1000);
  };

  const isDark = theme === 'dark';

  if (variant === 'stacked') {
    return (
      <div className="w-full max-w-md mx-auto">
        <h3 className={`font-outfit font-semibold text-lg mb-3 ${isDark ? 'text-white' : 'text-coal-black'}`}>
          Sign up for early access to LabelSquor
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-cool-gray'}`} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full pl-12 pr-4 py-3 rounded-full border ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40' 
                  : 'bg-white border-gray-200 text-coal-black placeholder-gray-400 focus:border-trust-blue'
              } focus:outline-none transition-all`}
              disabled={status === 'loading' || status === 'success'}
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full py-3 rounded-full font-outfit font-semibold transition-all duration-300 flex items-center justify-center group ${
              status === 'success'
                ? 'bg-success-green text-white'
                : isDark
                ? 'bg-white text-trust-blue hover:bg-gray-100'
                : 'bg-trust-blue text-white hover:bg-blue-700'
            } disabled:opacity-50`}
          >
            {status === 'loading' ? (
              'Joining...'
            ) : status === 'success' ? (
              '✓ Welcome to LabelSquor!'
            ) : (
              <>
                Join Waitlist
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div className="w-full max-w-md">
      <p className={`font-dm-sans text-sm mb-3 ${isDark ? 'text-white/80' : 'text-cool-gray'}`}>
        Sign up for early access to LabelSquor
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <FaEnvelope className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm ${isDark ? 'text-gray-400' : 'text-cool-gray'}`} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full pl-10 pr-4 py-2.5 rounded-full border text-sm ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40' 
                : 'bg-white border-gray-200 text-coal-black placeholder-gray-400 focus:border-trust-blue'
            } focus:outline-none transition-all`}
            disabled={status === 'loading' || status === 'success'}
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success' || !email}
          className={`px-6 py-2.5 rounded-full font-outfit font-semibold text-sm transition-all duration-300 ${
            status === 'success'
              ? 'bg-success-green text-white'
              : 'bg-trust-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
        >
          {status === 'loading' ? (
            '...'
          ) : status === 'success' ? (
            '✓'
          ) : (
            'Join Waitlist'
          )}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="mt-2 text-sm font-dm-sans text-success-green">
          Thanks! We'll be in touch soon.
        </p>
      )}
    </div>
  );
};

export default EmailCapture;