# @growflow/eslint-config

## Getting started
### Install
Install as dev dependency
```
yarn add @growflow/eslint-config -D
```

Please note: that you'll need a `.npmrc` file with the Growflow's NPM_TOKEN

### Dependencies
You'll need to add the following dev dependencies to your package.json
```
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-monorepo eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security prettier -D
```

### Using it
You'll need to create a `.eslintrc.json` or `.eslintrc` file with the following content:
```
{
  "extends": ["@growflow/eslint-config"],
  "parserOptions": {
    "ecmaVersion": 6,
    "project": "./tsconfig.json"
  },
  "root": true,
  "ignorePatterns": [
    "config/*",
    "node_modules",
    "dist",
    "package.json",
    "__GENERATED__",
    "cypress",
    "jest",
    "__TESTS__",
    "*.stories.js",
    "*.spec.js"
  ]
}
```
