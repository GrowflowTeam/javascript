# GrowFlow Javascript Style Guide

> Shareable configuration to apply consistent syntax and styling rules across GrowFlow JavaScript/TypeScript projects.

## Usage

Checkout the instructions for each individual package:

* [Browserslist config](./packages/browserslist/README.md)
* [ESLint config](./packages/eslint/README.md)
* [Prettier config](./packages/prettier/README.md)
* [Jest config](./packages/jest/README.md)

## Developing

Clone this repo and run `yarn` from the repository's root to install dependencies.

### Creating a new package

1. First create a new folder within the `packages` directory.
2. Copy one of the existing package's `package.json` to your new folder and tweak the values.

## Publishing

This repository uses [lerna](https://github.com/lerna/lerna) to manage its packages.

**Don't manage version numbers within `package.json` by hand.** Instead, after you have made and pushed your changes, run:

```
yarn release
```

which will guide you in bumping the version and confirm what packages are about to be published. It will also auto-create tags. You can then [create a release in GitHub](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) on the generated tag to create a changelog.
