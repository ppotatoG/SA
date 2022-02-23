import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default [
	{
		input: 'src/js/sa.js',
		output: {
			file: 'dist/sa.js',
			name: 'SA',
			format: 'umd',
		},
		plugins: [
			postcss({
				extract: 'sa.css',
				plugins: [autoprefixer, cssnano],
			}),
			resolve(),
			commonjs(),
		],
	},
];