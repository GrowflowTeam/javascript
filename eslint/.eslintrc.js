module.exports = {
  extends: ['./index.js', './react.js'],
  rules: {
    'comma-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist', 'package.json'],
};
