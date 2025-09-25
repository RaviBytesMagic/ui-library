import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import babel from '@rollup/plugin-babel'
import packageJson from './package.json' assert { type: 'json' }

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  // JS/TS bundle
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    external: ['react', 'react-dom'], // peer deps
    plugins: [
      resolve({ extensions }),
      commonjs(),
      svgr(),
      postcss({ extract: true, minimize: true }),
      typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
      babel({
        babelHelpers: 'bundled',
        extensions,
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', { modules: false }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript'
        ]
      })
    ],
    onwarn(warning, warn) {
      // optionally ignore leftover module directive warnings
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
      warn(warning)
    }
  },

  // Type declarations
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts({ tsconfig: './tsconfig.types.json' })]
  }
]
