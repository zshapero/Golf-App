module.exports = {
  root: true,
  extends: ['expo', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'prettier/prettier': 'warn',
  },
  ignorePatterns: [
    'node_modules/',
    '.expo/',
    'dist/',
    'ios/',
    'android/',
    'expo-env.d.ts',
    'babel.config.js',
    'metro.config.js',
    'tailwind.config.js',
  ],
};
