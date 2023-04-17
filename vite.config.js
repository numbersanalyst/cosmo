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
        select: resolve(root, 'select/index.html'),
        earth: resolve(root, 'earth/index.html'),
        test1: resolve(root, 'test/1/index.html'),
        test2: resolve(root, 'test/2/index.html'),
        test3: resolve(root, 'test/3/index.html'),
      },
    },
  },
});