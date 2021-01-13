# GrowFlow Prettier Configuration

> Shareable [Prettier](https://prettier.io/) configuration to apply consistent code styling and formatting across GrowFlow projects.

## Usage

You can easily install this package and all of its peer dependencies with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps):

```
npx install-peerdeps --dev @growflow/prettier-config
```

You can then add a `prettier` field to your `package.json` to use the shared prettier config:

```json
{
  "prettier": "@growflow/prettier-config"
}
```

### Editor Integration

You should be able to use your favorite editor's (\*cough\* [VS Code](https://code.visualstudio.com/)) [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to easily format your code on save or with the [_Format_ command](https://code.visualstudio.com/docs/editor/codebasics#_formatting).
