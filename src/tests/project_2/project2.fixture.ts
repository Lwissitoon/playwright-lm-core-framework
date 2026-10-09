import { globalTest } from '../../fixtures/global.fixture';
import { Project2App } from '../../pages/project_2/p2.factory';

// Local specific fixture extending core configurations to inject localized project context objects
export const test = globalTest.extend<{
  project2App: Project2App;
}>({
  project2App: async ({ page }, use) => {
    const app = new Project2App(page);
    await use(app);
  }
});

export { expect } from '@playwright/test';