import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base public path (adjust for your deployment)
  base: '/challenge-bento-grid/',
  
  build: {
    // Where to output built files
    outDir: 'dist',
    
    // Directory for assets (JS, CSS, images)
    assetsDir: 'src',
    
    // Minify build
    minify: true,
    
    rollupOptions: {
      // Main entry point
      input: {
        main: resolve(__dirname, 'index.html')
      },
      
      // Ensure static assets are copied
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  
  // Development server options
  server: {
    port: 3000,
    open: true
  },
  
  // Enable sourcemaps for debugging
  sourcemap: true
});
