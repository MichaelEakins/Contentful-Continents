import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Contentful-Continents/',  // Set base path for GitHub Pages subdirectory
  build: {
    outDir: 'dist',                // Output directory for build files
    assetsDir: 'assets',           // Folder for assets (like JS, CSS)
    rollupOptions: {
      input: 'index.html',         // Specify entry point for the build process
    },
  },
});
