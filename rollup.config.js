import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      typescript(),
      scss()
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];