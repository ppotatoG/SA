import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/js/es-sa.js',
  output: {
    file: './dist/es-sa.js',
    format: 'iife',
  },
  plugins: [terser()],
};
