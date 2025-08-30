// Shared utility functions for Squor display

// Get Squor text color based on score value
export const getSquorColor = (score: number): string => {
  if (score >= 80) return 'text-green-700';
  if (score >= 60) return 'text-amber-700';
  if (score >= 40) return 'text-orange-700';
  return 'text-red-700';
};

// Get Squor background and border color based on score value
export const getSquorBgColor = (score: number): string => {
  if (score >= 80) return 'bg-green-50 border-green-500';
  if (score >= 60) return 'bg-amber-50 border-amber-500';
  if (score >= 40) return 'bg-orange-50 border-orange-500';
  return 'bg-red-50 border-red-500';
};

// Get flag style based on flag content
export const getFlagStyle = (flag: string): string => {
  if (flag.includes('FSSAI') || flag.includes('GTIN') || flag.includes('verified')) {
    return 'bg-trust-blue/10 text-trust-blue border-trust-blue/30';
  }
  if (flag.includes('Organic') || flag.includes('Paper')) {
    return 'bg-success-green/10 text-success-green border-success-green/30';
  }
  if (flag.includes('Plastic') || flag.includes('Palm oil')) {
    return 'bg-warning-amber/10 text-warning-amber border-warning-amber/30';
  }
  return 'bg-gray-100 text-cool-gray border-gray-300';
};
