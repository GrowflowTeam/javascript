# @growflow/tsconfig

GrowFlow's sharable TypeScript configuration to apply the same compilation settings across TypeScript projects.

## Usage

Install as a dev dependency:

```
yarn add @growflow/tsconfig typescript -D
```

> Note: that you'll need a `.npmrc` file with Growflow's `NPM_TOKEN`.

Add a `tsconfig.json` to the root of your project with contents similar to the following:

```json
{
  "extends": "@growflow/tsconfig",
  "include": ["src", "test"],
  "compilerOptions": {
    "outDir": "dist"
  }
}
```
