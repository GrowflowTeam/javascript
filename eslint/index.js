const { devDepFiles, testFiles } = require('./files');

module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'unicorn',
    'simple-import-sort',
    'monorepo',
  ],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:monorepo/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    // sort imports
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',

    // we use typescript; ain't need no prop-types
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // who doesn't love a good nested ternary?
    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'off',

    // I'm not sure what issue this one is trying to prevent. it's fine; use those unescaped entities
    'react/no-unescaped-entities': 'off',

    // don't allow anys to propagate
    '@typescript-eslint/no-explicit-any': 'error',

    // implicit types are fine as long as it isn't implicit any
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // these are prohibitively strict when migrating a codebase to TS
    // make them warnings instead
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',

    // this is redundant when using typescript types
    'consistent-return': 'off',

    // airbnb doesn't like using stuff that we can use since we target modern browsers/node
    'no-restricted-syntax': 'off',

    // it's probably fine
    'no-await-in-loop': 'warn',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],

    // https://stackoverflow.com/a/63833015/316108
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',

    // it's fine, just relax
    'no-param-reassign': 'off',
    'no-plusplus': 'off',

    // just relax, unicorn
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/number-literal-case': 'off',

    // we use async/await instead of promise chains and don't want to be forced to return in a then()
    'promise/always-return': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.3.0/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignorevoid
    'no-void': ['error', { allowAsStatement: true }],

    // when using typescript, this isn't an issue
    'react/jsx-props-no-spreading': 'off',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: devDepFiles },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist',
    'package.json',
    '__generated__',
    '.eslintrc.js',
  ],
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        // allow returning null from React components
        'unicorn/no-null': 'off',
      },
    },
    {
      files: testFiles,
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/consistent-test-it': 'error',
        'jest/lowercase-name': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',

        'jest/no-if': 'warn',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-todo': 'warn',

        // allow these rules for mocking purposes
        'global-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        // be more liberal with typescript warnings/errors since we are writing tests anyway...
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // without typescript, this can be bad -- don't do it
        'react/jsx-props-no-spreading': 'error',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
