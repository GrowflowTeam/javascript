module.exports = {
  extends: ['@growflow'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  root: true,
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
