# GrowFlow Browserslist Shared Config

> [Browserslist](https://github.com/browserslist/browserslist) configuration that reflects which browsers GrowFlow web applications support.

## Usage

```
yarn add --dev @growflow/browserslist-config
```

You can then add a `browserslist` key to `package.json`:

```json
{
  "browserslist": ["extends @growflow/browserslist-config"]
}
```

This will allow different libraries and tools like [AutoPrefixer](https://github.com/postcss/autoprefixer) and [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) to utilize the same list of browsers when doing their thing.
