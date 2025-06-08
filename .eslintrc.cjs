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
    'max-len': ['warn', { code: 80 }],
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignore: [0, 1, 2, 40], enforceConst: true },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/vite.config.{js,ts,mjs,cjs}',
          '**/*.config.{js,ts}',
          '**/*.test.{js,ts,tsx}',
          '**/test/**',
        ],
      },
    ],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
