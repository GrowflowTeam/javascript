# @growflow/eslint-config

GrowFlow's shared [ESLint](https://eslint.org/) configuration to apply styling and syntax rules across GrowFlow projects.

## Usage

Install as a dev dependency. ESLint plugins used by this config must also be installed within your project. This is a [current limitation of ESLint](https://github.com/eslint/rfcs/pull/5). You can easily install this package and all of its peer dependencies with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps):

```
npx install-peerdeps --dev -a <auth_token> @growflow/eslint-config
```

> Note: that you'll need a `.npmrc` file with Growflow's `NPM_TOKEN` and you'll also need to pass that token to the `install-peerdeps` CLI (since it doesn't look at the `.npmrc` for some reason).

You can then create a `.eslintrc.js` file with content similar to the following:

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

### Usage with TypeScript

Make sure to also bring in [GrowFlow's shared TypeScript config](https://www.npmjs.com/package/@growflow/tsconfig) for more project synergy and compilation strategery.
