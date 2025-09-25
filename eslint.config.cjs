const tsParser = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'], // Ignore everything except src
    files: ['src/**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        tsconfigRootDir: __dirname
        // ✅ no "project" so it doesn't require type-aware linting on every run
      }
    },

    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      import: require('eslint-plugin-import'),
      'unused-imports': require('eslint-plugin-unused-imports'),
      prettier: require('eslint-plugin-prettier')
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json'] // respects src/**/*.ts,tsx
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },

    rules: {
      /* ✅ React */
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      /* ✅ Imports */
      'import/no-unresolved': 'error',
      'no-duplicate-imports': 'warn',
      'no-restricted-imports': ['error', { patterns: ['@mui/*/*/*'] }],

      /* ✅ Clean code */
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
      ],

      /* ✅ Prettier */
      'prettier/prettier': ['error']
    }
  }
]
