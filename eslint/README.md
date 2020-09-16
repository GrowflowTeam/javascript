# @growflow/eslint-config

GrowFlow's shared [ESLint](https://eslint.org/) configuration to apply styling and syntax rules across GrowFlow projects.

## Usage

Install as dev dependency:

```
yarn add @growflow/eslint-config eslint prettier -D
```

> Note: that you'll need a `.npmrc` file with Growflow's `NPM_TOKEN`.

You'll need to create a `.eslintrc.json` or `.eslintrc` file with content similar to the following:

```json
{
  "extends": ["@growflow/eslint-config"],
  "parserOptions": {
    "ecmaVersion": 6,
    "project": "./tsconfig.json"
  },
  "root": true,
  "ignorePatterns": [
    "config/*",
    "node_modules",
    "dist",
    "package.json",
    "__GENERATED__",
    "cypress",
    "jest",
    "__TESTS__",
    "*.stories.js",
    "*.spec.js"
  ]
}
```

### Usage with Prettier

This eslint configuration includes the [Prettier plugin](https://github.com/prettier/eslint-config-prettier) to apply consistent styling. It will read a `.prettierrc` file in your repo for the rules.

Make sure to [use `@growflow/prettier-config`](https://www.npmjs.com/package/@growflow/prettier-config) for GrowFlow's shared Prettier config.
