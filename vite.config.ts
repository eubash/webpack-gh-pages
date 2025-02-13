import { defineConfig, loadEnv } from 'vite';

//We need to use loadEnv because vite.config is evaluated before vite loads the .env file and exposes the variables
const env = loadEnv(process.env.NODE_ENV as string, process.cwd(), 'VITE_');

export default defineConfig({
  base: env.VITE_PREFIX,  // This sets the prefix for all paths

  build: {
    // Output directory for production build
    outDir: 'dist',
  },

  server: {
    // For development, we use Vite's built-in handling for SPA
    open: true
  },

  plugins: [
    // You can add any plugins here as required (like for React, Vue, etc.)
  ],
});

