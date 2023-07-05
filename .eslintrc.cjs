module.exports = {
  env: { browser: true, es2020: true, },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { 
    'ecmafeatures': {
      'jsx': true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jest'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ]
  },
}
