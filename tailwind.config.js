/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'monospace'],
      },
      colors: {
        'trust-blue': '#2A66FF',
        'coal-black': '#111111',
        'cool-gray': '#6B7280',
        'pulse-green': '#22C55E',
        'heartbeat-red': '#EF4444',
        'gradient-purple': '#9333EA',
      },
      backgroundImage: {
        'blue-purple-gradient': 'linear-gradient(135deg, #2A66FF 0%, #9333EA 100%)',
      },
    },
  },
  plugins: [],
};
