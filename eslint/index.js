module.exports = {
  extends: ['airbnb-base', require.resolve('./rules/default'), 'prettier'],
  rules: {},
  ignorePatterns: ['node_modules/', 'dist', 'package.json'],
};
