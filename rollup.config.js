import babel from 'rollup-plugin-babel';

const pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  plugins: [
    babel(),
  ],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'whenDomReady',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
