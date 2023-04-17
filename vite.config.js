import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        select: resolve(__dirname, 'subpages/select.html'),
        earth: resolve(__dirname, 'subpages/earth.html'),
      },
    },
  },
});