import path from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';
import type { MapLike } from 'typescript';

export default async function coerceTsConfigPaths(
  tsConfigPath: string | null | undefined
) {
  if (!tsConfigPath) return {};

  const cfg = (await import(tsConfigPath)) as {
    compilerOptions?: {
      baseUrl?: string;
      paths?: MapLike<string[]>;
    };
  };

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

  return pathsToModuleNameMapper(tsConfigPaths);
}
