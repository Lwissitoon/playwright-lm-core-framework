import { test as baseTest } from '@playwright/test';
import { EnvConfig } from '../config/env.config';
import { CommonHelpers } from '../helpers/common.helpers';

export type GlobalFixtures = {
  envConfig: typeof EnvConfig;
  helpers: typeof CommonHelpers;
};

// Base core fixture layer providing environmental settings and generic utility hooks
export const globalTest = baseTest.extend<GlobalFixtures>({
  envConfig: async ({}, use) => {
    await use(EnvConfig);
  },
  helpers: async ({}, use) => {
    await use(CommonHelpers);
  }
});

export { expect } from '@playwright/test';