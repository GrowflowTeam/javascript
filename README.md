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
3. Update the package list in `deploy.yml` and the `workspaces` list in the root `package.json`.

## Deploying to npm

1. Ensure you **update the `version` field** in the `package.json` files of the packages you want to publish.

2. [Create a release in GitHub](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) describing the changes pointing to the commit with your changes (usually the `HEAD` of `main`). Follow semver for the tag which should be named in the format `{package}-v{major}.{minor}.{patch}`. e.g. `eslint-v4.20.0`.

3. A GitHub action looks for packages with versions that don't match what's published on npm and publishes the changed packages.
