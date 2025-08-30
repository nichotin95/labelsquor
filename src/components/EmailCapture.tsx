import React, { useState } from 'react';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

interface EmailCaptureProps {
  variant?: 'inline' | 'standalone';
  className?: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ variant = 'inline', className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Using Formspree or any email service
    // Replace 'YOUR_FORM_ID' with actual Formspree form ID
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks! We\'ll be in touch soon.');
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  if (variant === 'standalone') {
    return (
      <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
        <div className="text-center mb-6">
          <h3 className="font-outfit font-bold text-2xl text-coal-black mb-2">
            Join the Waitlist
          </h3>
          <p className="font-dm-sans text-cool-gray">
            Be the first to know when LabelSquor launches
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cool-gray" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full font-dm-sans focus:outline-none focus:border-trust-blue transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-trust-blue text-white font-outfit font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Submitting...' : 'Get Early Access'}
          </button>
          {message && (
            <p className={`text-sm font-dm-sans text-center ${
              status === 'success' ? 'text-success-green' : 'text-error-red'
            }`}>
              {status === 'success' && <FaCheckCircle className="inline mr-1" />}
              {message}
            </p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <p className="font-dm-sans text-sm text-cool-gray mb-3">Sign up for early access to LabelSquor</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cool-gray text-sm" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full font-dm-sans text-sm focus:outline-none focus:border-trust-blue transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-trust-blue text-white font-outfit font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
        </button>
      </form>
      {message && (
        <p className={`text-xs font-dm-sans mt-2 ${
          status === 'success' ? 'text-success-green' : 'text-error-red'
        }`}>
          {status === 'success' && <FaCheckCircle className="inline mr-1" />}
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailCapture;
