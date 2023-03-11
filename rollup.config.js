import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/js/sa.js',
    output: {
        file: './dist/sa.js',
        format: 'iife',
    },
    plugins: [terser()],
};
