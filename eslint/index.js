module.exports = {
  extends: [
    'airbnb',
    '@growflow/eslint-config/rules/typescript',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // we use typescript; ain't need no prop-types
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // who doesn't love a good nested ternary?
    'no-nested-ternary': 'off',

    // it's not 2018 anymore, let's put our JSX where we want it
    'react/jsx-filename-extension': 'off',

    // this shit is just broken when using with React/TS for some reason
    'no-use-before-define': 'off',

    // I'm not sure what issue this one is trying to prevent. it's fine; use those unescaped entities
    'react/no-unescaped-entities': 'off',
  },
  ignorePatterns: ['node_modules/', 'dist', 'package.json'],
};
