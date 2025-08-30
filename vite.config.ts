import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use environment variable to determine base path
// For custom domain (labelsquor.com): set to '/'
// For GitHub Pages subdirectory: set to '/labelsquor/'
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base: base,
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
