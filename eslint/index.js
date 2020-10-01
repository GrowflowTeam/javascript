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

    // it's not 2018 anymore, let's put our JSX where we want it
    'react/jsx-filename-extension': 'off',

    // I'm not sure what issue this one is trying to prevent. it's fine; use those unescaped entities
    'react/no-unescaped-entities': 'off',

    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],

    // Makes no sense to allow type inference for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],

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

    // just relax, unicorn
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.3.0/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignorevoid
    'no-void': ['error', { allowAsStatement: true }],
  },
  ignorePatterns: ['node_modules/', 'dist', 'package.json', '__generated__'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],
};
