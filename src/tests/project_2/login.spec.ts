import { test } from '@playwright/test';
import { Project2App } from '../../pages/project_2/p2.factory';
import { CommonHelpers } from '../../helpers/common.helpers';
import { EnvConfig } from '../../config/env.config';

test.describe('Project 2 - Authentication Suite', () => {
  let app: Project2App;

  test.beforeEach(async ({ page }) => {
    app = new Project2App(page);
    await app.loginPage.navigateTo(EnvConfig.project2.url);
  });

  test('Should attempt login with a dynamically generated fake email', async () => {
    const fakeEmail = CommonHelpers.generateRandomEmail();
    await app.loginPage.login(fakeEmail, 'SecurePassword123!');
  });
});
