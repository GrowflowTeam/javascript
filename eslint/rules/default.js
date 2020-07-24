const prettierConfig = require('../../../.prettierrc');

module.exports = {
  parser: 'babel-eslint',
  plugins: ['monorepo', 'prettier'],
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
    browser: true,
  },
  rules: {
    'comma-dangle': 0,
    'arrow-body-style': 0,
    'prefer-template': 0,
    'class-methods-use-this': 0,
    'react/prefer-stateless-function': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-class-assign': 0,
    'react/require-default-props': 0,
    'func-names': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'id-length': 2,
    'react/prop-types': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'no-alert': 0,
    'max-len': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'array-callback-return': 0,
    'object-shorthand': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'react/sort-comp': 0,
    'no-nested-ternary': 0,
    indent: 0,
    'object-curly-newline': 0,
    'padded-blocks': 0,
    'no-restricted-globals': 0,
    'prefer-promise-reject-errors': 0,
    'react/jsx-wrap-multilines': 0,
    'function-paren-newline': 0,
    'react/jsx-closing-tag-location': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'prefer-rest-params': 0,
    'import/extensions': 0,

    // errors
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

    'func-style': ['error', 'expression'],
    curly: ['error', 'all'],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],

    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/named': 'error',
    // 'mocha/no-exclusive-tests': 'error',

    'prettier/prettier': ['error', prettierConfig],
    'no-unused-vars': 'warn',
    'no-console': 'off',

    // monorepo stuff
    'monorepo/no-internal-import': 'error',
    'monorepo/no-relative-import': 'error',
  },
};
