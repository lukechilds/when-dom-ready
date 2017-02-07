import babel from 'rollup-plugin-babel';
import camelCase from 'camelcase';

const pkg = require('./package.json');

export default {
	entry: 'src/index.js',
	plugins: [
		babel()
	],
	targets: [
		{
			dest: pkg.main,
			format: 'umd',
			moduleName: camelCase(pkg.name),
			sourceMap: true
		},
		{
			dest: pkg.module,
			format: 'es',
			sourceMap: true
		}
	]
};
