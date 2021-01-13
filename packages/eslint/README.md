# GrowFlow Shared ESLint Configuration

> Shareable [ESLint](https://eslint.org/) configuration to apply consistent syntax and styling rules across GrowFlow projects.

## Usage

You can install this package and all of its peer dependencies with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps):

```
npx install-peerdeps --dev @growflow/eslint-config
```

You can then create a `.eslintrc.js` file with content similar to the following:

```js
module.exports = {
  extends: ['@growflow'],
  parserOptions: {
    project: 'tsconfig.json', // if using typescript
  },
};
```

### Editor Integration

You should be able to use your favorite editor's (\*cough\* [VS Code](https://code.visualstudio.com/)) [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to easily format your code on save or with the [_Format_ command](https://code.visualstudio.com/docs/editor/codebasics#_formatting).
