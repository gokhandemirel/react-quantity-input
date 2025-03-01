import { defineConfig } from 'tsup';

export default defineConfig(() => ({
  entry: ['src/index.tsx'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  minify: true
}));
