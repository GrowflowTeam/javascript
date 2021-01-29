# GrowFlow Babel Preset

> Babel preset that allows you to use the latest TypeScript features across GrowFlow projects.

## Usage

```
yarn add --dev @growflow/babel-preset
```

You can then create a `babel.config.json` file in the root of your project:

```json
{
  "presets": ["@growflow/babel-preset"]
}
```

The preset will compile for both the web and for node. It will **compile for the web by default** (specifically for use in webpack). It will leave `import`s and `export`s intact so that webpack can [tree shake](https://webpack.js.org/guides/tree-shaking/).

To compile for node v12, you will need to set the `BABEL_ENV` or `NODE_ENV` environment variable  to `node` or `test` when compiling. If you are using Jest, it will automatically set the `NODE_ENV` variable to `test` for you.

### Running an App

If you want to run your app or server via babel, you can make use of [`@babel/node`](https://babeljs.io/docs/en/babel-node).

```
npx install-peerdeps @babel/node --dev
```

Assuming the entry point of your app lives at `src/index.ts`:

```
BABEL_ENV=node babel-node --extensions ".ts,.tsx,.js,.jsx" src/index.ts
```

### Compiling Libraries

Here is a sample `package.json` that will compile a TypeScript project with source files in the `src` folder into three "distribution" folders:

- `es`: This is where the "webpackable" version of the compiled code is output. This code will still have `import` and `export` module syntax untouched. The `package.json`'s `module` key points to this entry which Webpack will find and use. We can also signal to Webpack that our library is [tree-shakable](https://webpack.js.org/guides/tree-shaking/) via the `sideEffects` key.

- `lib`: This is where the node version of the compiled code is output. The module syntax will be compiled to CommonJS so that it can be used within a node app. This output corresponds to the `package.json`'s `main` entry.

- `dist`: The TypeScript type declarations are output here so that consuming apps that use TypeScript will get intellisense and type-checking. The `package.json`'s `types` key points here.

```json
{
  "main": "lib/index.js",
  "module": "es/index.js",
  "types": "dist/index.d.ts",

  "sideEffects": false,

  "files": ["es", "lib", "dist", "README.md"],

  "scripts": {
    "build": "rimraf dist es lib && tsc -p tsconfig.output.json && babel src -d es --extensions \".ts,.tsx,.js,.jsx\" --source-maps --root-mode upward --copy-files && cross-env BABEL_ENV=node babel src -d lib --extensions \".ts,.tsx,.js,.jsx\" --source-maps --root-mode upward --copy-files"
  },

  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.6",
    "@growflow/babel-preset": "^5.7.1",
    "cross-env": "^7.0.2",
    "rimraf": "^3.0.2"
  }
}
```

where `tsconfig.output.json` is a TypeScript configuration file which is only used to output type definitions:

```json
{
  "extends": "./tsconfig.json",
  "include": ["src"],
  "compilerOptions": {
    "noEmit": false,
    "emitDeclarationOnly": true,
    "rootDir": "src",
    "outDir": "dist"
  }
}
```

> We make use of [`cross-env`](https://www.npmjs.com/package/cross-env) to set the `BABEL_ENV` variable to that poor Windows users can play along. Remember, Windows users are people too and they deserve to compile code just like you. 😁

### Usage within a Monorepo

If you have multiple packages within a monorepo, you can make use of this preset with a single `babel.config.json` file at the root of the project. In order for babel to find the configuration file, you will need to [set the root mode to `upward`](https://babeljs.io/docs/en/config-files#root-babelconfigjson-file). The sample `build` command above already does this.
