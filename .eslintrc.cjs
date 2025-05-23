module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'unused-imports'],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'max-lines-per-function': ['error', 40],
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignore: [0, 1], enforceConst: true },
    ],
    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'unused-imports/no-unused-imports': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
