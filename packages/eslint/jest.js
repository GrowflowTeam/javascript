module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  env: {
    jest: true,
  },
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-hooks-on-top': 'error',

    'jest/no-if': 'warn',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-todo': 'warn',

    // allow these rules for mocking purposes
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // be more liberal with typescript warnings/errors since we are writing tests anyway...
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
  },
};
