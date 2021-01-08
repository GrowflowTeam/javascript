# GrowFlow Javascript Style Guide

> Shareable [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [TypeScript](https://www.typescriptlang.org/) configuration to be used in Javascript/TypeScript applications to apply syntax and styling rules across GrowFlow projects.

## Usage

You can easily install these packages and all of their peer dependencies with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps):

```
npx install-peerdeps --dev @growflow/eslint-config
npx install-peerdeps --dev @growflow/prettier-config
npx install-peerdeps --dev @growflow/tsconfig
```

You can then create a `.eslintrc.js` file with content similar to the following:

```js
module.exports = {
  extends: ['@growflow'],
  parserOptions: {
    project: 'tsconfig.json',
  },
};
```

Add a `prettier` field to your `package.json` to use the shared prettier config:

```json
{
	"name": "my-cool-app",
	"version": "1.0.0",
	"prettier": "@growflow/prettier-config"
}
```

Add a `tsconfig.json` to the root of your project with contents similar to the folowing:

```json
{
	"extends": "@growflow/tsconfig",
	"include": ["src", "test"]
}
```

### Editor Integration

You should be able to use your favorite editor's (\*cough\* [VS Code](https://code.visualstudio.com/)) [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and/or [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to easily format your code on save or with the [_Format_ command](https://code.visualstudio.com/docs/editor/codebasics#_formatting).
