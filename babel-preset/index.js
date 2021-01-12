const MIN_NODE_VERSION = '12';

module.exports = (api, opts) => {
  api.assertVersion(7);

  const { target } = opts;

  return {
    presets: [
      // https://babeljs.io/docs/en/babel-preset-env#browserslist-integration
      // when target is not node, we want to not set any explicit targets
      // it will then use standard browserslist config sources (e.g. package.json)
      target === 'node'
        ? [
            '@babel/env',
            {
              targets: {
                node: MIN_NODE_VERSION,
              },
            },
          ]
        : '@babel/env',

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
      ],
      [
        'import',
        {
          libraryName: 'lodash',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
      ],
    ],
  };
};
