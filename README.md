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
Just create a new folder inside the `packages` folder and start coding

## Scripts

### firebaseSync
- Description: Syncs all projects firestore collections to BigQuery.
- Command: `yarn firebaseSync`
- Requirements: `FIREBASE_TOKEN` in ENV_VARS -> just run `npx firebase ci:login` to get the token add it to your .bash_profile


