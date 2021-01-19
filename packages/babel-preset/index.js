const MIN_NODE_VERSION = '12';

const nodeConfig = {
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
    [
      '@babel/react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};

module.exports = (api) => {
  api.assertVersion(7);

  return {
    presets: [
      // https://babeljs.io/docs/en/babel-preset-env#browserslist-integration
      // we want to not set any explicit targets so that it will then
      // use standard browserslist config sources (e.g. package.json)
      ['@babel/env', { modules: false }],
      '@babel/typescript',
      [
        '@babel/react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'inline-react-svg',
      ['import', { libraryName: 'antd' }, 'antd'],
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
      node: nodeConfig,
      test: nodeConfig,
    },
  };
};
