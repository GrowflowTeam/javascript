# Growflow Common

## Setup

```
yarn
yarn lerna bootstrap
```

## Publishing

Publishing to npm is done from within the BitBucket production pipeline.

The pipeline will automatically attempt to publish a new version based on the `package.json` version of each package within this repo. (e.g. `packages/ui/package.json`)

If the `package.json` version of a package did not change, a publish will not happen.

In order to bump the version of a package (e.g. `@growflow/ui`), you must edit the corresponding `package.json` file (e.g. `packages/ui/package.json`) and bump the version number based on the following criteria (semantic versioning):

- Any version change of antd library should always be a major version bump
- Major changes have breaking changes that cause backwards incompatibility
- Minor changes have new features but are otherwise backwards compatible
- Patch changes have fixes or improvements to existing features that are backwards compatible

### How to bump the version of a package

1. Change working directory to that of a package (e.g. `cd packages/ui`)
2. To bump a patch version, run `yarn version:patch`
3. To bump a minor version, run `yarn version:minor`
4. To bump a major version, run `yarn version:major`

**All packages are published to growflow's private npm repos.**

## Running Linter and Tests

```
# From root
yarn lint
yarn test
```

## Creating a new package

1. First create a new folder inside the `packages` folder
2. Inside the root `package.json` file, add the new folder to the `workspaces` property
3. Inside the `bitbucket-pipelines.yml` file, add a new entry for the new package under `artifacts`

## How to use packages in external frontends

Within the external frontend (e.g. wholesale-frontend), run `yarn add PACKAGE_NAME` (e.g. `yarn add @growflow/ui).

That's it!

### How to develop locally against an external frontend

In order for a local copy of an external frontend (e.g. wholesale-frontend) to use a local copy of a common package (e.g. @growflow/ui), we have to "link" them locally.

Normally we would use `yarn link` to achieve this, but there are [known issues](https://github.com/facebook/react/issues/14257) that cause errors with React.

The best alternative solution is to use the utility [yalc](https://github.com/whitecolor/yalc).

**The below examples use `@growflow/ui` and `wholesale-frontend` as an example.**

First, make sure to install `yalc` globally on your machine:

```
yarn global add yalc
or
npm i yalc -g
```

Then,

1. Run `yarn dev` inside `growflow-common/packages/ui` (this will also build and watch the bundle)
1. Back inside `wholesale-frontend`, inside the root `package.json` file, under the `workspaces` property, add a new entry `.yalc/@*/*` (this only needs to be done one time)
1. Inside `wholesale-frontend`, run `yalc link "@growflow/ui"` and `yarn install`
1. That should be it. If something isn't right, run `yarn clean` and re-run `yarn install`
1. When you are done developing, and **before** you push any changes, make sure you run `yalc remove --all`. This prevents `yarn.lock` from incorrectly thinking there is a local copy of `@growflow/ui` instead of pulling from npm.

## Scripts

### firebaseSync

- Description: Syncs all projects firestore collections to BigQuery. It can only sync projects that the user has access to.
- Command: `yarn firebaseSync`
- Requirements:
  - `FIREBASE_TOKEN` as environment variable. Just run `npx firebase ci:login` to get the token add it to your `.bash_profile` or export it.
  - Make sure that you are logged in GrowFlow account in gcloud SDK cli. Run: `gcloud auth application-default login`. [Check install guide](https://cloud.google.com/sdk/docs/downloads-interactive).
