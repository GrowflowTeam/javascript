module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    require.resolve('./rules/typescript'),
    require.resolve('./rules/react'),
    'prettier',
    'prettier/react',
  ],
  rules: {},
};
