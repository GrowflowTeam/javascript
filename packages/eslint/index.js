const { testFiles } = require('./files');

module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'unicorn',
    'simple-import-sort',
    'monorepo',
  ],
  extends: ['./core'],
  overrides: [
    {
      files: testFiles,
      extends: ['./jest'],
    },
  ],
};
