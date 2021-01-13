# GrowFlow Javascript Style Guide

> Shareable configuration to apply consistent syntax and styling rules across GrowFlow JavaScript/TypeScript projects.

## Usage

Checkout the instructions for each individual package:

* [Babel Preset](./packages/babel-preset/README.md)
* [Browserslist config](./packages/browserslist/README.md)
* [ESLint config](./packages/eslint/README.md)
* [Prettier config](./packages/prettier/README.md)
* [TypeScript config](./packages/tsconfig/README.md)
* [Jest config](./packages/jest/README.md)

> Protip: to bootstrap a new project with all of this already configured, make use of [GrowFlow's CRA Template](https://github.com/GrowflowTeam/create-react-app).

## Developing

Clone this repo and run `yarn` from the repository's root to install dependencies.

### Creating a new package

1. First create a new folder within the `packages` directory.
2. Copy one of the existing package's `package.json` to your new folder and tweak the values.

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
