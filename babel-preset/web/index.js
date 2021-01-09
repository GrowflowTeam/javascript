module.exports = () => ({
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['defaults', 'not IE 11'],
        },
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
