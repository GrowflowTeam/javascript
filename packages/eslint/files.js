exports.testFiles = [
  '**/__test__/**/*.js',
  '**/__test__/**/*.jsx',
  '**/__test__/**/*.ts',
  '**/__test__/**/*.tsx',
  '**/__tests__/**/*.js',
  '**/__tests__/**/*.jsx',
  '**/__tests__/**/*.ts',
  '**/__tests__/**/*.tsx',
  '**/test/**/*.js',
  '**/test/**/*.jsx',
  '**/test/**/*.ts',
  '**/test/**/*.tsx',
  '**/tests/**/*.js',
  '**/tests/**/*.jsx',
  '**/tests/**/*.ts',
  '**/tests/**/*.tsx',
  '**/*.test.js',
  '**/*.test.jsx',
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/*.spec.js',
  '**/*.spec.jsx',
  '**/*.spec.ts',
  '**/*.spec.tsx',
];

exports.devDepFiles = [
  ...exports.testFiles,
  '**/cypress/**/*.ts',
  '**/cypress/**/*.tsx',
  '**/cypress/**/*.js',
  '**/cypress/**/*.jsx',
  '**/craco.config.js',
  '**/__mocks__/*.ts',
  '**/__mocks__/*.tsx',
  '**/__mocks__/*.js',
  '**/__mocks__/*.jsx',
  '**/jest.config.ts',
  '**/jest.config.js',
  'webpack.config.js',
  'webpack.config.ts',
];
