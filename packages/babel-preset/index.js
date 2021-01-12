const MIN_NODE_VERSION = '12';

module.exports = (api) => {
  api.assertVersion(7);

  return {
    presets: [
      // https://babeljs.io/docs/en/babel-preset-env#browserslist-integration
      // we want to not set any explicit targets so that it will then
      // use standard browserslist config sources (e.g. package.json)
      ['@babel/env', { modules: false }],
      '@babel/typescript',
      '@babel/react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'named-asset-import',
        {
          loaderMap: {
            svg: {
              ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
            },
          },
        },
      ],
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'lib',
          style: true,
        },
        'antd',
      ],
      [
        'import',
        {
          libraryName: 'lodash',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'lodash',
      ],
    ],
    env: {
      node: {
        presets: [
          [
            '@babel/env',
            {
              targets: {
                node: MIN_NODE_VERSION,
              },
            },
          ],

          '@babel/typescript',
          '@babel/react',
        ],
      },
    },
  };
};
