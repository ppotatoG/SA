import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/js/sa.js',
  output: {
    file: './dist/sa.js',
    format: 'umd',
    name: 'sa',
  },
  plugins: [resolve(), commonjs(), terser()],
};
