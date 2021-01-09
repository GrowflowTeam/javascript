module.exports = () => ({
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '12',
        },
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
