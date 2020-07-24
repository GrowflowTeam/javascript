module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    require.resolve('./rules/typescript'),
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
  },
};
