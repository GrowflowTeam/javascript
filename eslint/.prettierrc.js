module.exports = {
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  semi: true,
  bracketSpacing: true,
  arrowParens: 'always',
  overrides: [
    {
      files: '**/*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
