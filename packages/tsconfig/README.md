# GrowFlow Shared TypeScript Configuration

> Shareable [TypeScript](https://www.typescriptlang.org/) configuration to apply consistent compilation rules across GrowFlow TypeScript applications.

## Usage

You can easily install this package and all of its peer dependencies with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps):

```
npx install-peerdeps --dev @growflow/tsconfig
```

You can then add a `tsconfig.json` to the root of your project with contents similar to the folowing:

```json
{
  "extends": "@growflow/tsconfig",
  "include": ["src", "test"]
}
```

### Editor Integration

[VS Code](https://code.visualstudio.com/) will pick up your TypeScript configuration and Just Work™.
