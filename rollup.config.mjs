import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import packageJson from './package.json' assert { type: 'json' }

export default [
  // JS bundle
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    external: ['react', 'react-dom'], // peer deps
    plugins: [
      resolve(),
      commonjs(),
      svgr(),
      postcss({ extract: true, minimize: true }),
      typescript({ tsconfig: './tsconfig.json' })
    ]
  },
  // Type declarations
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts({ tsconfig: './tsconfig.types.json' })]
  }
]
