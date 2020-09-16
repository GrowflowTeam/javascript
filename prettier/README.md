# @growflow/prettier-config

GrowFlow's sharable prettier configuration to apply the same coding style across JS/TS projects.

If you use this package in conjunction with `@growflow/eslint-config`, you should be able to use your favorite editor's (\*cough\* [VS Code](https://code.visualstudio.com/)) [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and/or [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to easily format your code on save or with the [*Format* command](https://code.visualstudio.com/docs/editor/codebasics#_formatting).

## Usage

Install as a dev dependency:

```
yarn add @growflow/prettier-config prettier -D
```

> Note: that you'll need a `.npmrc` file with Growflow's `NPM_TOKEN`.

Add a `prettier` field to your `package.json` to use the shared prettier config:

```json
{
  "name": "my-cool-app",
  "version": "4.20.0",
  "prettier": "@growflow/prettier-config"
}
```

![tada](https://media.giphy.com/media/MXM5QQ3jY7WmcmPwTI/giphy.gif)
