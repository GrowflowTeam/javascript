# @growflow/eslint-config

GrowFlow's shared [ESLint](https://eslint.org/) configuration to apply styling and syntax rules across GrowFlow projects.

## Usage

Install as dev dependency:

```
yarn add @growflow/eslint-config eslint prettier -D
```

> Note: that you'll need a `.npmrc` file with Growflow's `NPM_TOKEN`.

You'll need to create a `.eslintrc.js` file with content similar to the following:

```js
module.exports = {
  extends: ['@growflow'],
  parserOptions: {
    project: 'tsconfig.json',
  },
};
```

### Usage with Prettier

This eslint configuration includes the [Prettier plugin](https://github.com/prettier/eslint-config-prettier) to apply consistent styling. It will read a `.prettierrc` file in your repo for the rules.

Make sure to [use `@growflow/prettier-config`](https://www.npmjs.com/package/@growflow/prettier-config) for GrowFlow's shared Prettier config.
