const fs = require('fs');
const path = require('path');
const optionalRequire = require('optional-require')(require);
const get = require('lodash/get');

const tsConfig = optionalRequire(path.join(process.cwd(), 'tsconfig.json'));

module.exports = function getPlugin() {
  const baseUrl = get(tsConfig, 'compilerOptions.baseUrl');
  const paths = get(tsConfig, 'compilerOptions.paths');

  if (!baseUrl && !paths) return;

  const filePaths = fs.readdirSync(path.join(process.cwd(), baseUrl));

  const alias = {};

  for (const p of filePaths) {
    alias[p] = `./${path.relative(process.cwd(), path.resolve(baseUrl, p))}`;
  }

  if (paths) {
    for (const k of Object.keys(paths)) {
      alias[k] = `./${path.relative(
        process.cwd(),
        path.resolve(baseUrl, paths[k][0])
      )}`;
    }
  }

  return [
    'module-resolver',
    {
      root: [baseUrl],
      alias,
    },
  ];
};
