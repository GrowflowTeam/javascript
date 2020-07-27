module.exports = {
  extends: ['airbnb-base', require.resolve('./rules/typescript'), 'prettier'],
  rules: {},
  ignorePatterns: ['node_modules/', 'dist', 'package.json'],
};
