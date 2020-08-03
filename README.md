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
Just create a new folder inside the `packages` folder and start coding.

## Scripts

### firebaseSync
- Description: Syncs all projects firestore collections to BigQuery. It can only sync projects that the user has access to.
- Command: `yarn firebaseSync`
- Requirements: 
  - `FIREBASE_TOKEN` as environment variable. Just run `npx firebase ci:login` to get the token add it to your `.bash_profile` or export it.
  - Make sure that you are logged in GrowFlow account in gcloud SDK cli. Run: `gcloud auth application-default login`. [Check install guide](https://cloud.google.com/sdk/docs/downloads-interactive).


