import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // output directory
  },
  base: '/blablalab',
  publicDir: 'public',
  plugins: [],
});