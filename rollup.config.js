import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'src/index.ts',
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: [
      del({ targets: ['dist/*'] }),
      typescript(),
      scss(),
      postcss({ extract: true }),
      copy({
        targets: [
          { src: 'src/styles/fonts/*', dest: 'dist/fonts' }
        ]
      })
    ],
    external: Object.keys(pkg.dependencies || {}),
  },
];