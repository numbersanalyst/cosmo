import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

export default defineConfig({
  root,
  base: '',
  build: {
    outDir: '../dist',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        select: resolve(root, 'subpages/select.html'),
        earth: resolve(root, 'subpages/earth.html'),
      },
    },
  },
});
