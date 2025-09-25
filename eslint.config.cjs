const tsParser = require('@typescript-eslint/parser')

module.exports = [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'], // only src files

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
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
        typescript: { alwaysTryTypes: true },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
      }
    },

    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'error',
      'no-duplicate-imports': 'warn',
      'no-restricted-imports': ['error', { patterns: ['@mui/*/*/*'] }],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
      ],
      'prettier/prettier': ['error']
    }
  }
]
