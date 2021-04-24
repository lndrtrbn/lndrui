import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: './dist/index.js', format: 'esm' }
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      typescript(),
      scss(),
      postcss({ extract: true }),
    ],
    external: Object.keys(pkg.dependencies || {}),
  },
];