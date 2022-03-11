import path from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';
import type { MapLike } from 'typescript';

interface TsConfig {
  compilerOptions?: {
    baseUrl?: string;
    paths?: MapLike<string[]>;
  };
}

async function loadTsConfig(tsConfigPath: string | null | undefined) {
  if (!tsConfigPath) return {};
  const cfg = (await import(tsConfigPath)) as TsConfig;
  return cfg;
}

export async function coerceTsConfigPaths(
  tsConfigPath: string | null | undefined
) {
  const cfg = await loadTsConfig(tsConfigPath);

  const tsConfigPaths = cfg?.compilerOptions?.paths;
  if (!tsConfigPaths) return {};

  const tsConfigBaseUrl = cfg?.compilerOptions?.baseUrl;
  if (tsConfigBaseUrl) {
    for (const p of Object.keys(tsConfigPaths)) {
      tsConfigPaths[p] = tsConfigPaths[p].map((x) =>
        path.join(tsConfigBaseUrl, x)
      );
    }
  }

  return pathsToModuleNameMapper(tsConfigPaths, { prefix: '<rootDir>/' });
}

export async function mapTsBaseUrl(tsConfigPath: string | null | undefined) {
  const cfg = await loadTsConfig(tsConfigPath);

  if (!cfg.compilerOptions?.baseUrl) {
    return ['node_modules'];
  }

  return ['node_modules', cfg.compilerOptions.baseUrl];
}
