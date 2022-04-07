module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  env: {
    jest: true,
  },
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': 'error',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-todo': 'warn',

    // be more liberal with typescript warnings/errors since we are writing tests anyway...
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
  },
};
