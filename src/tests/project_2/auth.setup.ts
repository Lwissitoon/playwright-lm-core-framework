import { test as setup } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Project2App } from '../../pages/project_2/p2.factory';
import { EnvConfig } from '../../config/env.config';

setup('Authenticate Project 2 Environment Session', async ({ page }) => {
  await allure.epic("Infrastructure Setup");
  await allure.label("allure.label.infrastructure", "true"); 
  const app = new Project2App(page);
  
  // 1. Perform the unified UI login operation
  await app.loginPage.navigateTo(EnvConfig.project2.url);
  await app.loginPage.login(EnvConfig.project2.user, EnvConfig.project2.pass);
  
  // 2. Wait for full verification of post-auth state (dashboard redirect)
  await page.waitForURL(/.*automationexercise.*/);

  // 3. Dump cookies and localStorage states securely to disk
  await page.context().storageState({ path: './src/storage/project_2_auth.json' });
});
