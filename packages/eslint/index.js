const { testFiles } = require('./files');

module.exports = {
  extends: ['./core'],
  overrides: [
    {
      files: testFiles,
      extends: ['./jest'],
    },
  ],
};
