import type { Config } from '@jest/types';
import deepmerge from 'deepmerge';
import path from 'path';

const baseConfig: Config.InitialOptions = {
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
    '\\.svg$': path.join(__dirname, 'empty-svg.js'),
    '\\.less$': path.join(__dirname, 'empty.js'),
  },
  setupFiles: ['dotenv/config', path.join(__dirname, 'fetch.js')],
};

const tsAutoMockConfig = deepmerge<Config.InitialOptions>(baseConfig, {
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
  },
  setupFiles: ['jest-ts-auto-mock'],
});

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
    setupFilesAfterEnv: [path.join(__dirname, 'jsdom-env.js')],
  });
}
