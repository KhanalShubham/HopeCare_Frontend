import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Optional: if using Emotion
      babel: {
        plugins: ['@emotion/babel-plugin'] // Optional: if using Emotion
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') }
    ]
  },
  server: {
    port: 3000,
    open: true, // Automatically open browser
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";` // Optional: if using SCSS
      }
    }
  }
});