import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // output directory
  },
  base: 'https://github.com/devblablalab/blablalab',
  publicDir: 'public',
  plugins: [],
});