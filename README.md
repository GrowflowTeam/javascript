# Growflow Common

## Setup

```
yarn
yarn lerna bootstrap
```

## Publishing

It's being done by bitbucket pipeline by running `yarn lerna publish minor` and it's being published to growflow's private npm repos

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

Normally we would use `yarn link` to achieve this, but there are known issues that cause errors with React.

The best alternative solution is to use the utility [yalc](https://github.com/whitecolor/yalc).

**The below examples use `@growflow/ui` and `wholesale-frontend` as an example.**

First, make sure to install `yalc` globally on your machine:

```
yarn global add yalc
or
npm i yalc -g
```

Then,

1. Run `yarn run yalc` inside `growflow-common/packages/ui` (this will also build the bundle)
2. Inside `wholesale-frontend`, run `yalc link "@growflow/ui"`
3. That should be it. If something isn't right, try deleting `yarn.lock`, re-run `yarn install`, and re-run `yalc link "@growflow/ui"`
4. After making a change to `@growflow/ui`, you have to re-run `yarn run yalc` for the changes to propagate to `wholesale-frontend`

## Scripts

### firebaseSync

- Description: Syncs all projects firestore collections to BigQuery. It can only sync projects that the user has access to.
- Command: `yarn firebaseSync`
- Requirements:
  - `FIREBASE_TOKEN` as environment variable. Just run `npx firebase ci:login` to get the token add it to your `.bash_profile` or export it.
  - Make sure that you are logged in GrowFlow account in gcloud SDK cli. Run: `gcloud auth application-default login`. [Check install guide](https://cloud.google.com/sdk/docs/downloads-interactive).
