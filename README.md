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

## Developing

Clone this repo and run `yarn` from the repository's root to install dependencies.

### Creating a new package

1. First create a new top-level folder.
2. Copy one of the existing package's `package.json` to your new folder and tweak the values.
3. Inside the root `package.json` file, add the new folder to the `workspaces` property.


### Develop locally against an external app

In order for a local copy of an external frontend to use a local copy of one of these packages (e.g. @growflow/eslint-config), we have to "link" them locally.

Normally we would use `yarn link` to achieve this, but there are [known issues](https://github.com/facebook/react/issues/14257) that cause errors with React.

The best alternative solution is to use the utility [yalc](https://github.com/whitecolor/yalc).

**The below examples use `@growflow/eslint-config` and `wholesale-frontend` as an example.**

First, make sure to install `yalc` globally on your machine:

```
yarn global add yalc
or
npm i yalc -g
```

Then,

1. Inside the `eslint` folder, run `yalc publish`.
1. Inside `wholesale-frontend`, inside the root `package.json` file, under the `workspaces` property, add a new entry `.yalc/@*/*` (this only needs to be done one time)
1. Inside `wholesale-frontend`, run `yalc link "@growflow/eslint-config"` and `yarn install`
1. That should be it. If something isn't right, run `yarn clean` and re-run `yarn install`
1. When you are done developing, and **before** you push any changes, make sure you run `yalc remove --all`. This prevents `yarn.lock` from incorrectly thinking there is a local copy of `@growflow/eslint-config` instead of pulling from npm.

## Publishing

This repository uses [lerna](https://github.com/lerna/lerna) to manage its packages.

**Don't manage version numbers within `package.json` by hand.** Instead, after you have made and pushed your changes, run:

```
yarn release
```

which will guide you in bumping the version and confirm what packages are about to be published. It will also auto-create tags. You can then [create a release in GitHub](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) on the generated tag to create a changelog.
