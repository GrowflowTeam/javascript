module.exports = () => ({
  presets: [
    // https://babeljs.io/docs/en/babel-preset-env#browserslist-integration
    // by not explicitly setting targets here, it will use standard browserslist config sources
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
