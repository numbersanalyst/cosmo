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
        sun: resolve(root, 'sun/index.html'),
        mercury: resolve(root, 'mercury/index.html'),
        venusAtmosphere: resolve(root, 'venus-atmosphere/index.html'),
        venusSurface: resolve(root, 'venus-surface/index.html'),
        earth: resolve(root, 'earth/index.html'),
        moon: resolve(root, 'moon/index.html'),
        mars: resolve(root, 'mars/index.html'),
        jupiter: resolve(root, 'jupiter/index.html'),
        saturn: resolve(root, 'saturn/index.html'),
        uranus: resolve(root, 'uranus/index.html'),
        neptune: resolve(root, 'neptune/index.html'),
        test1: resolve(root, 'test/1/index.html'),
        test2: resolve(root, 'test/2/index.html'),
        test3: resolve(root, 'test/3/index.html'),
      },
    },
  },
});
