import deepmerge from 'deepmerge';
import path from 'path';
import type { InitialOptionsTsJest } from 'ts-jest';
import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';

import { coerceTsConfigPaths, mapTsBaseUrl as doMapTsBaseUrl } from './paths';

type ConfigBuilder = (
  tsConfigPath: string | null | undefined,
  mapTsBaseUrl: boolean
) => Promise<InitialOptionsTsJest>;

const baseConfig: ConfigBuilder = async (tsConfigPath, mapTsBaseUrl) => {
  return {
    transform: tsjPreset.transform,

    testEnvironment: 'node',
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
      '**/test/**/*.[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/mocks/',
      '/fixtures/',
      '/setup/',
      'utils\\.[jt]sx?$',
      'setup\\.[jt]sx?$',
      'fixture\\.[jt]sx?$',
    ],
    moduleNameMapper: {
      ...(await coerceTsConfigPaths(tsConfigPath)),

      '\\.svg$': path.join(__dirname, 'mocks/svg.js'),
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        path.join(__dirname, 'mocks/file.js'),
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    moduleDirectories: mapTsBaseUrl
      ? await doMapTsBaseUrl(tsConfigPath)
      : undefined,
    setupFiles: ['dotenv/config'],
  };
};

const tsAutoMockConfig: ConfigBuilder = async (tsConfigPath, mapTsBaseUrl) =>
  deepmerge<InitialOptionsTsJest>(
    await baseConfig(tsConfigPath, mapTsBaseUrl),
    {
      globals: {
        'ts-jest': {
          compiler: 'ttypescript',
        },
      },
      setupFiles: ['jest-ts-auto-mock'],
    }
  );

type Opts = Partial<InitialOptionsTsJest> & {
  tsConfigPath?: string;
  includeTsAutoMock?: boolean;
  mapTsBaseUrl?: boolean;
};

export async function createJestConfig(
  { includeTsAutoMock, tsConfigPath, mapTsBaseUrl = true, ...cfg }: Opts = {
    tsConfigPath: './tsconfig.json',
  }
): Promise<InitialOptionsTsJest> {
  return includeTsAutoMock
    ? deepmerge(await tsAutoMockConfig(tsConfigPath, mapTsBaseUrl), cfg)
    : deepmerge(await baseConfig(tsConfigPath, mapTsBaseUrl), cfg);
}

export async function createUiJestConfig(
  cfg?: Opts
): Promise<InitialOptionsTsJest> {
  return deepmerge<InitialOptionsTsJest>(await createJestConfig(cfg), {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '@growflow/jest/lib/jsdom-env',
      '@growflow/jest/lib/fetch',
    ],
  });
}
