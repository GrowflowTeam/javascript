const prettierConfig = require('../../../.prettierrc.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['monorepo', 'prettier', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
    // jest: true,
    browser: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Typescript specific rules
    '@typescript-eslint/indent': [2, 2],
    // turned off rules
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'warn',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',

    'import/extensions': 0,
    'sort-imports': 1,

    // warnings
    // -> we don't want warnings

    // errors
    'no-alert': 'error',
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: false },
    ],
    'prefer-destructuring': [
      'warn',
      {
        AssignmentExpression: { object: false, array: false },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
    ],

    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
    curly: ['error', 'all'],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/named': 'error',

    // Added 1/4/2020
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',

    // monorepo stuff
    'monorepo/no-internal-import': 'error',
    'monorepo/no-relative-import': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'security/detect-object-injection': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'prettier/prettier': ['error', prettierConfig],
      },
    },
  ],
};
