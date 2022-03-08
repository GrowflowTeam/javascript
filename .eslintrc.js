require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@growflow'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  root: true,
};
