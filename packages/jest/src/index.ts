import deepmerge from 'deepmerge';
import path from 'path';
import { InitialOptionsTsJest, pathsToModuleNameMapper } from 'ts-jest';
import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';
import type { MapLike } from 'typescript';

type ConfigBuilder = (tsConfigPath: string) => Promise<InitialOptionsTsJest>;

const baseConfig: ConfigBuilder = async (tsConfigPath) => {
  const cfg = (await import(tsConfigPath)) as {
    compilerOptions?: {
      paths?: MapLike<string[]>;
    };
  };

  const tsConfigPaths = cfg?.compilerOptions?.paths;

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
      ...(tsConfigPaths ? pathsToModuleNameMapper(tsConfigPaths) : {}),

      '\\.svg$': path.join(__dirname, 'mocks/svg.js'),
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        path.join(__dirname, 'mocks/file.js'),
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFiles: ['dotenv/config', '@growflow/jest/lib/fetch'],
  };
};

const tsAutoMockConfig: ConfigBuilder = async (tsConfigPath) =>
  deepmerge<InitialOptionsTsJest>(await baseConfig(tsConfigPath), {
    globals: {
      'ts-jest': {
        compiler: 'ttypescript',
      },
    },
    setupFiles: ['jest-ts-auto-mock'],
  });

type Opts = Partial<InitialOptionsTsJest> & {
  tsConfigPath: string;
  includeTsAutoMock?: boolean;
};

export async function createJestConfig(
  { includeTsAutoMock, tsConfigPath, ...cfg }: Opts = {
    tsConfigPath: './tsconfig.json',
  }
): Promise<InitialOptionsTsJest> {
  return includeTsAutoMock
    ? deepmerge(await tsAutoMockConfig(tsConfigPath), cfg)
    : deepmerge(await baseConfig(tsConfigPath), cfg);
}

export async function createUiJestConfig(
  cfg?: Opts
): Promise<InitialOptionsTsJest> {
  return deepmerge<InitialOptionsTsJest>(await createJestConfig(cfg), {
    testEnvironment: 'jsdom-sixteen',
    setupFilesAfterEnv: ['@growflow/jest/lib/jsdom-env'],
  });
}
