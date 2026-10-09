import { globalTest } from '../../fixtures/global.fixture';
import { Project1App } from '../../pages/project_1/p1.factory';

// Local specific fixture extending core configurations to inject localized project context objects
export const test = globalTest.extend<{
  project1App: Project1App;
}>({
  project1App: async ({ page }, use) => {
    const app = new Project1App(page);
    await use(app);
  }
});

export { expect } from '@playwright/test';