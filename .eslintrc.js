module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  rules: {
    'import/extensions': ['error', 'always', {ignorePackages: true} ],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
};
