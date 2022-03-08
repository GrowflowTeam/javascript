# GrowFlow Shared ESLint Configuration

> Shareable [ESLint](https://eslint.org/) configuration to apply consistent syntax and styling rules across GrowFlow projects.

## Usage

You can install this package and all of its peer dependencies with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps):

```
npx install-peerdeps --dev @growflow/eslint-config
```

You can then create a `.eslintrc.js` file with content similar to the following:

```js
// see https://www.npmjs.com/package/@rushstack/eslint-patch
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@growflow'],
  parserOptions: {
    project: 'tsconfig.json',
  },
};
```

This will apply the core eslint config settings as well as settings to eslint your tests with Jest. If you are not using Jest or only want to include the core settings for whatever reason, you can extend the core config:

```js
// see https://www.npmjs.com/package/@rushstack/eslint-patch
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@growflow/eslint-config/core'],
  parserOptions: {
    project: 'tsconfig.json',
  },
};
```

Or if you only want to include the Jest configuration within an `.eslintrc.js` within a `test` folder, you can do that as well:

```js
// see https://www.npmjs.com/package/@rushstack/eslint-patch
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['@growflow/eslint-config/jest']
};
```

### Editor Integration

You should be able to use your favorite editor's (\*cough\* [VS Code](https://code.visualstudio.com/)) [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to easily format your code on save or with the [_Format_ command](https://code.visualstudio.com/docs/editor/codebasics#_formatting).
