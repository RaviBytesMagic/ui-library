import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json' assert { type: 'json' }

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    external: ['react', 'react-dom'],
    plugins: [
      resolve({ extensions }),
      commonjs(),
      svgr(),
      postcss({
        extract: true,
        minimize: true,
        plugins: [tailwindcss(), autoprefixer()]
      }),
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
    ]
  },
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts({ tsconfig: './tsconfig.types.json' })],
    external: [/\.css$/]
  }
]
