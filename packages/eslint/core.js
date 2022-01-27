const { devDepFiles } = require('./files');

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
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:monorepo/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // sort imports
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',

    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

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

    // this is really only an issue if you are using var (instead of let/const), which we are not
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // https://stackoverflow.com/a/63833015/316108
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

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
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-array-callback-reference': 'off',

    // we use async/await instead of promise chains and don't want to be forced to return in a then()
    'promise/always-return': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.3.0/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignorevoid
    'no-void': ['error', { allowAsStatement: true }],

    // when using typescript, this isn't an issue
    'react/jsx-props-no-spreading': 'off',

    // don't mess up 'dem arrays
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'error',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: devDepFiles },
    ],

    // override base configuration allowing single/double underscores in some contexts (e.g. export const __test__)
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist',
    'package.json',
    '__generated__',
    '_generated.ts',
    '_generated.js',
    '.eslintrc.js',
    '.next',
  ],
  overrides: [
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
