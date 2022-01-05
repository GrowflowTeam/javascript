import type { Config } from '@jest/types';
import deepmerge from 'deepmerge';
import path from 'path';

const baseConfig: Config.InitialOptions = {
  preset: 'ts-jest',
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
    '\\.svg$': path.join(__dirname, 'mocks/svg.js'),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      path.join(__dirname, 'mocks/file.js'),
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFiles: ['dotenv/config', '@growflow/jest/lib/fetch'],
};

const { transform, ...baseConfigWithoutTransform } = baseConfig;

const tsAutoMockConfig = deepmerge<Config.InitialOptions>(
  baseConfigWithoutTransform,
  {
    globals: {
      'ts-jest': {
        compiler: 'ttypescript',
      },
    },
    transform: {
      '\\.tsx?$': 'ts-jest',
      '\\.jsx?$': ['babel-jest', { rootMode: 'upward' }],
    },
    setupFiles: ['jest-ts-auto-mock'],
  }
);

type OptsType = Partial<Config.InitialOptions> & {
  includeTsAutoMock?: boolean;
};

export function createJestConfig({
  includeTsAutoMock,
  ...cfg
}: OptsType = {}): Config.InitialOptions {
  return includeTsAutoMock
    ? deepmerge(tsAutoMockConfig, cfg)
    : deepmerge(baseConfig, cfg);
}

export function createUiJestConfig(cfg?: OptsType): Config.InitialOptions {
  return deepmerge<Config.InitialOptions>(createJestConfig(cfg), {
    testEnvironment: 'jsdom-sixteen',
    setupFilesAfterEnv: ['@growflow/jest/lib/jsdom-env'],
  });
}
