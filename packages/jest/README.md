# GrowFlow Jest Configuration

> Shareable [Jest](https://jestjs.io/) configuration to get testing up and running quickly for GrowFlow frontend and backend applications.

## Usage

```
yarn add --dev @growflow/jest
```

You can then create a `jest.config.ts` file in your project root:

```ts
import { createJestConfig } from '@growflow/jest';

export default createJestConfig();
```

For a frontend app, you can use `createUiJestConfig`:

```ts
import { createUiJestConfig } from '@growflow/jest';

export default createUiJestConfig();
```

### Customization

You can override any part of the jest config by passing a partial configuration object to be deep merged with the base config:

```ts
import { createUiJestConfig } from '@growflow/jest';

export default createUiJestConfig({
  rootDir: '../',
  testPathIgnorePatterns: ['./test/ignorme.tsx'],
});
```

### TS Auto Mock

The base configuration can automatically configure [TS Auto Mock](https://typescript-tdd.github.io/ts-auto-mock/). In order for this to work, it has to switch the compilation of the tests to [TTypeScript](https://github.com/cevek/ttypescript) (notice the extra _T_).

For this reason, TS Auto Mock support is opt-in:

```ts
import { createJestConfig } from '@growflow/jest';

export default createJestConfig({ includeTsAutoMock: true });
```

## Writing Tests

This jest configuration will run tests given a number of different styles:

- Run tests in a `test` folder adjacent to the `src` folder.
- Run tests in a `__test__` or `__tests__` folder anywhere in the workspace.
- Run tests in a `file.spec.ts` or `file.test.js` file adjacent to the SUT.

To match GrowFlow's style, in general, integration-like tests should go into a `test` folder adjacent to `src`. Unit-style tests should go in a `__tests__` folder or a `file.test.ts` file next to the file it is testing.
